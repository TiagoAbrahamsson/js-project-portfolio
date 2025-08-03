import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-list">
        <div className="skills-category">
          <h3 className="category">Code</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Typescript</li>
            <li>Github</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3 className="category">Toolbox</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
            <li>Postman</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3 className="category">Upcoming</h3>
          <ul>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
