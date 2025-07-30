import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loginLottie from "../assets/login-anim.json";
import { Fade } from "react-awesome-reveal";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

// Memoize social icons to avoid re-render
const SocialIcons = memo(() => (
  <div className="flex justify-center gap-6 mt-8">
    {["fab fa-google", "fab fa-facebook", "fab fa-github"].map((icon) => (
      <Tilt key={icon} tiltMaxAngleX={12} tiltMaxAngleY={12}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="text-2xl text-white/70 hover:text-blue-400 transition"
          style={{ background: "none", border: "none" }}
          tabIndex={-1}
        >
          <i className={icon} />
        </motion.button>
      </Tilt>
    ))}
  </div>
));

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await fetch("http://localhost:8000/auth/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        navigate("/dashboard");
      } else {
        setErr(data.error || "Login failed");
      }
    } catch (error) {
      setErr("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 w-full h-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-950 via-black to-indigo-900 overflow-hidden font-poppins">
      {/* Fewer animated particles */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        init={async (main) => {
          await loadFull(main);
        }}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          fpsLimit: 30,
          particles: {
            number: { value: 25, density: { enable: true, area: 900 } }, // reduced
            color: { value: "#a78bfa" },
            shape: { type: ["star"] },
            opacity: { value: 0.15, random: true },
            size: { value: 2, random: true },
            move: { enable: true, speed: 0.3, direction: "none", outModes: "bounce" },
            links: {
              enable: false // disable links for less DOM
            },
          },
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false },
              resize: true,
            },
          },
          detectRetina: true,
        }}
      />

      <Fade direction="up" triggerOnce>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.18}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className="w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="relative z-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 flex flex-col md:flex-row overflow-hidden"
          >
            {/* Lottie Animation */}
            <div className="md:w-1/2 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-900/60 to-purple-900/60 relative">
              <Lottie
                animationData={loginLottie}
                loop
                className="w-40 h-40 mx-auto" // smaller size
                style={{ filter: "drop-shadow(0 0 24px #38bdf8aa)" }}
              />
            </div>
            {/* Login Form */}
            <div className="md:w-1/2 flex flex-col justify-center p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 text-center drop-shadow-lg">
                Welcome Back
              </h2>
              <form
                className="space-y-5"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-white/80 mb-2 font-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    required
                    value={form.username}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-xl bg-white/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2 font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    value={form.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-xl bg-white/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
                {err && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center"
                  >
                    {err}
                  </motion.div>
                )}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-base shadow-lg transition"
                >
                  {loading ? "Logging in..." : "Login"}
                </motion.button>
              </form>
              <div className="flex justify-between mt-4 text-xs text-gray-300">
                <a href="#" className="hover:text-blue-400 transition">
                  Forgot password?
                </a>
                <a href="/signup" className="hover:text-blue-400 transition">
                  Create account
                </a>
              </div>
              {/* Social login icons */}
              <SocialIcons />
            </div>
          </motion.div>
        </Tilt>
      </Fade>
      {/* Remove extra animated blobs for less GPU/CPU usage */}
    </div>
  );
};

export default Login;