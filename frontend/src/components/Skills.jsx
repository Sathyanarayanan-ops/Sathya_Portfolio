
import React from "react";
import { Box, Typography } from "@mui/material";

const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Build Stack",
            skills: [
                { icon: "python", label: "Python" },
                { icon: "fastapi", label: "FastAPI" },
                { icon: "django", label: "Django" },
                { icon: "javascript", label: "JavaScript" },
                { icon: "react", label: "React" },
                { icon: "nodejs", label: "Node" },
            ],
        },
        {
            title: "Cloud Technologies",
            skills: [
                { icon: "aws", label: "AWS" },
                { icon: "docker", label: "Docker" },
            ],
        },
        {
            title: "Database Technologies",
            skills: [
                { icon: "mysql", label: "MySQL" },
                { icon: "postgres", label: "PostgreSQL" },
                { icon: "mongodb", label: "MongoDB" },
                { icon: "redis", label: "Redis" },
            ],
        },
        {
            title: "Other Tools",
            skills: [
                { icon: "postman", label: "Postman" },
                { icon: "git", label: "Git" },
                { icon: "nginx", label: "Nginx" },
                { icon: "ai", label: "AI" },
            ],
        },
    ];

    return (
        <Box sx={{ padding: "2rem" }}>
            {/* Section Title */}
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "Roboto Mono, monospace",
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                    marginBottom: "2rem",
                }}
            >
                My Tech Stack
            </Typography>
            <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontFamily: 'Roboto Mono, monospace',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        textAlign: 'center',
                        mb: 2,
                    }}
                >
                    Avid learner with strong skills in Software Development 
                    and integrating AI with Software Tools 
                </Typography>

            {/* Skills Categories */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)", // Four categories side by side
                    gap: "2rem", // Space between categories
                }}
            >
                {skillCategories.map((category) => (
                    <Box key={category.title} sx={{ textAlign: "center" }}>
                        {/* Category Title */}
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "Roboto Mono, monospace",
                                fontWeight: "bold",
                                color: "black",
                                marginBottom: "1rem",
                            }}
                        >
                            {category.title}
                        </Typography>
            

                        {/* Skills Grid */}

           
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns:
                                    category.title === "Build Stack"
                                        ? "repeat(3, 1fr)" // 3 icons per row for Build Stack
                                        : "repeat(2, 1fr)", // 2 icons per row for other categories
                                gap: "1rem",
                            }}
                        >
                            {category.skills.map((skill) => (
                                <Box
                                    key={skill.label}
                                    sx={{
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                        alt={skill.label}
                                        style={{ width: "50px", height: "50px" }}
                                    />
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontFamily: "Roboto Mono, monospace",
                                            color: "gray",
                                            marginTop: "0.5rem",
                                        }}
                                    >
                                        {skill.label}
                                    </Typography>
                                </Box>
                                
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontFamily: 'Roboto Mono, monospace',
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        textAlign: 'center',
                        mt: 4, // Space above this section
                    }}
                >
                    With more than a year of professional experience, I can seamlessly integrate AI with software engineering to create robust solutions. <br />
                    I hold deep knowledge and have a knack for building things from scratch with a focus on quality and efficiency.
                </Typography>
        </Box>
    );
};

export default SkillsSection;
