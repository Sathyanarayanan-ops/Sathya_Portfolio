// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import OutlinedCard from "./ProjectCards"; // Reuse the card component for consistency

// const workExperienceData = [
//   {
//     title: "Software Developer Intern",
//     company: "Ai Planet",
//     duration: "May 2024 - September 2024",
//     description:
//       "Architected RAG pipeline for finetuned LLM, optimized using techniques such as Parameter efficient finetuning (PEFT), Low Rank Adaptation (LORA), Vector store optimization, bringing down computation time from 35s to 15s. ○ Developed API Proxy using Nginx for LLM inferencing, capable of handling 6,000+ requests per model. ○ Orchestrated LLM deployment on AWS EKS with a complete CICD pipeline using Kubernetes, Docker, and Jenkins to streamline automated container management and continuous integration, followed Agile methods for SDLC",
//   },
//   {
//     title: "Programmer Analyst Intern",
//     company: "Genpact - bEarly Technovations",
//     duration: "July 2022 - June 2023 ",
//     description:
//       "Developed simple automation pipeline,using a combination of ORM and AWS Opensearch integration for easy use to clients, delivering a comprehensive search result on DB, thus saving time by upto 50%. ○ Engaged in cleaning process and EDA of survey data from client’s DB, including implementing a robust tracking system to analyze time spent by user on survey. ○ Leveraged AWS cloud technologies to work on client data, processing it efficiently while also scaling it for future uses",
//   },
  
// ];

// export default function WorkExperience() {
//   return (
//     <div>
//       <Box>
//         <Typography
//           variant="h4"
//           sx={{
//             color: "black",
//             fontFamily: "Roboto Mono, monospace",
//             fontSize: "2.5rem",
//             fontWeight: "bold",
//             textAlign: "center",
//             mb: 4, // Margin below the title
//           }}
//         >
//           Work Experience
//         </Typography>
//         <Box
//           sx={{
//             p: 4, // Padding around the grid
//           }}
//         >
//           {/* Grid for cards */}
//           <Grid container spacing={4}>
//             {/* Generate cards dynamically from workExperienceData */}
//             {workExperienceData.map((work, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <OutlinedCard
//                   title={`${work.title} - ${work.company}`}
//                   description={`${work.description}\n\nDuration: ${work.duration}`}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </div>
//   );
// }


import React from "react";
import { Box, Typography, Grid, Card, CardContent, List, ListItem } from "@mui/material";

const workExperienceData = [
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
      "Developed a simple automation pipeline using a combination of ORM and AWS Opensearch integration, delivering a comprehensive search result on the database, saving time by up to 50%.",
      "Engaged in cleaning processes and EDA of survey data from the client’s database, including implementing a robust tracking system to analyze time spent by users on surveys.",
      "Leveraged AWS cloud technologies to process client data efficiently while scaling it for future use."
    ],
  },
];

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
        <Box
          sx={{
            p: 4,
          }}
        >
          {/* Grid for cards */}
          <Grid container spacing={4}>
            {workExperienceData.map((work, index) => (
              <Grid item xs={12} sm={6} key={index}>
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
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
