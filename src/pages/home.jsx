import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";
import { Collapse } from "react-collapse";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "@fortawesome/fontawesome-free/css/all.min.css";

const features = [
  {
    icon: "fas fa-brain",
    title: "AI Diagnosis",
    desc: "Cutting-edge AI for instant, accurate diagnostics.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: "fas fa-heartbeat",
    title: "Realtime Monitoring",
    desc: "Live health data, always at your fingertips.",
    color: "from-pink-400 to-purple-500",
  },
  {
    icon: "fas fa-calendar-alt",
    title: "Smart Scheduling",
    desc: "Effortless, intelligent appointment management.",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Encrypted Records",
    desc: "Your data, protected with military-grade security.",
    color: "from-yellow-400 to-orange-500",
  },
];

const testimonials = [
  {
    quote:
      "MediSync 360 transformed our workflow. The 3D dashboard and real-time updates are game changers.",
    name: "Dr. Kavita Mehra",
    role: "Endocrinologist",
  },
  {
    quote:
      "I love the glassy UI and smooth transitions. Booking and tracking appointments is a breeze.",
    name: "Sameer Joshi",
    role: "Patient",
  },
];

const social = [
  { icon: "fab fa-twitter", link: "#" },
  { icon: "fab fa-linkedin", link: "#" },
  { icon: "fab fa-github", link: "#" },
];

const stats = [
  { label: "Patients Served", value: 120000 },
  { label: "Doctors Onboard", value: 3500 },
  { label: "Hospitals Connected", value: 120 },
  { label: "Avg. Response Time", value: "2s" },
];

const logos = [
  "/hospital1.png",
  "/hospital2.png",
  "/hospital3.png",
  "/hospital4.png",
  "/hospital5.png",
];

const faqs = [
  {
    q: "Is my health data secure?",
    a: "Absolutely. We use end-to-end encryption and comply with all major healthcare data regulations.",
  },
  {
    q: "Can I access MediSync 360 on mobile?",
    a: "Yes, our platform is fully responsive and works on all modern devices.",
  },
  {
    q: "How do I book an appointment?",
    a: "Simply sign up, choose your doctor, and select an available slot. It's that easy!",
  },
  {
    q: "Is there customer support?",
    a: "Yes, our support team is available 24/7 via chat, email, and phone.",
  },
];

