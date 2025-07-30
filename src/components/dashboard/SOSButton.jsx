import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function SOSButton() {
  const handleSOS = () => {
    // Redirect to mobile or trigger alert
    window.open("tel:112");
  };

  return (
    <Paper
      elevation={3}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 4, maxWidth: 400, mx: "auto", textAlign: "center" }}
    >
      <Typography variant="h5" gutterBottom>SOS</Typography>
      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={handleSOS}
        sx={{ mt: 2 }}
      >
        🚨 Emergency Call
      </Button>
    </Paper>
  );
}