import { AiOutlineAntDesign, AiOutlineApi, AiFillSignal } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";

import { Iservices, ISkill } from "./type";

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
    name: "HTML & CSS",
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
    name: "Java Script",
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
