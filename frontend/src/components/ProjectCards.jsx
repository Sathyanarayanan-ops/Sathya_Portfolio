import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function OutlinedCard({ title, techStack, description, githubLink }) {
  return (
    <Box sx={{ minWidth: 300, maxWidth: 300, m: 2 }}> {/* Consistent width for all cards */}
      <Card 
        variant="outlined"
        sx={{
          backgroundColor: '#1c1c1c', // Darker shade for a rich look
          color: 'white', // Adjust text color for contrast
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow for depth
          borderRadius: '8px', // Rounded corners
          transition: 'transform 0.2s, box-shadow 0.2s', // Smooth animation on hover
          '&:hover': {
            transform: 'scale(1.05)', // Slight zoom effect on hover
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Enhanced shadow on hover
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
            {title}
          </Typography>
          <Typography sx={{ color: 'gray', mb: 2 }}>
            Tech Stack - {techStack}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 2, // Padding for alignment
          }}
        >
          <Button size="small" variant="contained" sx={{ backgroundColor: '#f50057', color: 'white' }}>
            Learn More
          </Button>
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener"
            underline="hover"
            sx={{
              color: '#f50057', // Match the button color
              fontSize: '0.9rem',
              fontWeight: 'bold',
            }}
          >
            GitHub
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
