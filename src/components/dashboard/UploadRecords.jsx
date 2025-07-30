import React, { useRef, useState } from "react";
import { Paper, Typography, Button, Stack, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";

export default function UploadRecords() {
  const fileRef = useRef();
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    setProgress(30);
    setTimeout(() => setProgress(100), 1000);
  };

  return (
    <Paper
      elevation={3}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 4, maxWidth: 500, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>Upload Prescriptions / Lab Reports / X-rays</Typography>
      <Stack spacing={2}>
        <input type="file" ref={fileRef} style={{ display: "none" }} />
        <Button variant="outlined" onClick={() => fileRef.current.click()}>Choose File</Button>
        <Button variant="contained" onClick={handleUpload}>Upload</Button>
        {progress > 0 && <LinearProgress variant="determinate" value={progress} />}
      </Stack>
    </Paper>
  );
}