function FloatingIcons() {
  // Decorative floating icons in hero background
  const icons = [
    "fas fa-user-md",
    "fas fa-stethoscope",
    "fas fa-pills",
    "fas fa-syringe",
    "fas fa-notes-medical",
    "fas fa-ambulance",
  ];
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {icons.map((icon, i) => (
        <motion.i
          key={i}
          className={`${icon} text-white/30 text-5xl absolute`}
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

function StatsSection() {
  return (
    <section className="relative z-10 py-16 px-6 md:px-20">
      <Fade direction="up" triggerOnce>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-blue-400 drop-shadow-lg">
                {typeof stat.value === "number" ? (
                  <CountUp end={stat.value} duration={2} separator="," />
                ) : (
                  stat.value
                )}
              </span>
              <span className="text-gray-200 mt-2 text-lg text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}

function LogoCarousel() {
  return (
    <section className="relative z-10 py-10 px-6 md:px-20">
      <Fade direction="up" triggerOnce>
        <h3 className="text-center text-white text-xl mb-6 font-semibold">Trusted By Leading Hospitals</h3>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 animate-scroll"
            style={{ animation: "scroll 18s linear infinite" }}
          >
            {logos.concat(logos).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Hospital Logo"
                className="h-12 grayscale hover:grayscale-0 transition"
                draggable={false}
              />
            ))}
          </motion.div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </Fade>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="relative z-10 py-24 px-6 md:px-20">
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/10 rounded-2xl shadow-lg"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-semibold text-white focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <motion.span
                  animate={{ rotate: open === i ? 90 : 0 }}
                  className="ml-3"
                >
                  <i className="fas fa-chevron-right" />
                </motion.span>
              </button>
              <Collapse isOpened={open === i}>
                <div className="px-6 pb-5 text-gray-200">{faq.a}</div>
              </Collapse>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}

const HomeAdvanced = () => (
  <div className="min-h-screen bg-gradient-to-tr from-blue-950 via-black to-indigo-900 font-poppins overflow-x-hidden relative">
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
        particles: {
          color: { value: "#a78bfa" },
          links: { enable: true, color: "#38bdf8" },
          move: { enable: true, speed: 0.5 },
          number: { value: 30 },
          opacity: { value: 0.2 },
          size: { value: 2 },
        },
      }}
    />

    {/* Glassmorphic Navbar */}
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-white/10 backdrop-blur-xl shadow-lg rounded-b-3xl border-b border-white/10"
    >
      <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text tracking-tight drop-shadow-lg">
        MediSync 360
      </span>
      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.08 }}
          className="px-5 py-2 rounded-xl text-sm bg-white/20 hover:bg-white/30 transition font-semibold shadow"
        >
          Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.08 }}
          className="px-5 py-2 rounded-xl text-sm bg-blue-500 hover:bg-blue-600 transition font-semibold shadow text-white"
        >
          Sign Up
        </motion.button>
      </div>
    </motion.nav>

    {/* Hero Section with Parallax & 3D */}
    <section className="pt-44 pb-24 text-center relative overflow-hidden">
      <FloatingIcons />
      <Fade direction="down" triggerOnce>
        <motion.h1
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-2xl"
        >
          <span className="block">Reimagine</span>
          <span className="block">Healthcare</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl text-gray-200 mt-8 max-w-2xl mx-auto"
        >
          3D dashboards, glassmorphic UI, and AI-powered care. Welcome to the future of health.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 flex justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px #38bdf8" }}
            className="bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px #a78bfa" }}
            className="border border-white/20 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg text-white"
          >
            <i className="fas fa-magic mr-2"></i> Live Preview
          </motion.button>
        </motion.div>
      </Fade>
      {/* 3D Animated SVG Blob */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ delay: 0.2, duration: 1.5, type: "spring" }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
      >
        <svg width="600" height="400">
          <defs>
            <radialGradient id="blobGrad" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#a78bfa" />
            </radialGradient>
          </defs>
          <motion.path
            d="M300,60 Q400,80 420,200 Q440,320 300,340 Q160,320 180,200 Q200,80 300,60Z"
            fill="url(#blobGrad)"
            animate={{
              d: [
                "M300,60 Q400,80 420,200 Q440,320 300,340 Q160,320 180,200 Q200,80 300,60Z",
                "M300,80 Q420,100 400,200 Q420,320 300,320 Q180,320 200,200 Q180,100 300,80Z",
                "M300,60 Q400,80 420,200 Q440,320 300,340 Q160,320 180,200 Q200,80 300,60Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </section>

    {/* Stats Section */}
    <StatsSection />

    {/* Logo Carousel */}
    <LogoCarousel />

    {/* Features with 3D Tilt and Glassmorphism */}
    <section className="relative z-10 py-24 px-6 md:px-20">
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg">
          Key Features
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Tilt
              key={f.title}
              glareEnable={true}
              glareMaxOpacity={0.35}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              className="rounded-3xl"
            >
              <motion.div
                whileHover={{ scale: 1.07, y: -10 }}
                className={`bg-gradient-to-br ${f.color} p-1 rounded-3xl shadow-2xl`}
              >
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 min-h-[260px] flex flex-col items-center justify-center glass-card border border-white/10">
                  <i className={`${f.icon} text-5xl mb-6 text-white drop-shadow-lg`} />
                  <h3 className="text-2xl font-bold mb-2 text-white">{f.title}</h3>
                  <p className="text-gray-100 text-center">{f.desc}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </Fade>
    </section>

    {/* Parallax CTA */}
    <section className="relative z-10 py-24 px-6 md:px-20">
      <Zoom triggerOnce>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, type: "spring" }}
          className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-3xl shadow-2xl p-16 text-center glass-card border border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Get Started With MediSync Today
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
            Trusted by clinics and hospitals worldwide for smarter, faster outcomes.
          </p>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px #38bdf8" }}
            className="bg-blue-500 px-10 py-4 text-white text-lg rounded-2xl font-bold shadow-lg"
          >
            Request a Demo
          </motion.button>
        </motion.div>
      </Zoom>
    </section>

    {/* Testimonials with Scroll Animations */}
    <section className="relative z-10 py-24 px-6 md:px-20">
      <Slide direction="up" triggerOnce>
        <h2 className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg">
          What They Say
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -6 }}
              className="bg-white/10 border border-white/10 p-8 rounded-3xl glass-card shadow-xl"
            >
              <p className="mb-6 text-gray-100 italic text-lg">“{t.quote}”</p>
              <h4 className="font-bold text-blue-400">{t.name}</h4>
              <p className="text-sm text-gray-300">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </Slide>
    </section>

    {/* FAQ Section */}
    <FAQSection />

    {/* Footer with Glassmorphism and Socials */}
    <footer className="relative z-10 px-8 md:px-20 py-16 mt-20 bg-white/10 backdrop-blur-xl rounded-t-3xl border-t border-white/10 text-gray-200 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h4 className="text-white font-semibold text-2xl">MediSync 360</h4>
          <p className="text-sm mt-2">Revolutionizing care with secure, intelligent health tech.</p>
          <div className="flex gap-4 text-2xl mt-4">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Support</h4>
          <p>Email: support@medisync360.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>
      <p className="text-center mt-10 text-sm text-gray-400">
        &copy; 2025 MediSync 360. All rights reserved.
      </p>
    </footer>
  </div>
);

export default HomeAdvanced;