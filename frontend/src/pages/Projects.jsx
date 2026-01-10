

// import { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   Chip,
//   Button,
//   IconButton,
//   Modal,
//   Divider,
// } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LaunchIcon from "@mui/icons-material/Launch";
// import CloseIcon from "@mui/icons-material/Close";
// import { motion } from "framer-motion";

// // ================= PROJECT DATA =================
// const projects = [
//   {
//     title: "Brain Tumor Detection",
//     desc: "AI-based MRI tumor detection using EfficientNet, Django backend and React frontend.",
//     tech: ["Python",  "EfficientNet Model", "Django", "React", "Material UI", "Kaggle"],
//     github: "https://github.com/mahera8hub/Radiology",
//     demo: null,
//     screenshots: ["/src/images/mri.png", "/src/images/mri2.png", "/src/images/mri3.png","/src/images/mri4.png", "/src/images/mri5.jpeg"],
//   },
//   {
//     title: "Placement Tracker Portal",
//     desc: "Official portal of Rama University (PlaComm). I built full placement coordinator section with React + MUI.",
//     tech: ["React", "Vite", "Material UI", "Django", "SQLite",  ],
//     github: "https://github.com/ayushanand960/PlaComm",
//     demo: null,
//     screenshots: ["/src/images/pla1.jpg", "/src/images/pla2.jpg","/src/images/pla3.jpg","/src/images/pla4.jpg","/src/images/pla5.jpg"],
//   },

//   {
//     title: "Weather App",
//     desc: "A live weather forecasting app using OpenWeather RAPID API, Tailwind CSS & JS.",
//     tech: ["HTML", "Tailwind CSS", "JavaScript", "RAPID API"],
//     github: "https://github.com/saumya-2005/weather-app",
//     demo: null,
//     screenshots: ["/src/images/w1.jpeg", "/src/images/w2.jpeg", "/src/images/w3.jpeg"],
//   },

//   {
//     title: "Data Science Club Website",
//     desc: "Students can register for events, admin can create events and view participants.",
//     tech: ["React", "Material UI", "Convex", "SQLite"],
//     github: "https://github.com/YOUR_USERNAME/data-science-club",
//     demo: null,
//     screenshots: ["/src/images/ds.png", "/src/images/ds2.png"],
//   },

//      {
//     title: "My Personal Portfolio",
//     desc: "Built a modern, responsive personal portfolio using React and Material-UI to showcase projects and skills.",
//     tech: ["React", "Material UI", "Framer Motion", "Django"],
//     github: "https://github.com/saumya-2005/my-personal-portfolio",
//     demo: null,
//     screenshots: ["/src/images/p1.jpeg", "/src/images/p2.jpeg", "/src/images/p3.jpeg"],
//   },

//    {
//     title: "X.Com Clone",
//     desc: "A responsive front-end clone of X.com (formerly Twitter) built using Tailwind CSS, structured with semantic HTML5.",
//     tech: ["HTML", "Tailwind CSS", "Vercel"],
//     github: "https://github.com/saumya-2005/X.com_clone",
//     demo: null,
//     screenshots: ["/src/images/X.jpeg"],
//   },
// ];

// // ================= MODAL =================
// const ProjectModal = ({ open, handleClose, project }) => {
//   if (!project) return null;

//   return (
//     <Modal open={open} onClose={handleClose}>
//       <motion.div
//         initial={{ scale: 0.6, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.25 }}
//         style={{
//           maxWidth: "750px",
//           margin: "100px auto",
//         }}
//       >
//         <Box
//           sx={{
//             p: 4,
//             bgcolor: "#111",
//             borderRadius: 3,
//             border: "1px solid rgba(255,255,255,0.2)",
//             color: "white",
//             position: "relative",
//             maxHeight: "80vh",
//             overflowY: "auto",
//           }}
//         >
//           {/* CLOSE BUTTON */}
//           <IconButton
//             onClick={handleClose}
//             sx={{ position: "absolute", right: 15, top: 15, color: "white" }}
//           >
//             <CloseIcon />
//           </IconButton>

//           <Typography variant="h4" fontWeight={700} mb={1}>
//             {project.title}
//           </Typography>

//           <Typography sx={{ opacity: 0.8, mb: 2 }}>{project.desc}</Typography>

//           <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.2)" }} />

//           <Typography fontWeight={600} mb={1}>
//             🛠 Tech Used:
//           </Typography>
//           <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
//             {project.tech.map((t) => (
//               <Chip
//                 key={t}
//                 label={t}
//                 size="small"
//                 sx={{ bgcolor: "#222", color: "#00d9ff" }}
//               />
//             ))}
//           </Box>

//           <Typography fontWeight={600} mb={1}>
//              Screenshots:
//           </Typography>

