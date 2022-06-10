/* eslint-disable react/jsx-key */
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
const Projects = () => {
  return (
    <div>
      <nav>NAVBAR</nav>

      <div>
        {projects.map((project) => (
          <div>
            <ProjectCard project={project} key={projects.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
