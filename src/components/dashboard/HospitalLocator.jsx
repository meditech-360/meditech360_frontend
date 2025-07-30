import React from "react";
import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function HospitalLocator() {
  return (
    <Paper
      elevation={3}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 4, maxWidth: 700, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>Hospital Locator</Typography>
      <Typography>
        {/* Replace with real map and capacity info */}
        [Map Placeholder] Real-time hospital capacity and locations will appear here.
      </Typography>
    </Paper>
  );
}