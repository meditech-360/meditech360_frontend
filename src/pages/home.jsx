import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";
import { Collapse } from "react-collapse";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";



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
  // Example SVG hospital logos (you can replace these with your own or use PNGs)
  "https://freelanceservicesindia.com/wp-content/uploads/2019/07/AIIMS-Logo.png", // AIIMS
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_the_Red_Cross.svg/1024px-Flag_of_the_Red_Cross.svg.png", // Red Cross
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oDObXRQKgJn4WuIiRJkWg7Qb96rpP4tTew&s", // Johns Hopkins
  "https://logos-world.net/wp-content/uploads/2023/02/Mayo-Clinic-Logo.png", // Mayo Clinic
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEkWLOxuTRBr5BerbLnSvZSpCt7ij-l0kiA&s", // Cleveland Clinic
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
    <section className="relative z-10 py-10 px-3 sm:px-6 md:px-20">
      <Fade direction="up" triggerOnce>
        <h3 className="text-center text-white text-xl mb-6 font-semibold">Trusted By Leading Hospitals</h3>
        <div className="overflow-x-auto">
          <motion.div
            className="flex gap-8 sm:gap-12 items-center animate-scroll"
            style={{ animation: "scroll 18s linear infinite" }}
          >
            {logos.concat(logos).map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center">
                <img
                  src={logo}
                  alt="Hospital Logo"
                  className="h-10 sm:h-12 md:h-16 grayscale hover:grayscale-0 transition rounded-lg bg-white/30 p-2 shadow"
                  draggable={false}
                  style={{ minWidth: "60px", maxWidth: "120px", objectFit: "contain" }}
                />
              </div>
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

const HomeAdvanced = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-blue-950 via-black to-indigo-900 font-poppins overflow-x-hidden relative">
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
          color: { value: "#38bdf8" },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 180, // more space between lines
            opacity: 0.18, // less visible
            width: 1,
            shadow: {
              enable: true,
              color: "#38bdf8",
              blur: 4, // less blur
            },
          },
          move: { enable: true, speed: 0.7 },
          number: { value: 35, density: { enable: true, area: 900 } }, // fewer particles
          opacity: { value: 0.18, random: true },
          size: { value: 2, random: true },
          shape: { type: ["circle", "line"] },
        },
        detectRetina: true,
      }}
    />

    {/* Glassmorphic Navbar */}
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 md:px-12 py-3 sm:py-5 flex flex-wrap justify-between items-center bg-white/10 backdrop-blur-xl shadow-lg rounded-b-3xl border-b border-white/10"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <span className="text-xl sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text tracking-tight drop-shadow-lg whitespace-nowrap">
        MediSync 360
      </span>
 <div className="flex flex-wrap gap-2 sm:gap-4">
  <motion.button
    whileHover={{ scale: 1.08 }}
    onClick={() => navigate("/login")}
    className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-white/20 hover:bg-white/30 transition font-semibold shadow whitespace-nowrap"
  >
    Login
  </motion.button>
  <motion.button
    whileHover={{ scale: 1.08 }}
    onClick={() => navigate("/signup")}
    className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-blue-500 hover:bg-blue-600 transition font-semibold shadow text-white whitespace-nowrap"
  >
    Sign Up
  </motion.button>
