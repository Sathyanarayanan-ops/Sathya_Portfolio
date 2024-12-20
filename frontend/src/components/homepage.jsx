import React from 'react';
import Box from '@mui/material/Box';
import { Grow } from '@mui/material';
import DrawerAppBar from "./Appbar";
import {Typography} from '@mui/material';


export default function Homepage(){
    return (
        <div>
            <DrawerAppBar/>
            <Box 
                sx={{ 
                    width: '100%', 
                    height: '100vh', 
                    pt: 8, 
                    display: 'flex', 
                    flexDirection: 'column', // Stack items vertically
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}
            >
                <Grow in={true}>
                    <Typography variant="h4" sx={{ 
                        color: 'black', 
                        fontFamily: 'Roboto Mono, monospace',
                        fontSize: '3rem',
                        fontWeight: 'bold'
                    }}>
                        Hi,I'm Sathya!
                    </Typography>
                </Grow>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...{ timeout: 1000 }}
                >
                    <Typography variant="h4" sx={{ 
                        color: 'black', 
                        fontFamily: 'Roboto Mono, monospace',
                        fontSize: '2.5rem', // Slightly smaller size for better hierarchy
                        fontWeight: 'bold',
                        mt: 2 // Add vertical spacing (margin-top)
                    }}>
                        Welcome to my Portfolio
                    </Typography>
                </Grow>
            </Box>

        </div>
    )
}