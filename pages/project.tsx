import React from "react";
import { projects } from "../data";
const Projects = ()=> {
  return (
    <div>
      <nav>NAVBAR</nav>

      <div>
        (
        projects.map(project=>(
        <div>
          <ProjectCard/>
        </div>
        ))
        )
      </div>
   </div>

  ) 
}

export default Projects;