</div>

    </motion.nav>

    {/* Hero Section */}
    <section className="pt-28 sm:pt-44 pb-10 sm:pb-20 text-center relative overflow-hidden">
      <FloatingIcons />
      <Fade direction="down" triggerOnce>
        <motion.h1
          className="text-2xl sm:text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-2xl break-words"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <span className="block">Reimagine</span>
          <span className="block">Healthcare</span>
        </motion.h1>
        <motion.p
          className="text-xs sm:text-base md:text-xl text-gray-200 mt-4 sm:mt-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto break-words"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/* 3D dashboards, glassmorphic UI, and AI-powered care. Welcome to the future of health. */}
        </motion.p>
        <motion.div
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px #38bdf8" }}
            className="bg-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-lg whitespace-nowrap"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px #a78bfa" }}
            className="border border-white/20 bg-white/10 hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-lg text-white whitespace-nowrap"
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

    {/* Features Section */}
    <section className="relative z-10 py-10 sm:py-20 px-3 sm:px-6 md:px-20">
      <Fade direction="up" triggerOnce>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-12 text-white drop-shadow-lg">
          Key Features
        </h2>
        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 min-h-[180px] sm:min-h-[220px] flex flex-col items-center justify-center glass-card border border-white/10">
                  <i className={`${f.icon} text-3xl sm:text-5xl mb-4 sm:mb-6 text-white drop-shadow-lg`} />
                  <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-white text-center break-words">{f.title}</h3>
                  <p className="text-gray-100 text-xs sm:text-base text-center break-words">{f.desc}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </Fade>
    </section>

    {/* CTA Section */}
    <section className="relative z-10 py-10 sm:py-20 px-3 sm:px-6 md:px-20">
      <Zoom triggerOnce>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, type: "spring" }}
          className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-3xl shadow-2xl p-8 sm:p-16 text-center glass-card border border-white/10"
        >
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg break-words">
            Get Started With MediSync Today
          </h2>
          <p className="text-gray-200 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mb-4 sm:mb-8 text-xs sm:text-lg break-words">
            Trusted by clinics and hospitals worldwide for smarter, faster outcomes.
          </p>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px #38bdf8" }}
            className="bg-blue-500 px-6 py-3 sm:px-10 sm:py-4 text-white text-base sm:text-lg rounded-2xl font-bold shadow-lg whitespace-nowrap"
          >
            Request a Demo
          </motion.button>
        </motion.div>
      </Zoom>
    </section>

    {/* Testimonials Section */}
    <section className="relative z-10 py-10 sm:py-20 px-3 sm:px-6 md:px-20">
      <Slide direction="up" triggerOnce>
        <h2 className="text-xl sm:text-4xl font-bold text-center mb-6 sm:mb-12 text-white drop-shadow-lg">
          What They Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -6 }}
              className="bg-white/10 border border-white/10 p-6 sm:p-8 rounded-3xl glass-card shadow-xl"
            >
              <p className="mb-4 sm:mb-6 text-gray-100 italic text-xs sm:text-lg break-words">“{t.quote}”</p>
              <h4 className="font-bold text-blue-400 text-xs sm:text-base">{t.name}</h4>
              <p className="text-xs sm:text-sm text-gray-300">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </Slide>
    </section>

    {/* FAQ Section */}
    <FAQSection />

    {/* Footer Section */}
    <footer className="relative z-10 px-3 sm:px-8 md:px-20 py-6 sm:py-16 mt-6 sm:mt-20 bg-white/10 backdrop-blur-xl rounded-t-3xl border-t border-white/10 text-gray-200 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-10">
        <div className="min-w-0">
          <h4 className="text-white font-semibold text-lg sm:text-2xl">MediSync 360</h4>
          <p className="text-xs sm:text-sm mt-2 break-words">Revolutionizing care with secure, intelligent health tech.</p>
          <div className="flex gap-2 sm:gap-4 text-lg sm:text-2xl mt-4 flex-wrap">
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
        <div className="min-w-0">
          <h4 className="text-white font-semibold mb-2 text-lg sm:text-xl">Support</h4>
          <p className="text-xs sm:text-sm break-words">Email: support@medisync360.com</p>
          <p className="text-xs sm:text-sm break-words">Phone: +91-9876543210</p>
        </div>
      </div>
      <p className="text-center mt-4 sm:mt-10 text-xs sm:text-sm text-gray-400 break-words">
        &copy; 2025 MediSync 360. All rights reserved.
      </p>
    </footer>
  </div>
);

}

export default HomeAdvanced;