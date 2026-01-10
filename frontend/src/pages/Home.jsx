


// import { Box, Container, Typography, Button, Avatar, Stack } from "@mui/material";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import profileImg from "../images/nikki.jpg"; 
// import resumePDF from "../images/Resume.pdf"; 

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
       
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
//         position: "relative",
//         overflow: "hidden",
//         color: "white",
//       }}
//     >
//       {/* Floating gradient blob */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "15%",
//           right: "5%",
//           width: "500px",
//           height: "500px",
//           background:
//             "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
//           filter: "blur(90px)",
//           animation: "float 8s ease-in-out infinite",
//           "@keyframes float": {
//             "0%,100%": { transform: "translateY(0px)" },
//             "50%": { transform: "translateY(-40px)" },
//           },
//         }}
//       />

//       <Container maxWidth="md">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Stack spacing={3} alignItems="center" textAlign="center">

//             {/* 🔥 Profile picture: square with rounded corners */}
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Avatar
//                 src={profileImg}
//                 alt="Saumya Kushwaha"
//                 variant="circle"
//                 sx={{
//                   width: 180,
//                   height: 180,
//                   borderRadius: "100px",
//                   border: "3px solid rgba(255,255,255,0.3)",
//                   boxShadow: "0 8px 30px rgba(59,130,246,0.3)",
//                 }}
//               />
//             </motion.div>

//             {/* Name */}
//             <Typography
//               variant="h2"
//               sx={{
//                 fontWeight: 700,
//                 background: "linear-gradient(90deg, #fff, #60A5FA)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Hi, I'm Saumya 
//             </Typography>

//             {/* Subtitle */}
//             <Typography
//               variant="h5"
//               sx={{
//                 opacity: 0.8,
//                 fontSize: { xs: "1.05rem", md: "1.3rem" },
//               }}
//             >
//               Full Stack Developer | React • Node.js/Django
//             </Typography>

//             {/* Glass card intro */}
//             <Box
//               sx={{
//                 px: 4,
//                 py: 2,
//                 borderRadius: "20px",
//                 backdropFilter: "blur(14px)",
//                 background: "rgba(255,255,255,0.08)",
//                 border: "1px solid rgba(255,255,255,0.15)",
//                 fontSize: "1rem",
//                 maxWidth: 450,
//               }}
//             >
//               I create modern, responsive web apps and explore AI & data-driven solutions, blending web development with my passion for Data Science
//               {/* I create modern, responsive, and meaningful web experiences. */}
//             </Box>

//             {/* Buttons: Projects + Resume */}
//             <Stack
//               direction={{ xs: "column", sm: "row" }}
//               spacing={2}
//               mt={2}
//               justifyContent="center"
//             >
//               {/* View Projects */}
//               <motion.div
//                 whileHover={{ y: -3, scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Button
//                   variant="contained"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={() => navigate("/projects")}
//                   sx={{
//                     px: 4,
//                     py: 1.2,
//                     fontSize: "1rem",
//                     background: "linear-gradient(135deg,#2563EB,#3B82F6)",
//                     boxShadow: "0 6px 20px rgba(59,130,246,0.3)",
//                   }}
//                 >
//                   View Projects
//                 </Button>
//               </motion.div>

//               {/* Download Resume */}
//               <motion.div
//                 whileHover={{ y: -3, scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Button
//                   variant="outlined"
//                   href={resumePDF}
//                   target="_blank"
//                   sx={{
//                     px: 4,
//                     py: 1.2,
//                     fontSize: "1rem",
//                     borderColor: "#60A5FA",
//                     color: "#60A5FA",
//                     "&:hover": {
//                       background: "rgba(96,165,250,0.1)",
//                     },
//                   }}
//                 >
//                   Download Resume
//                 </Button>
//               </motion.div>
//             </Stack>
//           </Stack>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// }








import { Box, Container, Typography, Button, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import profileImg from "/nikki.jpg"; 
// import resumePDF from "/Resume.pdf"; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
        position: "relative",
        overflow: "hidden",
        color: "white",
        px: { xs: 2, sm: 4 }, // responsive horizontal padding
      }}
    >
      {/* Floating gradient blob */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "10%", sm: "15%" },
          right: { xs: "-10%", sm: "5%" },
          width: { xs: "300px", sm: "500px" },
          height: { xs: "300px", sm: "500px" },
          background:
            "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
          filter: "blur(90px)",
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%,100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-40px)" },
          },
        }}
      />

      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack spacing={3} alignItems="center" textAlign="center">

            {/* Profile picture */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Avatar
                src="/nikki.jpg"
                alt="Saumya Kushwaha"
                variant="circle"
                sx={{
                  width: { xs: 120, sm: 150, md: 180 },
                  height: { xs: 120, sm: 150, md: 180 },
                  borderRadius: "100px",
                  border: "3px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 8px 30px rgba(59,130,246,0.3)",
                }}
              />
            </motion.div>

            {/* Name */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                background: "linear-gradient(90deg, #fff, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hi, I'm Saumya
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h5"
              sx={{
                opacity: 0.8,
                fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
              }}
            >
              Full Stack Developer | React • Node.js/Django
            </Typography>

            {/* Glass card intro */}
            <Box
              sx={{
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 2 },
                borderRadius: "20px",
                backdropFilter: "blur(14px)",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: { xs: "0.85rem", sm: "1rem" },
                maxWidth: { xs: "100%", sm: 450 },
              }}
            >
              I create modern, responsive web apps and explore AI & data-driven solutions, blending web development with my passion for Data Science
            </Box>

            {/* Buttons: Projects + Resume */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              mt={2}
              justifyContent="center"
              alignItems="center"
            >
              {/* View Projects */}
              <motion.div
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate("/projects")}
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.2 },
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                    background: "linear-gradient(135deg,#2563EB,#3B82F6)",
                    boxShadow: "0 6px 20px rgba(59,130,246,0.3)",
                  }}
                >
                  View Projects
                </Button>
              </motion.div>

              {/* Download Resume */}
              <motion.div
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outlined"
                  href="/Resume.pdf"
                  target="_blank"
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.2 },
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                    borderColor: "#60A5FA",
                    color: "#60A5FA",
                    "&:hover": {
                      background: "rgba(96,165,250,0.1)",
                    },
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

