import React from "react";
import { Paper, Typography, Button, Stack, Switch, FormControlLabel } from "@mui/material";
import { motion } from "framer-motion";

export default function ConsentManagement() {
  return (
    <Paper
      elevation={3}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 4, maxWidth: 500, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>Consent Management</Typography>
      <Stack spacing={2}>
        <FormControlLabel control={<Switch defaultChecked />} label="Allow EHR access to doctors" />
        <FormControlLabel control={<Switch />} label="Allow data for research" />
        <Button variant="contained" color="primary">Save Consent</Button>
      </Stack>
    </Paper>
  );
}