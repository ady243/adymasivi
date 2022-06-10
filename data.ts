import { AiOutlineAntDesign, AiOutlineApi, AiFillSignal } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";

import { IProject, Iservices, ISkill } from "./type";

export const services: Iservices[] = [
  {
    Icon: RiComputerLine,
    title: "Front-end Deveveloppement",
    about: "Html, css, Javascript, NextJs, ReactJs",
  },
  {
    Icon: FaServer,
    title: "Backend Developpement",
    about: "Node : Express, KnexJs",
  },
  {
    Icon: AiOutlineApi,
    title: "Gestion Api",
    about: "GraphQl",
  },
  {
    Icon: MdDeveloperMode,
    title: "Application Developpement",
    about: "Java, Kotlin, ReactJs, Flutter",
  },

  {
    Icon: AiFillSignal,
    title: "Réseaux",
    about: "Cisco",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Autre ",
    about: "Scrum Master, Droit Informatique, methode Agile",
  },
];

export const languages: ISkill[] = [
  {
    name: "HTML",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "CSS",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "Tailwindcss",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "NextJS",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "ReactJS",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "KnexJS",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "Express",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "Java",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "Kotlin",
    level: "45%",
    Icon: BsCircleFill,
  },
];
export const tools: ISkill[] = [
  {
    name: "Photoshop",
    level: "30%",
    Icon: BsCircleFill,
  },
  {
    name: "UX",
    level: "55%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: "Expenses React",
    description: "Application web de calcul de dépenses",
    image_path: "images/tracker.png",
    deployed_url: "",
    github_url: "git@github.com:ady243/expenses.git",
    category: ["ReactJs"],
    key_taches: ["React", "StyledCSS", "TailwindCSS"],
  },
  {
    name: "Annuaire Next",
    description: "Application web de calcul de dépenses",
    image_path: "images/ANNUAIRE.png",
    deployed_url: "",
    github_url: "git@github.com:ady243/Annuaire.git",
    category: ["NextJS"],
    key_taches: ["Next", "StyledCSS", "TailwindCSS", "Bootstrap"],
  },
  {
    name: "Blog Post",
    description: "Application web de post commentaire et de création de compte",
    image_path: "images/frontblog.jpg",
    deployed_url: "",
    github_url: "git@github.com:ady243/front-blogNextJS.git",
    category: ["NextJS", "KnexJs", "Express"],
    key_taches: ["next", "StyledCSS", "TailwindCSS"],
  },
  {
    name: "MobiliShop",
    description:
      "Application d'E-commerce de vente en ligne des produits mobiliers",
    image_path: "images/mobili.jpg",
    deployed_url: "",
    github_url: "git@github.com:ady243/Mobilishop-Java.git",
    category: ["NextJS", "FireBase"],
    key_taches: ["Java"],
  },
  {
    name: "Knex and Express",
    description: "Back-End Knex & Express (Node)",
    image_path: "images/back.png",
    deployed_url: "",
    github_url: "git@github.com:ady243/Knext-Express.git",
    category: ["KnexJs", "Express"],
    key_taches: ["Java"],
  },
  {
    name: "Flutter",
    description: "Register App (En cours) ",
    image_path: "images/encours.jpeg",
    deployed_url: "",
    github_url: "git@github.com:ady243/Knext-Express.ady",
    category: ["KnexJs", "Express"],
    key_taches: ["Java"],
  },
];