//           {/* SCROLLABLE IMAGES */}
//           <Box display="flex" flexDirection="column" gap={2}>
//             {project.screenshots.map((img, i) => (
//               <Box
//                 key={i}
//                 component="img"
//                 src={img}
//                 sx={{
//                   width: "100%",
//                   borderRadius: 2,
//                   border: "1px solid rgba(255,255,255,0.1)",
//                 }}
//               />
//             ))}
//           </Box>

//           {/* BUTTONS */}
//           <Box display="flex" gap={2} mt={3}>
//             <Button
//               startIcon={<GitHubIcon />}
//               variant="outlined"
//               href={project.github}
//               target="_blank"
//               sx={{ borderColor: "#00eaff", color: "#00eaff" }}
//             >
//               GitHub
//             </Button>

//             <Button
//               startIcon={<LaunchIcon />}
//               variant="contained"
//               disabled={!project.demo}
//               href={project.demo}
//               target="_blank"
//               sx={{
//                 bgcolor: project.demo ? "#00bfff" : "#444",
//               }}
//             >
//               {project.demo ? "Live Demo" : "Coming Soon"}
//             </Button>
//           </Box>
//         </Box>
//       </motion.div>
//     </Modal>
//   );
// };

// // ================= CARD =================
// const ProjectCard = ({ p, index, openModal }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay: index * 0.15 }}
//     viewport={{ once: true }}
//   >
//     <Card
//       sx={{
//         p: 3,
//         borderRadius: 3,
//         bgcolor: "rgba(255,255,255,0.05)",
//         backdropFilter: "blur(10px)",
//         border: "1px solid rgba(255,255,255,0.15)",
//         transition: "0.3s",
//         "&:hover": {
//           transform: "translateY(-6px)",
//           borderColor: "#00eaff",
//           boxShadow: "0 8px 30px rgba(0,255,255,0.25)",
//         },
//       }}
//     >
//       <Typography variant="h5" fontWeight={700} sx={{ color: "white" }} mb={1}>
//         {p.title}
//       </Typography>

//       <Typography sx={{ opacity: 0.7, mb: 2, color: "white" }}>{p.desc}</Typography>

//       <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
//         {p.tech.map((t) => (
//           <Chip
//             key={t}
//             size="small"
//             label={t}
//             sx={{
//               color: "#00eaff",
//               bgcolor: "rgba(0,217,255,0.15)",
//             }}
//           />
//         ))}
//       </Box>

//       <Button
//         variant="outlined"
//         sx={{ borderColor: "#00eaff", color: "#00eaff" }}
//         onClick={() => openModal(p)}
//       >
//         View Details
//       </Button>
//     </Card>
//   </motion.div>
// );

// // ================= PAGE =================
// export default function Projects() {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(null);

//   const openModal = (proj) => {
//     setSelected(proj);
//     setOpen(true);
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", py: 10 }}>
//       <Container maxWidth="lg">
//         <Typography
//           variant="h2"
//           fontWeight={700}
//           textAlign="center"
//           sx={{ mb: 2, color: "white" }}
//         >
//           My Projects
//         </Typography>

//         <Typography textAlign="center" sx={{ mb: 6, opacity: 0.7 }}>
//           A showcase of my work in AI, MERN, Django & full-stack development
//         </Typography>

//         <Box
//           display="grid"
//           gap={5}
//           gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
//           sx={{ mt: 4 }}
//         >
//           {projects.map((p, i) => (
//             <ProjectCard key={i} p={p} index={i} openModal={openModal} />
//           ))}
//         </Box>

//         <ProjectModal
//           open={open}
//           project={selected}
//           handleClose={() => setOpen(false)}
//         />
//       </Container>
//     </Box>
//   );
// }




import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Chip,
  Button,
  IconButton,
  Modal,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Brain Tumor Detection",
    desc: "AI-based MRI tumor detection using EfficientNet, Django backend and React frontend.",
    tech: ["Python",  "EfficientNet Model", "Django", "React", "Material UI", "Kaggle"],
    github: "https://github.com/mahera8hub/Radiology",
    demo: null,
    screenshots: ["/mri.png", "/mri2.png", "/mri3.png","/mri4.png", "/mri5.jpeg"],
  },
  {
    title: "Placement Tracker Portal",
    desc: "Official portal of Rama University (PlaComm). I built full placement coordinator section with React + MUI.",
    tech: ["React", "Vite", "Material UI", "Django", "SQLite"],
    github: "https://github.com/ayushanand960/PlaComm",
    demo: null,
    screenshots: ["/pla1.jpg", "/pla2.jpg","/pla3.jpg","/pla4.jpg","/pla5.jpg"],
  },
  {
    title: "Weather App",
    desc: "A live weather forecasting app using OpenWeather RAPID API, Tailwind CSS & JS.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "RAPID API"],
    github: "https://github.com/saumya-2005/weather-app",
    demo: null,
    screenshots: ["/w1.jpeg", "/w2.jpeg", "/w3.jpeg"],
  },
  {
    title: "Data Science Club Website",
    desc: "Students can register for events, admin can create events and view participants.",
    tech: ["React", "Material UI", "Convex", "SQLite"],
    github: "https://github.com/YOUR_USERNAME/data-science-club",
    demo: null,
    screenshots: ["/ds.png", "/ds2.png"],
  },
  {
    title: "My Personal Portfolio",
    desc: "Built a modern, responsive personal portfolio using React and Material-UI to showcase projects and skills.",
    tech: ["React", "Material UI", "Framer Motion", "Django"],
    github: "https://github.com/saumya-2005/my-personal-portfolio",
    demo: null,
    screenshots: ["/p1.jpeg", "/p2.jpeg", "/p3.jpeg"],
  },
  {
    title: "X.Com Clone",
    desc: "A responsive front-end clone of X.com (formerly Twitter) built using Tailwind CSS, structured with semantic HTML5.",
    tech: ["HTML", "Tailwind CSS", "Vercel"],
    github: "https://github.com/saumya-2005/X.com_clone",
    demo: null,
    screenshots: ["/X.jpeg"],
  },
];

