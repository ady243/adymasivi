/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent, useEffect, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
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
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <img src={image_path} alt={name} className="cursor-pointer" />
      <p className="my-2 text-center">{name}</p>
      {

        showDetails && (
      

      <><div className="grid md:grid-cols-2">
          <div>
            <img src={image_path} alt={name} />
          </div>
          <div>
            <a href={github_url}>
              <AiFillGithub />
              <span>Github</span>
            </a>
          </div>
          <div>
            <a href={deployed_url}>
              <AiFillProject />
              <span>Project</span>
            </a>
          </div>
        </div><div>
            <div>
              <h2>{name}</h2>
              <h3>{description}</h3>
            </div>
            <div>
              {key_taches.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <button>
              <MdClose size={30} />
            </button>
      )};
          </div>
    
    </div>
          
  );
};

export default ProjectCard;
