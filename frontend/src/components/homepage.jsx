import React from 'react';
import Box from '@mui/material/Box';
import { Grow } from '@mui/material';
import DrawerAppBar from "./Appbar";
import { Typography } from '@mui/material';
import ResumeButton from './handleResume';
import SkillsSection from './Skills';
import Projects from './Projects';
import Contact from './Contacts';

// export default function Homepage() {
//     return (
//         <div>
//             <DrawerAppBar />
//             <Box
//                 id="home"
//                 sx={{
//                     width: '100%',
//                     height: '100vh',
//                     pt: 8,
//                     display: 'flex', // Row layout
//                     flexDirection: 'row',
//                     justifyContent: 'space-between', // Space the sections
//                 }}
//             >
//                 {/* Left Section */}
//                 <Box
//                     sx={{
//                         width: '50%', // Occupy left half
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         p: 4,
//                     }}
//                 >
//                     <Grow in={true}>
//                         <Typography
//                             variant="h4"
//                             sx={{
//                                 color: 'black',
//                                 fontFamily: 'Roboto Mono, monospace',
//                                 fontSize: '3rem',
//                                 fontWeight: 'bold',
//                                 textAlign: 'center',
//                             }}
//                         >
//                             Hi, I'm Sathya!
//                         </Typography>
//                     </Grow>
//                     <Grow
//                         in={true}
//                         style={{ transformOrigin: '0 0 0' }}
//                         {...{ timeout: 1500 }}
//                     >
//                         <Typography
//                             variant="h4"
//                             sx={{
//                                 color: 'black',
//                                 fontFamily: 'Roboto Mono, monospace',
//                                 fontSize: '2.5rem', // Slightly smaller size
//                                 fontWeight: 'bold',
//                                 mt: 2,
//                                 textAlign: 'center',
//                             }}
//                         >
//                             Software Developer
//                         </Typography>
//                     </Grow>
//                 </Box>

//                 {/* Right Section */}
//                 <Box
//                     sx={{
//                         width: '50%', // Occupy right half
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                         alignItems: 'flex-start',
//                         p: 4,
//                         backgroundColor: '#f9f9f9', // Optional: Add background for contrast
//                         borderLeft: '1px solid #ddd', // Optional: Add a separator
//                     }}
//                 >
//                     <Typography
//                         variant="h5"
//                         sx={{
//                             color: 'black',
//                             fontFamily: 'Roboto Mono, monospace',
//                             fontSize: '1.5rem',
//                             fontWeight: 'bold',
//                             mb: 2,
//                         }}
//                     >
//                         About Me
//                     </Typography>

//                     <Grow
//                         in={true}
//                         style={{ transformOrigin: '0 0 0' }}
//                         {...{ timeout: 2500 }}
//                     >
//                         <Typography
//                             variant="body1"
//                             sx={{
//                                 color: 'black',
//                                 fontFamily: 'Roboto Mono, monospace',
//                                 fontSize: '1rem',
//                                 lineHeight: 1.6,
//                             }}
//                         >
//                             Name: Sathyanarayanan Rengasamy Suresh <br />
//                             Education: MS Computer Engineering, Virginia Tech <br />
//                             Focus: Software Engineering <br />
//                             Email: sathya@vt.edu
//                         </Typography>
//                     </Grow>
//                     <Box sx={{ mt: 2 }}>
//                         <ResumeButton />
//                     </Box>
//                 </Box>
//             </Box>
//             <Box
//                 id="skills" // Add an id for SkillsSection
//                 sx={{
//                     width: '100%',
//                     pt: 8,
//                 }}
//             >
//                 <SkillsSection />
//             </Box>
//             <Box
//                 id="projects" // Add an id for Projects
//                 sx={{
//                     mt: 4,
//                     width: '100%',
//                 }}
//             >
//                 <Projects />
//             </Box>
//             <Contact />
//             <Box
//                 component="footer"
//                 sx={{
//                     width: '100%',
//                     backgroundColor: '#000', // Black background
//                     color: '#fff', // White text
//                     textAlign: 'center',
//                     py: 2, // Padding top and bottom
//                     mt: 4, // Margin top for spacing
//                 }}
//             >
//                 <Typography
//                     variant="body2"
//                     sx={{
//                         fontFamily: 'Roboto Mono, monospace',
//                     }}
//                 >
//                     Built by me, myself and I using React-MUI, Django
//                 </Typography>
//             </Box>
//         </div>
//     );
// }

import WorkExperience from './WorkExperience'; // Import the new component

export default function Homepage() {
    return (
        <div>
            <DrawerAppBar />
            <Box
                id="home"
                sx={{
                    width: '100%',
                    height: '100vh',
                    pt: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                {/* Left Section */}
                <Box
                    sx={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 4,
                    }}
                >
                    <Grow in={true}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'black',
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            Hi, I'm Sathya!
                        </Typography>
                    </Grow>
                    <Grow
                        in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        {...{ timeout: 1500 }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'black',
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                mt: 2,
                                textAlign: 'center',
                            }}
                        >
                            Software Developer
                        </Typography>
                    </Grow>
                </Box>

                {/* Right Section */}
                <Box
                    sx={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        p: 4,
                        backgroundColor: '#f9f9f9',
                        borderLeft: '1px solid #ddd',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'black',
                            fontFamily: 'Roboto Mono, monospace',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            mb: 2,
                        }}
                    >
                        About Me
                    </Typography>

                    <Grow
                        in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        {...{ timeout: 2500 }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'black',
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: '1rem',
                                lineHeight: 1.6,
                            }}
                        >
                            Name: Sathyanarayanan Rengasamy Suresh <br />
                            Education: MS Computer Engineering, Virginia Tech <br />
                            Focus: Software Engineering <br />
                            Email: sathya@vt.edu
                        </Typography>
                    </Grow>
                    <Box sx={{ mt: 2 }}>
                        <ResumeButton />
                    </Box>
                </Box>
            </Box>
            <Box id="skills" sx={{ width: '100%', pt: 8 }}>
                <SkillsSection />
            </Box>
            <Box id="workexperience" sx={{ width: '100%', pt: 8 }}>
                <WorkExperience />
            </Box>
            <Box id="projects" sx={{ mt: 4, width: '100%' }}>
                <Projects />
            </Box>
            <Contact />
            <Box
                component="footer"
                sx={{
                    width: '100%',
                    backgroundColor: '#000',
                    color: '#fff',
                    textAlign: 'center',
                    py: 2,
                    mt: 4,
                }}
            >
                <Typography variant="body2" sx={{ fontFamily: 'Roboto Mono, monospace' }}>
                    Built by me, myself and I using React-MUI, Django
                </Typography>
            </Box>
        </div>
    );
}

