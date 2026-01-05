// import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
// import { motion } from "framer-motion";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";

// const Footer = () => {
//   return (
//  <Box
//   component="footer"
//       sx={{
//         py: 2,
//         mt: "auto",
//         borderTop: "1px solid rgba(255, 255, 255, 0.1)",
//         background: "rgba(18, 18, 18, 0.95)",
//       }}
//     >
//       <Container maxWidth="lg">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >

//           {/* ---------- COPYRIGHT TEXT ---------- */}
//           <Typography
//             variant="body2"
//             align="center"
//             sx={{
//               color: "rgba(255, 255, 255, 0.7)",
//               fontSize: "0.9rem",
//               mt: 1,
//             }}
//           >
//             © 2025 Saumya | All Rights Reserved
//           </Typography>
//         </motion.div>
//       </Container>
//     // </Box>
//   );
// };

// export default Footer;





import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        py: 2,
        background: "rgba(18, 18, 18, 0.95)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        zIndex: 1200,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >

          {/* Copyright */}
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.85rem" }}
          >
            © 2025 Saumya Kushwaha | All Rights Reserved
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
