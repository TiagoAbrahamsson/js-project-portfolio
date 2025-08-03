import React from "react";
import Card from "./card";

const FeaturedProjects = () => {
  
  const FeaturedProjects = () => {
    const projects = [
      {
        id: 1,
        image: "/images/chatbot-mockup.png",
        title: "Chatbot built in JavaScript",
        description: "The chatbot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses.",
        tags: ["html", "css", "javascript"],
        liveLink: "#",
        codeLink: "#"
      },
      {
        id: 2,
        image: "/images/project2.png",
        title: "Portfolio Website",
        description: "A responsive portfolio website built with React to showcase my projects and skills.",
        tags: ["react", "css", "tailwind"],
        liveLink: "#",
        codeLink: "#"
      },
      // Add more projects here
    ];
  
    return (
      <div className="featured-projects">
        <h1>Featured Projects</h1>
        <div className="projects-container">
          {projects.map(project => (
            /* Render your Card component with project props */
            <div key={project.id}>
              {/* Pass the project data as props to the Card component */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FeaturedProject;
