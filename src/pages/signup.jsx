import React, { useState } from "react";
import { Paper, Typography, TextField, Button, Stack, Link, Box } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import signupLottie from "../assets/login-anim.json";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    if (form.password !== form.confirm) {
      setErr("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/auth/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        navigate("/login");
      } else {
        setErr(data.error || "Signup failed");
      }
    } catch {
      setErr("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 w-full h-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-950 via-black to-indigo-900 overflow-hidden font-poppins">
      {/* Particles background */}
      <Particles
        id="tsparticles-signup"
        className="absolute inset-0 z-0"
        init={async (main) => {
          await loadFull(main);
        }}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          fpsLimit: 40,
          particles: {
            number: { value: 18, density: { enable: true, area: 900 } },
            color: { value: "#38bdf8" },
            shape: { type: ["circle"] },
            opacity: { value: 0.13, random: true },
            size: { value: 2, random: true },
            move: { enable: true, speed: 0.4, direction: "none", outModes: "bounce" },
            links: {
              enable: false,
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
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.18}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="w-full max-w-3xl mx-auto"
        style={{ zIndex: 1 }}
      >
        <Paper
          elevation={3}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            p: 0,
            maxWidth: 900,
            mx: "auto",
            width: "100%",
            borderRadius: 4,
            display: "flex",
            overflow: "hidden",
            minHeight: { xs: 500, md: 420 },
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
            border: "1.5px solid rgba(255,255,255,0.13)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
            position: "relative",
            color: "#fff", // Make all text white by default
          }}
        >
          {/* Left: Animation */}
          <Box
            sx={{
              flex: 1.2,
              bgcolor: "rgba(30,41,59,0.85)",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              minWidth: 320,
              minHeight: 420,
            }}
          >
            <Lottie animationData={signupLottie} loop style={{ width: 340, height: 340 }} />
          </Box>
          {/* Right: Form */}
          <Box
            sx={{
              flex: 1.5,
              p: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: 320,
            }}
          >
            <Typography variant="h4" fontWeight={700} color="#fff" gutterBottom align="center">
              Create Account
            </Typography>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Stack spacing={2}>
                <TextField
                  label="Username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: "#fff" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#38bdf8" },
                      "&.Mui-focused fieldset": { borderColor: "#38bdf8" },
                    },
                  }}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: "#fff" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#38bdf8" },
                      "&.Mui-focused fieldset": { borderColor: "#38bdf8" },
                    },
                  }}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: "#fff" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#38bdf8" },
                      "&.Mui-focused fieldset": { borderColor: "#38bdf8" },
                    },
                  }}
                />
                <TextField
                  label="Confirm Password"
                  name="confirm"
                  type="password"
                  value={form.confirm}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: "#fff" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#38bdf8" },
                      "&.Mui-focused fieldset": { borderColor: "#38bdf8" },
                    },
                  }}
                />
                {err && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center"
                  >
                    {err}
                  </motion.div>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
                  sx={{ fontWeight: 600, py: 1.5 }}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </Button>
              </Stack>
            </form>
            <Typography variant="body2" align="center" sx={{ mt: 2, color: "#fff" }}>
              Already have an account?{" "}
              <Link href="/login" underline="hover" sx={{ color: "#38bdf8" }}>
                Login
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Tilt>
    </div>
  );
}
