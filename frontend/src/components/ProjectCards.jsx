import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
            Text to SQL RAG Application
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Tech Stack - Python, MySQL, Langchain</Typography>
      <Typography variant="body2">
            Python application powered by LLama 3 which takes in Natural Language user input, performs SQL query actions and returns output in natural language along with necessary responses including tabulated output.
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
    <Link href="#">Link</Link>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
