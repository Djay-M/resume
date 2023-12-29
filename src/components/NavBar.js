import { useState } from "react";
import { Link } from "react-scroll";
import {
  defaultTheme,
  githubProfile,
  linkedInProfile,
  themesConfig,
} from "../config/constants";
import ResumePDF from "../assets/Dhananjaya_M_CV.pdf";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function NavBar(props) {
  let theme = props.theme ? props.theme : defaultTheme;
  const [state, setState] = useState({
    navbarOpen: false,
  });
  const textColor = themesConfig[theme].textColor;
  const style = {
    outerDiv: {
      backgroundColor: themesConfig[theme].navBarBackgroundColor,
    },
    leftDiv: {
      minWidth: "20%",
      marginLeft: "10%",
    },
    leftDivButtons: {
      alignItems: "center",
      color: textColor,
    },
    midDiv: {
      display: "flex",
      alignItems: "center",
      width: "50%",
      justifyContent: "space-between",
    },
    midButton: {
      margin: "7px",
      color: textColor,
      backgroundColor: "transparent",
      border: "0.1px solid transparent",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "18px",
    },
    rightDiv: {
      width: "30%",
      marginLeft: "5%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    rightDivButtons: {
      color: textColor,
      backgroundColor: "transparent",
      border: "0.1px solid transparent",
      borderRadius: "5px",
    },
    icons: {
      ResumeIcon: {
        width: 50,
        height: 30,
        borderRadius: "50%",
        display: "flex",
        hover: {
          transform: "scale(1.5,1.5)",
          transition: "0.5s",
        },
      },
    },
  };

  const fetchLinkButton = (LinkName, linkTo) => {
    return (
      <Link
        className="text-4xl hover:scale-150 duration-300"
        id="homeButton"
        value="home"
        style={{
          ...style.midButton,
        }}
        to={linkTo}
        spy={true}
        smooth={true}
        offset={-80}
        duration={900}
      >
        {LinkName}
      </Link>
    );
  };

  const handleNavbarClick = () =>
    setState({ ...state, navbarOpen: !state.navbarOpen });

  return (
    <div
      className="fixed w-full h-[80px] flex justify-between items-center px-4"
      style={style.outerDiv}
    >
      <div className="px-20">
        <p style={style.leftDivButtons}>Dhananajaya M</p>
      </div>
      <div className="hidden md:flex justify-between gap-2 items-center mr-20">
        {fetchLinkButton("Home", "home")}
        {fetchLinkButton("About", "about")}
        {fetchLinkButton("Projects", "projects")}
        {fetchLinkButton("Contact", "contact")}
      </div>
      <div className="md:hidden z-10" onClick={handleNavbarClick}>
        {!state.navbarOpen ? (
          <FaBars color={`${textColor}`} />
        ) : (
          <FaTimes color={`${textColor}`} />
        )}
      </div>
      {/* Mobile View */}
      <div
        className={
          !state.navbarOpen
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
        }
        style={style.outerDiv}
      >
        {fetchLinkButton("Home", "home")}
        {fetchLinkButton("About", "about")}
        {fetchLinkButton("Projects", "projects")}
        {fetchLinkButton("Contact", "contact")}
        <a
          href={ResumePDF}
          download="Dhananjaya_M_CV"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="resumeLink"
            style={{
              ...style.midButton,
            }}
          >
            Resume
          </button>
        </a>
      </div>
      {/* Social Icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-500">
            <a
              className={`flex justify-between items-center w-full text-${textColor}-300`}
              href={linkedInProfile}
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#666666]">
            <a
              className={`flex justify-between items-center w-full text-${textColor}-300`}
              href={githubProfile}
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
            <a
              className={`flex justify-between items-center w-full text-${textColor}-300`}
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]">
            <a
              className={`flex justify-between items-center w-full text-${textColor}-300`}
              href={ResumePDF}
              download="Dhananjaya_M_CV"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