const ProjectModal = ({ open, handleClose, project }) => {
  if (!project) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          maxWidth: "95%",
          margin: "50px auto",
        }}
      >
        <Box
          sx={{
            p: { xs: 2, sm: 4 },
            bgcolor: "#111",
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,0.2)",
            color: "white",
            position: "relative",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 15, top: 15, color: "white" }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" fontWeight={700} mb={1} sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem" } }}>
            {project.title}
          </Typography>

          <Typography sx={{ opacity: 0.8, mb: 2, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" } }}>{project.desc}</Typography>

          <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.2)" }} />

          <Typography fontWeight={600} mb={1}>
            🛠 Tech Used:
          </Typography>
          <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
            {project.tech.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{ bgcolor: "#222", color: "#00d9ff", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
              />
            ))}
          </Box>

          <Typography fontWeight={600} mb={1}>
            Screenshots:
          </Typography>

          <Box display="flex" flexDirection="column" gap={2}>
            {project.screenshots.map((img, i) => (
              <Box
                key={i}
                component="img"
                src={img}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </Box>

          <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2} mt={3}>
            <Button
              startIcon={<GitHubIcon />}
              variant="outlined"
              href={project.github}
              target="_blank"
              sx={{ borderColor: "#00eaff", color: "#00eaff" }}
            >
              GitHub
            </Button>

            <Button
              startIcon={<LaunchIcon />}
              variant="contained"
              disabled={!project.demo}
              href={project.demo}
              target="_blank"
              sx={{
                bgcolor: project.demo ? "#00bfff" : "#444",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              {project.demo ? "Live Demo" : "Coming Soon"}
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Modal>
  );
};

const ProjectCard = ({ p, index, openModal }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    viewport={{ once: true }}
  >
    <Card
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        bgcolor: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.15)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "#00eaff",
          boxShadow: "0 8px 30px rgba(0,255,255,0.25)",
        },
      }}
    >
      <Typography variant="h6" fontWeight={700} sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.1rem" } }} mb={1}>
        {p.title}
      </Typography>

      <Typography sx={{ opacity: 0.7, mb: 2, color: "white", fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" } }}>
        {p.desc}
      </Typography>

      <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
        {p.tech.map((t) => (
          <Chip
            key={t}
            size="small"
            label={t}
            sx={{
              color: "#00eaff",
              bgcolor: "rgba(0,217,255,0.15)",
              fontSize: { xs: "0.65rem", sm: "0.75rem" },
            }}
          />
        ))}
      </Box>

      <Button
        variant="outlined"
        sx={{ borderColor: "#00eaff", color: "#00eaff", width: { xs: "100%", sm: "auto" } }}
        onClick={() => openModal(p)}
      >
        View Details
      </Button>
    </Card>
  </motion.div>
);

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (proj) => {
    setSelected(proj);
    setOpen(true);
  };

  return (
    <Box sx={{ minHeight: "100vh", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          fontWeight={700}
          textAlign="center"
          sx={{ mb: 2, color: "white", fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" } }}
        >
          My Projects
        </Typography>

        <Typography textAlign="center" sx={{ mb: 6, opacity: 0.7, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" } }}>
          A showcase of my work in AI, MERN, Django & full-stack development
        </Typography>

        <Box
          display="grid"
          gap={{ xs: 3, md: 5 }}
          gridTemplateColumns={{ xs: "1fr", sm: "1fr", md: "1fr 1fr" }}
          sx={{ mt: 4 }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} index={i} openModal={openModal} />
          ))}
        </Box>

        <ProjectModal
          open={open}
          project={selected}
          handleClose={() => setOpen(false)}
        />
      </Container>
    </Box>
  );
}

