import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import OutlinedCard from "./ProjectCards";

const projectData = [
  {
    title: "Text to SQL RAG Application",
    techStack: "Python, MySQL, Langchain",
    description: "Python application powered by LLama 3 which takes in Natural Language user input, performs SQL query actions and returns output in natural language along with necessary responses including tabulated output.",
    githubLink: "https://github.com/Sathyanarayanan-ops/Text2SQL"
  },
  {
    title: "Stock Portfolio Management System",
    techStack: "Python, Django, Postgres, React-MUI, Docker, AWS, Redis Celery",
    description: "Stock portfolio management system, where user can log the purchase of their stocks, data fetched by Yfinance API; and set volatility alert mediated by Redis Celery scheduler ",
    githubLink: "https://gitlab.com/pranav1099/portfolio-management-system"
  },
  {
    title: "Maps Application",
    techStack: "React-leaflet, Django, Postgres",
    description: "Maps application that uses custom built map engine backend that uses A* algorithm to find shortest route",
    githubLink: "https://github.com/Sathyanarayanan-ops/LeafletMap"
  },
  {
    title: "A* Routing Engine",
    techStack: "Python",
    description: "Custom map routing engine that uses self implemented A* algorithm to find shortest route, user can give start, end and intermediate stops; published as a PyPI package. Install with command <pip install aStarEngine-package>",
    githubLink: "https://github.com/Sathyanarayanan-ops/map_engine"
  },
  {
    title: "Portfolio Website",
    techStack: "React, Material-UI",
    description: "A responsive personal portfolio website showcasing projects, skills, and contact information.",
    githubLink: "https://github.com/example/portfolio-website"
  },
  {
    title: "Inventory Management System",
    techStack: "Django, PostgreSQL",
    description: "A system for managing inventory with features like stock tracking, sales analysis, and reporting.",
    githubLink: "https://github.com/example/inventory-management"
  }
];

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
            p: 4, // Padding around the grid
          }}
        >
          {/* Grid for cards */}
          <Grid container spacing={4}>
            {/* Generate cards dynamically from projectData */}
            {projectData.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <OutlinedCard {...project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
