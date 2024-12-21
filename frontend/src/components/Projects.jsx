import React from "react";
import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function Projects() {
    return (
        <div>
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        color: 'black',
                        fontFamily: 'Roboto Mono, monospace',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        mb: 4, // Margin below the title
                    }}
                >
                    Projects
                </Typography>
                <Box
                    sx={{
                        display: 'flex', // Create two columns
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start', // Align the content at the top
                        width: '100%',
                        gap: 4, // Space between the columns
                        p: 4, // Padding around the container
                    }}
                >
                    {/* Left Half: AI Projects */}
                    <Box
                        sx={{
                            width: '50%', // Occupy half the space
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            p: 2, // Padding inside this half
                            // backgroundColor: '#f9f9f9', // Optional background for contrast
                            // border: '1px solid #ddd', // Optional border for styling
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'black',
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                mb: 2, // Margin below the heading
                            }}
                        >
                            AI Projects
                        </Typography>
                        {/* Add clickable cards here */}
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: '1rem',
                                // color: 'gray',
                                textAlign: 'center',
                            }}
                        >
                            Description or content for AI projects goes here.
                        </Typography>
                    </Box>

                    {/* Right Half: Software Engineering Projects */}
                    <Box
                        sx={{
                            width: '50%', // Occupy half the space
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            p: 2, // Padding inside this half
                            // backgroundColor: '#f9f9f9', // Optional background for contrast
                            // border: '1px solid #ddd', // Optional border for styling
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'black',
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                mb: 2, // Margin below the heading
                            }}
                        >
                            Software Engineering Projects
                        </Typography>
                        {/* Add clickable cards here */}
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: '1rem',
                                // color: 'gray',
                                textAlign: 'center',
                            }}
                        >
                            
                            Description or content for Software Engineering projects goes here.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
