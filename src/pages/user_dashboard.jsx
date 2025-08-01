import React, { useState, useEffect } from "react";
import {
  Typography, IconButton, Tooltip, Drawer, List, ListItem, ListItemIcon, ListItemText, Fab, Box, Avatar, CircularProgress
} from "@mui/material";
import {
  Home, AccountCircle, Lock, Logout, Notifications, Chat, Healing, CloudUpload, Folder, Assignment, Warning, Menu
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import EditProfile from "../components/dashboard/EditProfile";
import ChangePassword from "../components/dashboard/ChangePassword";
import NotificationsPanel from "../components/dashboard/NotificationsPanel";
import Chatbot from "../components/dashboard/Chatbot";
import SymptomChecker from "../components/dashboard/SymptomChecker";
import UploadRecords from "../components/dashboard/UploadRecords";
import MedicalRecords from "../components/dashboard/MedicalRecords";
import ConsentManagement from "../components/dashboard/ConsentManagement";
import SOSButton from "../components/dashboard/SOSButton";
import { logout } from "../utils/api";

// Navigation items (add Home at the top)
const navItems = [
  { label: "Home", icon: <Home sx={{ color: "#fff" }} />, component: <Typography className="text-white text-xl">Welcome to your dashboard!</Typography> },
  { label: "Edit Profile", icon: <AccountCircle sx={{ color: "#fff" }} />, component: <EditProfile /> },
  { label: "Change Password", icon: <Lock sx={{ color: "#fff" }} />, component: <ChangePassword /> },
  { label: "Notifications", icon: <Notifications sx={{ color: "#fff" }} />, component: <NotificationsPanel /> },
  { label: "Chatbot", icon: <Chat sx={{ color: "#fff" }} />, component: <Chatbot /> },
  { label: "Symptom Checker", icon: <Healing sx={{ color: "#fff" }} />, component: <SymptomChecker /> },
  { label: "Upload Records", icon: <CloudUpload sx={{ color: "#fff" }} />, component: <UploadRecords /> },
  { label: "Medical Records", icon: <Folder sx={{ color: "#fff" }} />, component: <MedicalRecords /> },
  { label: "Consent Management", icon: <Assignment sx={{ color: "#fff" }} />, component: <ConsentManagement /> },
];

// Dummy user data for profile section
const user = {
  name: "John Doe",
  email: "john.doe@email.com",
  avatar: "",
};

export default function UserDashboard() {
  const [selected, setSelected] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const contentVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.3 } },
  };

  const sidebarVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  const sidebarItemVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="min-h-screen h-screen w-screen bg-gradient-to-tr from-blue-950 via-black to-indigo-900 flex font-poppins overflow-hidden">
      {/* Sidebar (desktop) */}
      <motion.aside
        className="hidden md:flex flex-col w-64 h-full bg-white/10 backdrop-blur-xl border-r border-white/20 shadow-2xl z-20"
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Typography variant="h6" className="text-white font-bold tracking-wide flex items-center gap-2">
            <AccountCircle fontSize="medium" />
            User Dashboard
          </Typography>
          <Tooltip title="Logout">
            <IconButton onClick={logout} className="text-white">
              <Logout sx={{ color: "#fff" }} />
            </IconButton>
          </Tooltip>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          <List>
            {navItems.map((item, i) => (
              <motion.div key={item.label} variants={sidebarItemVariants} whileHover={{ scale: 1.07 }}>
                <ListItem
                  button
                  selected={selected === i}
                  onClick={() => setSelected(i)}
                  className={`rounded-xl mx-2 my-1 transition-all duration-300 ${
                    selected === i
                      ? "bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 scale-105 shadow-lg"
                      : "text-white/80"
                  }`}
                >
                  <ListItemIcon className="text-inherit">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </nav>
        {/* User Profile Section */}
        <motion.div
          className="px-6 py-5 border-t border-white/10 flex items-center gap-3 bg-white/5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6, type: "spring" } }}
        >
          <Avatar src={user.avatar} alt={user.name} sx={{ width: 48, height: 48, bgcolor: "#38bdf8" }}>
            {user.name[0]}
          </Avatar>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-base">{user.name}</span>
            <span className="text-white/70 text-xs">{user.email}</span>
          </div>
        </motion.div>
      </motion.aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-blue-800/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-md shadow-lg flex items-center justify-between px-4 py-3">
        <IconButton onClick={() => setDrawerOpen(true)} className="text-white">
          <Menu sx={{ color: "#fff" }} />
        </IconButton>
        <Typography variant="h6" className="text-white font-bold tracking-wide">Dashboard</Typography>
        <IconButton color="inherit" onClick={logout} className="text-white">
          <Logout sx={{ color: "#fff" }} />
        </IconButton>
      </div>
      {/* Mobile drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="w-64 bg-gradient-to-b from-blue-900 via-indigo-900 to-black min-h-screen flex flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Typography variant="h6" className="text-white font-bold tracking-wide">Dashboard</Typography>
          </div>
          <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar">
            <List>
              {navItems.map((item, i) => (
                <ListItem
                  button
                  key={item.label}
                  selected={selected === i}
                  onClick={() => { setSelected(i); setDrawerOpen(false); }}
                  className={`rounded-xl mx-2 my-1 transition-all duration-300 ${
                    selected === i
                      ? "bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 scale-105 shadow-lg"
                      : "text-white/80"
                  }`}
                >
                  <ListItemIcon className="text-inherit">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </nav>
          {/* User Profile Section in Drawer */}
          <div className="px-6 py-5 border-t border-white/10 flex items-center gap-3 bg-white/5">
            <Avatar src={user.avatar} alt={user.name} sx={{ width: 48, height: 48, bgcolor: "#38bdf8" }}>
              {user.name[0]}
            </Avatar>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-base">{user.name}</span>
              <span className="text-white/70 text-xs">{user.email}</span>
            </div>
          </div>
        </div>
      </Drawer>

      {/* Main content area */}
      <main className="flex-1 h-full flex flex-col items-center justify-center px-0 md:px-0 pt-16 md:pt-0 pb-0 md:pb-0 relative">
        <div className="w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full overflow-y-auto flex items-center justify-center"
            >
              {navItems[selected].component}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Floating SOS Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Tooltip title="SOS">
          <Fab
            color="error"
            size="large"
            className="shadow-2xl animate-pulse transition-all duration-300"
            sx={{
              width: 72,
              height: 72,
              bgcolor: "#e53935",
              color: "#fff",
              fontSize: 36,
              border: "3px solid #fff",
            }}
            onClick={() => setSelected(-1)}
          >
            <Warning fontSize="inherit" />
          </Fab>
        </Tooltip>
      </div>
      {/* SOS content overlay */}
      <AnimatePresence>
        {selected === -1 && (
          <motion.div
            key="sos"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
            onClick={() => setSelected(0)}
          >
            <div onClick={e => e.stopPropagation()} className="w-full max-w-lg">
              <SOSButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}