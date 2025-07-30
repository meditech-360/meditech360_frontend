import React from "react";
import { Paper, Typography, TextField, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function EditProfile() {
  // Add your state and handlers here
  return (
    <Paper
      elevation={3}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 4, maxWidth: 500, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>Edit Profile</Typography>
      <Stack spacing={2}>
        <TextField label="Full Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Phone" fullWidth />
        <Button variant="contained" color="primary">Save Changes</Button>
      </Stack>
    </Paper>
  );
}