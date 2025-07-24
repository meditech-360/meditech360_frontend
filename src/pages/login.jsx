import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loginLottie from "../assets/login-anim.json"; // Place a Lottie JSON here
import { Fade } from "react-awesome-reveal";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

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
      // Replace with your actual API endpoint
      const res = await fetch("/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        // Save token, redirect, etc.
        localStorage.setItem("token", data.token);
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
      {/* Animated Particles */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        init={async (main) => {
          await loadFull(main);
        }}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: { value: "#a78bfa" },
              shape: {
                type: ["star"], // You can change to "circle", "polygon", "triangle", etc.
              },
              opacity: {
                value: 0.2,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                  sync: false,
                },
              },
              size: {
                value: 2.5,
                random: true,
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                outModes: "bounce",
              },
              links: {
                enable: true,
                color: "#38bdf8",
                distance: 130,
                opacity: 0.2,
                width: 1,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: ["repulse", "trail"],
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  quantity: 4,
                },
                trail: {
                  delay: 0.01,
                  quantity: 2,
                  particles: {
                    color: {
                      value: "#38bdf8",
                    },
                    move: {
                      speed: 1,
                      direction: "none",
                    },
                    size: {
                      value: 2,
                    },
                    opacity: {
                      value: 0.2,
                      anim: {
                        enable: true,
                        speed: 0.2,
                        opacity_min: 0.05,
                      },
                    },
                  },
                },
              },
            },
            detectRetina: true,
          }}
        />

        {/* 3D Glassmorphic Card */}
        <Fade direction="up" triggerOnce>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative z-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 flex flex-col md:flex-row overflow-hidden"
            >
              {/* Lottie Animation & 3D Decorative SVG */}
              <div className="md:w-1/2 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900/60 to-purple-900/60 relative">
                <Lottie
                  animationData={loginLottie}
                  loop
                  className="w-64 h-64 mx-auto"
                  style={{ filter: "drop-shadow(0 0 40px #38bdf8aa)" }}
                />
                {/* 3D SVG Orb */}
                <motion.svg
                  width="120"
                  height="120"
                  className="absolute bottom-6 right-6 opacity-70"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                  <defs>
                    <radialGradient id="orb" cx="50%" cy="50%" r="80%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </radialGradient>
                  </defs>
                  <ellipse
                    cx="60"
                    cy="60"
                    rx="50"
                    ry="30"
                    fill="url(#orb)"
                    filter="url(#blur)"
                  />
                </motion.svg>
              </div>
              {/* Login Form */}
              <div className="md:w-1/2 flex flex-col justify-center p-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center drop-shadow-lg">
                  Welcome Back
                </h2>
                <form
                  className="space-y-6"
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
                      className="w-full px-5 py-3 rounded-xl bg-white/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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
                      className="w-full px-5 py-3 rounded-xl bg-white/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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
                    whileHover={{ scale: 1.04, boxShadow: "0 0 20px #38bdf8" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-lg transition"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </motion.button>
                </form>
                <div className="flex justify-between mt-6 text-sm text-gray-300">
                  <a href="#" className="hover:text-blue-400 transition">
                    Forgot password?
                  </a>
                  <a href="/register" className="hover:text-blue-400 transition">
                    Create account
                  </a>
                </div>
                {/* Parallax animated divider */}
                <motion.div
                  className="w-full h-1 mt-10 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 1, type: "spring" }}
                  style={{ originX: 0 }}
                />
                {/* Social login icons with 3D hover */}
                <div className="flex justify-center gap-6 mt-8">
                  {["fab fa-google", "fab fa-facebook", "fab fa-github"].map(
                    (icon, i) => (
                      <Tilt key={icon} tiltMaxAngleX={20} tiltMaxAngleY={20}>
                        <motion.button
                          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                          className="text-3xl text-white/70 hover:text-blue-400 transition"
                          style={{ background: "none", border: "none" }}
                          tabIndex={-1}
                        >
                          <i className={icon} />
                        </motion.button>
                      </Tilt>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </Tilt>
        </Fade>
        {/* Animated gradient blobs for extra depth */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/30 blur-3xl z-0"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/30 blur-3xl z-0"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </div>
    );
  };
  
  export default Login;