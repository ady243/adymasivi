import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "cursor-pointer ccapitalize hover:text-yellow-500";

  if (active === value) className += "text-yellow-500";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="ReactJs" {...props} />
      <NavItem value="Express" {...props} />
      <NavItem value="KnexJs" {...props} />
      <NavItem value="Java" {...props} />
      <NavItem value="NextJS" {...props} />
      <NavItem value="Kotlin" {...props} />
      <NavItem value="Flutter" {...props} />
      <NavItem value="FireBase" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
