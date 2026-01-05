// import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { styled } from '@mui/material/styles';

// const StyledNavLink = styled(NavLink)(() => ({
//   textDecoration: 'none',
//   color: 'inherit',
// }));

// const navItems = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Projects', path: '/projects' },
//   { name: 'Contact', path: '/contact' },
//   { name: 'Resume', path: '/resume' },
// ];

// const Navbar = () => {
//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         background: 'rgba(18, 18, 18, 0.95)',
//         backdropFilter: 'blur(10px)',
//         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
//       }}
//     >
//       <Container maxWidth="lg">
//         <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          
//           {/* Brand Name */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Box sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#1976D2' }}>
//               Saumya
//             </Box>
//           </motion.div>

//           {/* Navigation Buttons */}
//           <Box sx={{ display: 'flex', gap: 1 }}>
//             {navItems.map((item, index) => (
//               <motion.div
//                 key={item.path}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <StyledNavLink to={item.path}>
//                   {({ isActive }) => (
//                     <Button
//                       sx={{
//                         color: isActive ? '#1976D2' : 'white',
//                         fontWeight: isActive ? 600 : 400,
//                         position: 'relative',
//                         '&::after': {
//                           content: '""',
//                           position: 'absolute',
//                           bottom: 0,
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: isActive ? '80%' : '0%',
//                           height: '2px',
//                           backgroundColor: '#1976D2',
//                           transition: 'width 0.3s ease',
//                         },
//                         '&:hover::after': {
//                           width: '80%',
//                         },
//                       }}
//                     >
//                       {item.name}
//                     </Button>
//                   )}
//                 </StyledNavLink>
//               </motion.div>
//             ))}
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;






import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledNavLink = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: 'inherit',
}));

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(18, 18, 18, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        height: 60,
        justifyContent: 'center',
        zIndex: 1300,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, md: 0 }, minHeight: '60px !important' }}>
          
          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#1976D2' }}>
              SamHub
            </Box>
          </motion.div>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1.5 } }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <StyledNavLink to={item.path}>
                  {({ isActive }) => (
                    <Button
                      sx={{
                        color: isActive ? '#60A5FA' : 'white',
                        fontWeight: isActive ? 600 : 400,
                        fontSize: '0.95rem',
                        position: 'relative',
                        minWidth: 70,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -2,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: isActive ? '70%' : '0%',
                          height: '2px',
                          backgroundColor: '#60A5FA',
                          borderRadius: 2,
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '70%',
                        },
                        px: 1,
                      }}
                    >
                      {item.name}
                    </Button>
                  )}
                </StyledNavLink>
              </motion.div>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
