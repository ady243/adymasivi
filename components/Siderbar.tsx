import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";
import { useTheme } from "next-themes";

const Sliderbar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="/ady.jpg"
        alt="user avatar"
        className="w-32 mx-auto rounded-full"
        width={190}
        height={260}
      />
      <h3 className="my-4 space-x-2 text-3xl font-medium tracking-wider font-classic">
        <span className="text-red-500">Ady </span>
        Masivi<br></br>
        <span>Masanzambi</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-dark-500">
        Développeur web
      </p>

      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Télécharger le Resumé
      </a>
      {/* //social media icon */}

      <div className="flex justify-around w-9/12 mx-auto my-5 text-yellow-500 md:w-full">
        <a href="#">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/ady-masivi-8547b41a7/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/ady243">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* //address*/}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-dark-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Ile de france</span>
        </div>
        <p className="my-2">masiviady7@gmail.com</p>
        <p className="my-2">0661172371</p>
      </div>
      {/* //email buttom*/}
      <button
        className="w-8/12 px-2 py-2 my-2 rounded-full bg-gradient-to-r from-red-600 to-blue to-yellow-400 focus:outline-none"
        onClick={() => window.open("mailto:masiviady7@gmail.com")}
      >
        Email
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-2 py-2 my-2 rounded-full bg-gradient-to-r from-red-600 to-blue to-yellow-400"
      >
        Toggle Theme
      </button>
      <footer className="py-3 my-4">
        <ul className="pb-3 mb-3 nav justify-content-center border-bottom">
          <li className="nav-item">
            <a href="#" className="px-2 nav-link text-muted"></a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2022 Ady Masivi, Dev</p>
      </footer>
    </div>
  );
};

export default Sliderbar;
