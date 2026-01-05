// FloatingSocials.jsx
// import { Box, IconButton, Stack, Tooltip } from "@mui/material";
// import { motion } from "framer-motion";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";

// export default function FloatingSocials() {
//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         top: "30%",
//         right: 0,
//         zIndex: 1000,
//         bgcolor: "transparent",
//         pr: 1,
//       }}
//     >
//       <Stack spacing={2}>
//         <motion.div whileHover={{ scale: 1.2 }}>
//           <Tooltip title="GitHub" placement="left">
//             <IconButton
//               href="https://github.com/YOUR_GITHUB"
//               target="_blank"
//               sx={{
//                 color: "#fff",
//                 bgcolor: "rgba(0,0,0,0.5)",
//                 "&:hover": { bgcolor: "rgba(156, 39, 176,0.8)" },
//               }}
//             >
//               <GitHubIcon />
//             </IconButton>
//           </Tooltip>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.2 }}>
//           <Tooltip title="LinkedIn" placement="left">
//             <IconButton
//               href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
//               target="_blank"
//               sx={{
//                 color: "#0A66C2",
//                 bgcolor: "rgba(0,0,0,0.5)",
//                 "&:hover": { bgcolor: "rgba(10, 102, 194,0.8)" },
//               }}
//             >
//               <LinkedInIcon />
//             </IconButton>
//           </Tooltip>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.2 }}>
//           <Tooltip title="Email" placement="left">
//             <IconButton
//               href="mailto:your@email.com"
//               sx={{
//                 color: "#ff7b7b",
//                 bgcolor: "rgba(0,0,0,0.5)",
//                 "&:hover": { bgcolor: "rgba(255, 123, 123,0.8)" },
//               }}
//             >
//               <EmailIcon />
//             </IconButton>
//           </Tooltip>
//         </motion.div>
//       </Stack>
//     </Box>
//   );
// }





// FloatingSocials.jsx
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function FloatingSocials() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "35%",
        right: 10, // make sure it's not cut off
        zIndex: 1000,
      }}
    >
      <Stack spacing={2}>
        {/* GitHub */}
        <motion.div whileHover={{ scale: 1.2 }}>
          <Tooltip title="GitHub" placement="left">
            <IconButton
              href="https://github.com/saumya-2005"
              target="_blank"
              sx={{
                color: "#fff",
                bgcolor: "#6a1b9a", // nice purple
                "&:hover": { bgcolor: "#7b1fa2" },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </motion.div>

        {/* LinkedIn */}
        <motion.div whileHover={{ scale: 1.2 }}>
          <Tooltip title="LinkedIn" placement="left">
            <IconButton
              href="https://www.linkedin.com/in/saumya-kushwaha-691457301"
              target="_blank"
              sx={{
                color: "#fff",
                // bgcolor: "#ab47bc",
                bgcolor: "#283593", // deep blue
                "&:hover": { bgcolor: "#3949ab" },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </motion.div>

        {/* Email */}
        {/* <motion.div whileHover={{ scale: 1.2 }}>
          <Tooltip title="Email" placement="left">
            <IconButton
              href="saumyakushwaha1601@email.com"
              sx={{
                color: "#fff",
                bgcolor: "#ab47bc", // soft purple
                "&:hover": { bgcolor: "#ba68c8" },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>
        </motion.div> */}
      </Stack>
    </Box>
  );
}
