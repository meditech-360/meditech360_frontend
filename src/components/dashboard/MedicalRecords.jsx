import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

export default function MedicalRecords() {
  // Replace with real EHR data
  const records = [
    { type: "Prescription", date: "2025-07-01" },
    { type: "Lab Report", date: "2025-06-20" },
    { type: "X-ray", date: "2025-05-15" },
  ];
  return (
    <Paper
      elevation={3}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 4, maxWidth: 600, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>Medical Records</Typography>
      <List>
        {records.map((rec, i) => (
          <ListItem key={i}>
            <ListItemText primary={rec.type} secondary={rec.date} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}