import React, { useState } from "react";
import { Paper, Typography, TextField, Button, Stack, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me about lifestyle or diet." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: "bot", text: "This is a sample reply about: " + input }]);
    }, 700);
    setInput("");
  };

  return (
    <Paper
      elevation={3}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 4, maxWidth: 500, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>Chatbot</Typography>
      <List sx={{ minHeight: 120, maxHeight: 200, overflowY: "auto", mb: 2 }}>
        {messages.map((msg, i) => (
          <ListItem key={i}>
            <ListItemText
              primary={msg.text}
              sx={{ textAlign: msg.from === "user" ? "right" : "left" }}
            />
          </ListItem>
        ))}
      </List>
      <Stack direction="row" spacing={1}>
        <TextField
          value={input}
          onChange={e => setInput(e.target.value)}
          fullWidth
          size="small"
          placeholder="Ask about diet, lifestyle..."
        />
        <Button variant="contained" onClick={sendMessage}>Send</Button>
      </Stack>
    </Paper>
  );
}