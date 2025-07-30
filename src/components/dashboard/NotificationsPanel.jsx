import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

export default function NotificationsPanel() {
  // Replace with real notifications
  const notifications = [
    "Your lab report is ready.",
    "Appointment confirmed for 3rd Aug.",
    "Profile updated successfully.",
  ];
  return (
    <Paper
      elevation={3}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 4, maxWidth: 600, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>Notifications</Typography>
      <List>
        {notifications.map((note, i) => (
          <ListItem key={i}>
            <ListItemText primary={note} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}