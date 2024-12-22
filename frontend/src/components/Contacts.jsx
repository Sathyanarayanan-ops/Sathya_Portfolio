import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Contact() {
    return (
        <div>
            <Box
                id="contact"
                sx={{
                    width: '100%',
                    height: '100vh',
                    pt: 8,
                    display: 'flex',
                    flexDirection: 'column', // Stack items vertically
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center', // Center-align the text
                    gap: 2, // Add spacing between elements
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: 'black',
                        fontFamily: 'Roboto Mono, monospace',
                        fontWeight: 'bold',
                    }}
                >
                    Reach out to me!
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontFamily: 'Roboto Mono, monospace',
                        fontSize: '1rem',
                        lineHeight: 1.8,
                    }}
                >
                    <strong>Email:</strong> <br />
                    sathya05@vt.edu <br />
                    sathyanarayanan0705@gmail.com <br /><br />

                    <strong>Github Profile:</strong> <br />
                    <a href="https://github.com/Sathyanarayanan-ops" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>
                        github.com/Sathyanarayanan-ops
                    </a> <br /><br />

                    <strong>LinkedIn:</strong> <br />
                    <a href="https://www.linkedin.com/in/sathyars751/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>
                        linkedin.com/in/sathyars751/
                    </a> <br /><br />

                    <strong>Phone:</strong> <br />
                    +1-540-245-3047
                </Typography>
            </Box>
        </div>
    );
}
