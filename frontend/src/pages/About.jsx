// import { Box, Container, Typography, Chip, Card, CardContent } from "@mui/material";
// import { motion } from "framer-motion";
// import CodeIcon from "@mui/icons-material/Code";
// import SchoolIcon from "@mui/icons-material/School";

// const skills = [
//   "HTML",
//   "CSS",
//   "React",
//   "Node.js",
//   "Material UI",
//   "Tailwind CSS",
//   "Bootstrap",
//   "Google Collab",
//   "Django",
//   "MySQL",
//   "TensorFlow",
//   "GitHub",
//   "JavaScript",
//   "Java",
//   "Python",
// ];

// const projects = [
//   {
//     title: "Radiology MRI Tumor Detection",
//     description:
//       "Advanced medical imaging analysis system using deep learning for accurate tumor detection.",
//     tech: "React • Django • EfficientNet • Google Collab",
//     icon: <SchoolIcon sx={{ fontSize: 40, color: "#1976D2" }} />,
//   },
//   {
//     title: "Placement Portal",
//     description:
//       "Comprehensive platform with AI-powered resume builder to streamline the placement process.",
//     tech: "React • Django • AI Resume Builder",
//     icon: <CodeIcon sx={{ fontSize: 40, color: "#1976D2" }} />,
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const About = () => {
//   return (
//     <Box sx={{ py: 8, minHeight: "calc(100vh - 180px)" }}>
//       <Container maxWidth="lg">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: "2.5rem", md: "3.5rem" },
//               fontWeight: 700,
//               mb: 3,
//               textAlign: "center",
//             }}
//           >
//             About Me
//           </Typography>
//         </motion.div>

//         {/* Intro */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: "1.2rem",
//               color: "rgba(255,255,255,0.7)",
//               textAlign: "center",
//               maxWidth: "800px",
//               mx: "auto",
//               mb: 6,
//               lineHeight: 1.8,
//             }}
//           >
//             I'm a passionate full stack developer with a love for creating
//             beautiful, functional, and user-friendly web applications. With
//             expertise in modern frameworks and a keen eye for design, I bring
//             ideas to life through code.
//           </Typography>
//         </motion.div>

//         {/* Skills */}
//         <Box sx={{ mb: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 fontSize: { xs: "1.8rem", md: "2.2rem" },
//                 fontWeight: 600,
//                 mb: 3,
//                 textAlign: "center",
//               }}
//             >
//               Skills
//             </Typography>
//           </motion.div>

//           <motion.div variants={containerVariants} initial="hidden" animate="visible">
//             <Box
//               sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 2,
//                 justifyContent: "center",
//               }}
//             >
//               {skills.map((skill) => (
//                 <motion.div key={skill} variants={itemVariants}>
//                   <Chip
//                     label={skill}
//                     sx={{
//                       px: 2,
//                       py: 3,
//                       fontSize: "1rem",
//                       fontWeight: 500,
//                       background: "rgba(25,118,210,0.1)",
//                       border: "1px solid rgba(25,118,210,0.3)",
//                       color: "#42a5f5",
//                       transition: "0.3s",
//                       "&:hover": {
//                         background: "rgba(25,118,210,0.2)",
//                         transform: "translateY(-4px)",
//                       },
//                     }}
//                   />
//                 </motion.div>
//               ))}
//             </Box>
//           </motion.div>
//         </Box>

//         {/* Projects */}
//         <Box>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 fontSize: { xs: "1.8rem", md: "2.2rem" },
//                 fontWeight: 600,
//                 mb: 4,
//                 textAlign: "center",
//               }}
//             >
//               Featured Projects
//             </Typography>
//           </motion.div>

//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" },
//               gap: 4,
//             }}
//           >
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card
//                   sx={{
//                     color:"white",
//                     height: "100%",
//                     background: "rgba(255,255,255,0.05)",
//                     backdropFilter: "blur(10px)",
//                     border: "1px solid rgba(255,255,255,0.1)",
//                     borderRadius: 3,
//                     transition: "0.3s",
//                     "&:hover": {
//                       border: "1px solid rgba(25,118,210,0.5)",
//                       boxShadow: "0 8px 32px rgba(25,118,210,0.2)",
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 4 }}>
//                     <Box sx={{ mb: 2 }}>{project.icon}</Box>

//                     <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
//                       {project.title}
//                     </Typography>

//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: "white",
//                         mb: 2,
//                         lineHeight: 1.7,
//                       }}
//                     >
//                       {project.description}
//                     </Typography>

//                     <Typography
//                       variant="body2"
//                       sx={{ color: "#1976D2", fontWeight: 500 }}
//                     >
//                       {project.tech}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default About;



import { Box, Container, Typography, Chip, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";

const skills = [
  "HTML","CSS","React","Node.js","Material UI","Tailwind CSS","Bootstrap",
  "Google Collab","Django","MySQL","TensorFlow","GitHub","JavaScript","Java","Python",
];

const projects = [
  {
    title: "Radiology MRI Tumor Detection",
    description:
      "Advanced medical imaging analysis system using deep learning for accurate tumor detection.",
    tech: "React • Django • EfficientNet • Google Collab",
    icon: <SchoolIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: "#1976D2" }} />,
  },
  {
    title: "Placement Portal",
    description:
      "Comprehensive platform with AI-powered resume builder to streamline the placement process.",
    tech: "React • Django • AI Resume Builder",
    icon: <CodeIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: "#1976D2" }} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, minHeight: "calc(100vh - 180px)" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 3,
              textAlign: "center",
            }}
          >
            About Me
          </Typography>
        </motion.div>

        {/* Intro */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", md: "1.2rem" },
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              maxWidth: { xs: "100%", md: "800px" },
              mx: "auto",
              mb: { xs: 4, md: 6 },
              lineHeight: 1.8,
            }}
          >
            I'm a passionate full stack developer with a love for creating
            beautiful, functional, and user-friendly web applications. With
            expertise in modern frameworks and a keen eye for design, I bring
            ideas to life through code.
          </Typography>
        </motion.div>

        {/* Skills */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.6rem", md: "2.2rem" },
                fontWeight: 600,
                mb: 3,
                textAlign: "center",
              }}
            >
              Skills
            </Typography>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 1.5, sm: 2 },
                justifyContent: "center",
              }}
            >
              {skills.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Chip
                    label={skill}
                    sx={{
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 1.2, sm: 1.5 },
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                      fontWeight: 500,
                      background: "rgba(25,118,210,0.1)",
                      border: "1px solid rgba(25,118,210,0.3)",
                      color: "#42a5f5",
                      transition: "0.3s",
                      "&:hover": {
                        background: "rgba(25,118,210,0.2)",
                        transform: "translateY(-4px)",
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Projects */}
        <Box>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.6rem", md: "2.2rem" },
                fontWeight: 600,
                mb: { xs: 3, md: 4 },
                textAlign: "center",
              }}
            >
              Featured Projects
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(2,1fr)" },
              gap: { xs: 3, md: 4 },
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    color: "white",
                    height: "100%",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      border: "1px solid rgba(25,118,210,0.5)",
                      boxShadow: "0 8px 32px rgba(25,118,210,0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                    <Box sx={{ mb: 2 }}>{project.icon}</Box>

                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.4rem" } }}>
                      {project.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: "white", mb: 2, lineHeight: 1.7, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" } }}>
                      {project.description}
                    </Typography>

                    <Typography variant="body2" sx={{ color: "#1976D2", fontWeight: 500, fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}>
                      {project.tech}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
