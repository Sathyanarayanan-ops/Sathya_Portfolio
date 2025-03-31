import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import OutlinedCard from "./ProjectCards";

const projectData = [
  {
    title: "Daily Assistant Multi Agent System",
    techStack: "Langgraph, GroqCloud, Llama 3 , FastAPI, Docker",
    description: "Zero cost multi agent system orchestrated in a Master-Worker architecture , with Email agent using Gmail API for mail summaries, Github Agent using Github API for regular code changes in Github Repos, Chatbot Master Agent Equipped with Weather API , Calender API, and DB for daily updates and to store reminders",
    githubLink: "https://github.com/Sathyanarayanan-ops/EmailAgent"

  },
  {
    title: "Ecommerce Price Surge Data Pipeline",
    techStack: "Apache Kafka, Apache Spark, Spark MLlib, Django , Postgres ",
    description: "Data Engineering pipeline to ingest live traffic data, customer purchase and cart data using Apache Kafka, processed for meaningful insights using Apache Spark and MLlib, introduces price surge for on demand items based on threshold and inventory stock and sends notif for restock. ",
    githubLink: "https://github.com/Sathyanarayanan-ops/Ecommerce_DataEngineering"
  },
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
    techStack: "React-leaflet, Django, Postgres, Docker",
    description: "Maps application that uses custom built map engine backend, calculates fare and distance and stores trips separately for riders, drivers and admin in PG DB, uses Route Based Access (RBAC) with JWT login to keep drivers and riders separate. Employs Stripe for payment gateway.",
    githubLink: "https://github.com/Sathyanarayanan-ops/LeafletMap"
  },
  {
    title: "Personal Assistant Chatbot",
    techStack: "Langchain , FastAPI, AWS Lambda , Docker , Groq",
    description: "Serverless AI-powered chatbot fine-tuned to profile, enhancing recruiter engagement and understanding ,Deployed on AWS Lambda, reducing infrastructure costs by 99% by eliminating the need for an EC2 instance Leveraged Meta LLaMA 3 on Groq, achieving a 90% reduction in computation intensity, with requests efficiently routed via a static Netlify frontend for optimal performance",
    githubLink: "https://github.com/Sathyanarayanan-ops/Sathya_Portfolio"
  },
  {
    title: "Custom SQLite Database",
    techStack: "C , SQL, SQLite,",
    description: "Developed a lightweight, custom-built SQLite database engine from scratch in C, focusing on understanding and modifying SQLite’s internal architecture. Implemented core database functionalities such as parsing SQL queries, handling B-trees for indexing, and managing memory-efficient storage. Optimized query execution and explored source-level transformations to enhance performance by reducing branch mispredictions.",
    githubLink: "https://github.com/Sathyanarayanan-ops/mydb_sqlite"
  },
  {
    title: "A* Routing Engine",
    techStack: "Python , PiP, PyPI ",
    description: "Custom map routing engine that uses self implemented A* algorithm to find shortest route, user can give start, end and intermediate stops; published as a PyPI package. \n Install with command <pip install aStarEngine-package>",
    githubLink: "https://github.com/Sathyanarayanan-ops/map_engine"
  },
  {
    title: "Document Q&A RAG",
    techStack: "Python, FastAPI, Langchain , Llama 2",
    description: "RAG application with Chat Interface to ask questions regarding a given PDF, generate Q&A and Multiple Choice Questions. Finetuned to subject specific data and advanced prompting techniques such as few-shot for further improving accuracy",
    githubLink: "https://github.com/Sathyanarayanan-ops/QAgenRAGapp"
  },
  {
    title: "Employee Management System",
    techStack: "Python, FastAPI, React ",
    description: "Monolothic CRUD based application for hanlding leave creating employees, setting roles, automatically assigning heirarchical structure with manager, teams, HR. Leave request system, automatically sends request to Manger and HR, uses RBAC to control the hierarchy.",
    githubLink: "https://github.com/Sathyanarayanan-ops/QAgenRAGapp"
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
            px: { xs: 2, sm: 4, md: 6 },
            py: 4,
            maxWidth: "1600px",
            margin: "0 auto",
            width: "100%",
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
