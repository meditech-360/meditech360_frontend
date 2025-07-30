import React from "react";
import { Paper, Typography, TextField, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function ChangePassword() {
  return (
    <Paper
      elevation={3}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 4, maxWidth: 500, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>Change Password</Typography>
      <Stack spacing={2}>
        <TextField label="Current Password" type="password" fullWidth />
        <TextField label="New Password" type="password" fullWidth />
        <TextField label="Confirm New Password" type="password" fullWidth />
        <Button variant="contained" color="primary">Update Password</Button>
      </Stack>
    </Paper>
  );
}