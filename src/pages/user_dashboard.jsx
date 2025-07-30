import React, { Suspense, useState } from "react";
import { Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, Typography, IconButton } from "@mui/material";
import { AccountCircle, Lock, Logout, Notifications, Chat, Healing, CloudUpload, Folder, Assignment, LocationOn, Warning } from "@mui/icons-material";
import { motion } from "framer-motion";
import EditProfile from "../components/dashboard/EditProfile";
import ChangePassword from "../components/dashboard/ChangePassword";
import NotificationsPanel from "../components/dashboard/NotificationsPanel";
import Chatbot from "../components/dashboard/Chatbot";
import SymptomChecker from "../components/dashboard/SymptomChecker";
import UploadRecords from "../components/dashboard/UploadRecords";
import MedicalRecords from "../components/dashboard/MedicalRecords";
import ConsentManagement from "../components/dashboard/ConsentManagement";
import HospitalLocator from "../components/dashboard/HospitalLocator";
import SOSButton from "../components/dashboard/SOSButton";
import apiFetch, { logout } from "../utils/api";


const drawerWidth = 270;

const features = [
  { label: "Edit Profile", icon: <AccountCircle />, component: <EditProfile /> },
  { label: "Change Password", icon: <Lock />, component: <ChangePassword /> },
  { label: "Notifications", icon: <Notifications />, component: <NotificationsPanel /> },
  { label: "Chatbot", icon: <Chat />, component: <Chatbot /> },
  { label: "Symptom Checker", icon: <Healing />, component: <SymptomChecker /> },
  { label: "Upload Records", icon: <CloudUpload />, component: <UploadRecords /> },
  { label: "Medical Records", icon: <Folder />, component: <MedicalRecords /> },
  { label: "Consent Management", icon: <Assignment />, component: <ConsentManagement /> },
  { label: "Hospital Locator", icon: <LocationOn />, component: <HospitalLocator /> },
  { label: "SOS", icon: <Warning />, component: <SOSButton /> },
];

export default function User_dashboard() {
  const [selected, setSelected] = useState(0);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f7fa" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1300, bgcolor: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            User Dashboard
          </Typography>
          <IconButton color="inherit" onClick={logout}>
            <Logout />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", bgcolor: "#212b36", color: "#fff" },
        }}
      >
        <Toolbar />
        <List>
          {features.map((f, i) => (
            <ListItem
              button
              key={f.label}
              selected={selected === i}
              onClick={() => setSelected(i)}
              sx={{
                "&.Mui-selected": { bgcolor: "#1565c0", color: "#fff" },
                transition: "background 0.3s",
              }}
              component={motion.div}
              whileHover={{ scale: 1.03 }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{f.icon}</ListItemIcon>
              <ListItemText primary={f.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component={motion.main}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 4 },
          mt: 8,
          minHeight: "100vh",
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <Suspense fallback={<Typography>Loading...</Typography>}>
          {features[selected].component}
        </Suspense>
      </Box>
    </Box>
  );
}