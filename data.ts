import { AiOutlineAntDesign, AiOutlineApi, AiFillSignal } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { FaServer } from "react-icons/fa";

import { Iservices } from "./type";

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
