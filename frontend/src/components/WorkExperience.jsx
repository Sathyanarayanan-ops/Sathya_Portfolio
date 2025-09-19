import React from "react";
import { Box, Typography, Grid, Card, CardContent, List, ListItem } from "@mui/material";

const workExperienceData = [
  {
    title: "Software Developer",
    company: "SAP Labs America, Palo Alto, CA",
    duration: "June 2025 - Present",
    description: [
      "Engineered the Data Agent system integrating multi-agent architectures within SAP Databricks, building an API Gateway and automating worker-agent creation — enabling schema-driven agent generation for table-level operations.",
      "Reduced agent testing time by 75% through innovative parallel processing and full test automation, performing unit and large-scale resilience testing with data-efficient validation techniques.",
      "Developed secure A2A protocol for integrating SAP Joule with GIA HR Agent, implementing XSUAA and CIS-based authentication to achieve cross-agent handshake and communication under SAP’s high-security standards."
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Ai Planet",
    duration: "May 2024 - September 2024",
    description: [
      "Architected RAG pipeline for finetuned LLM, optimized using techniques such as Parameter efficient finetuning (PEFT), Low Rank Adaptation (LORA), and Vector store optimization, reducing computation time from 35s to 15s.",
      "Developed API Proxy using Nginx for LLM inferencing, capable of handling 6,000+ requests per model.",
      "Orchestrated LLM deployment on AWS EKS with a complete CICD pipeline using Kubernetes, Docker, and Jenkins to streamline automated container management and continuous integration.",
      "Followed Agile methods for SDLC."
    ],
  },
  {
    title: "Programmer Analyst Intern",
    company: "Genpact - bEarly Technovations",
    duration: "July 2022 - June 2023",
    description: [
      "Developed data ingesting pipeline with 100,000 data streams per hour using Kafka, reducing latency by 50%, and increasing throughput.",
      "Engaged in cleaning processes and EDA of survey data from the client’s database, including implementing a robust tracking system to analyze time spent by users on surveys.",
      "Leveraged AWS cloud technologies to process client data efficiently while scaling it for future use."
    ],
  },
];

function ExperienceCard({ work }) {
  return (
    <Card
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
        p: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Roboto Mono, monospace",
            mb: 1,
          }}
        >
          {work.title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "gray",
            fontFamily: "Roboto Mono, monospace",
            mb: 1,
          }}
        >
          {work.company}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: "black",
            fontFamily: "Roboto Mono, monospace",
            mb: 2,
          }}
        >
          {work.duration}
        </Typography>
        <List>
          {work.description.map((point, idx) => (
            <ListItem
              key={idx}
              sx={{
                display: "list-item",
                fontFamily: "Roboto Mono, monospace",
                fontSize: "0.9rem",
                mb: 1,
              }}
            >
              {point}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default function WorkExperience() {
  return (
    <div>
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: "black",
            fontFamily: "Roboto Mono, monospace",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          Work Experience
        </Typography>
        <Box sx={{ p: 4 }}>
          <Grid container spacing={4} justifyContent="center">
            {/* First row: SAP Labs only */}
            <Grid item xs={12} sm={8} md={6}>
              <ExperienceCard work={workExperienceData[0]} />
            </Grid>

            {/* Second row: Ai Planet + Genpact */}
            {workExperienceData.slice(1).map((work, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ExperienceCard work={work} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
