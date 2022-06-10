import React, { FunctionComponent } from "react";
import { IProject } from "../type";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    github_url,
    description,
    key_taches,
  },
}) => {
  return <div>ProjectCard</div>;
};

export default ProjectCard;
