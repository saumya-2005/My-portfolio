

import { useState } from "react";
import { Box, Container, Typography, TextField, Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact/submit/`, form);
      setStatus(res.data.message);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message. Try again!");
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        minHeight: "calc(100vh - 180px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
            }}
          >
            Get In Touch
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              mb: 6,
            }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Card
            sx={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
              <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, sm: 3 } }}
                onSubmit={handleSubmit}
              >
                <TextField
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  label="Name"
                  variant="outlined"
                  sx={fieldStyle}
                  required
                />
                <TextField
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  sx={fieldStyle}
                  required
                />
                <TextField
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  fullWidth
                  label="Phone (Optional)"
                  variant="outlined"
                  sx={fieldStyle}
                />
                <TextField
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={{ xs: 4, sm: 5 }}
                  sx={fieldStyle}
                  required
                />

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={buttonStyle}
                  type="submit"
                >
                  Send Message
                </Button>
                {status && <Typography sx={{ color: "white", mt: 1, fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}>{status}</Typography>}
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

// -------- Shared Styles for TextField + Button --------
const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
    "&:hover fieldset": { borderColor: "rgba(25,118,210,0.5)" },
    "&.Mui-focused fieldset": { borderColor: "#1976D2" },
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#1976D2" },
};

const buttonStyle = {
  py: 1.5,
  fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
  fontWeight: 600,
  background: "linear-gradient(135deg,#1976D2 0%,#42a5f5 100%)",
  boxShadow: "0 8px 24px rgba(25,118,210,0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 12px 32px rgba(25,118,210,0.4)",
    background: "linear-gradient(135deg,#1565C0 0%,#1976D2 100%)",
  },
};

export default Contact;
