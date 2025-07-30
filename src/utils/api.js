const BASE_URL = "http://localhost:8000";

const getAccessToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");

const setTokens = ({ access, refresh }) => {
  if (access) localStorage.setItem("accessToken", access);
  if (refresh) localStorage.setItem("refreshToken", refresh);
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
};

const refreshAccessToken = async () => {
  const refresh = getRefreshToken();
  if (!refresh) return null;
  try {
    const res = await fetch(`${BASE_URL}/auth/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });
    if (!res.ok) throw new Error("Failed to refresh token");
    const data = await res.json();
    setTokens({ access: data.access });
    return data.access;
  } catch {
    logout();
    return null;
  }
};

const apiFetch = async (url, options = {}, retry = true) => {
  const access = getAccessToken();
  const headers = {
    ...(options.headers || {}),
    "Content-Type": "application/json",
    ...(access ? { Authorization: `Bearer ${access}` } : {}),
  };

  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (response.status === 401 && retry) {
    // Try to refresh token and retry request
    const newAccess = await refreshAccessToken();
    if (newAccess) {
      return apiFetch(url, options, false);
    }
    throw new Error("Unauthorized");
  }

  return response;
};

export default apiFetch;
export { BASE_URL, getAccessToken, getRefreshToken, setTokens, logout, refreshAccessToken };