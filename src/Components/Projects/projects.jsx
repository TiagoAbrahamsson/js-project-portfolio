import React from "react";
import Card from "./card";

  
  const FeaturedProjects = () => {
    const projects = [
      {
        id: 2,
        image: "/images/postershop.png",
        title: "Business site project",
        description: "A project created to learn the basics in responsive web design, CSS grid, flexbox layout and DOM manipulation.",
        tags: ["HTML5", "CSS3", "Javascript"],
        liveLink: "https://chipper-sherbet-b7a17b.netlify.app/",
        codeLink: "https://github.com/TiagoAbrahamsson/js-project-business-site/tree/main"
      },
      {
        id: 3,
        image: "/images/project3.png",
        title: "Weather app",
        description: "A responsive weather app built with typescript fetchingdata from OpeanWeather API. It shows shows current weather, temperature, sunrise and sunset and a 4 - day forecast.",
        tags: ["HTML5", "Javascript", "CSS", "Typescript", "API"],
        liveLink: "https://watherrr.netlify.app/",
        codeLink: "#"
      },
      {
        id: 4,
        image: "/images/accessability.png",
        title: "Web accessability quiz App",
        description: "A quiz website about web accessability where common accessibility guidelines are followed.",
        tags: ["HTML5", "Javascript", "CSS", "WCAG"],
        liveLink: "https://quiz-accessibility.netlify.app/",
        codeLink: "https://github.com/TiagoAbrahamsson/js-project-accessibility"
      },
      {
        id: 5,
        image: "/images/project5.png",
        title: "Recipe Library",
        description: "A recipe app that fetches recipies from an API to help users find recipies based on different filters.",
        tags: ["HTML5", "Javascript", "CSS", "API"],
        liveLink: "#",
        codeLink: "#"
      },
      // Add more projects here
    ];
  
    return (
      <div className="projects-container">
      {projects.map((project, index) => (
        <Card
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          tags={project.tags}
          liveLink={project.liveLink}
          codeLink={project.codeLink}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
    );
  }


export default FeaturedProjects;
