import React, { useState } from "react";
import { Paper, Typography, TextField, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function SymptomChecker() {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    setResult("This is a sample ML/NLP-based result for: " + symptom);
  };

  return (
    <Paper
      elevation={3}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 4, maxWidth: 500, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>Symptom Checker</Typography>
      <Stack spacing={2}>
        <TextField
          label="Describe your symptoms"
          value={symptom}
          onChange={e => setSymptom(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleCheck}>Check</Button>
        {result && <Typography color="primary">{result}</Typography>}
      </Stack>
    </Paper>
  );
}