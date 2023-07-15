import { useState } from "react";
import { Link } from "react-scroll";
import { defaultTheme, themesConfig } from "../config/constants";
import ResumePDF from "../assets/Dhananjaya_M_CV.pdf";
import ResumeIcon from "../assets/icons/resume-icon.png";

function NavBar(props) {
  let theme = props.theme ? props.theme : defaultTheme;
  const [state, setState] = useState({
    hoveredOnHomeButton: false,
    hoveredOnProjectsButton: false,
    hoveredOnAboutButton: false,
    hoveredOnContactButton: false,
    hoveredOnResumeIcon: false,
  });
  const textColor = themesConfig[theme].textColor;
  const style = {
    outerDiv: {
      position: "fixed",
      display: "flex",
      minHeight: "5vh",
      minWidth: "100%",
      maxWidht: "100%",
      backgroundColor: themesConfig[theme].navBarBackgroundColor,
      flexDirection: "row",
      justifyContent: "space-between",
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
      margin: "7px",
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

  const fetchLinkButton = (LinkName, linkTo, hoveredOn) => {
    return (
      <Link
        id="homeButton"
        value="home"
        style={{
          ...style.midButton,
          ...(state[hoveredOn] && {
            color: "#7843e9",
          }),
          transform: `${state[hoveredOn] ? "scale(1.5,1.5)" : "scale(1,1)"}`,
          transition: `${state[hoveredOn] ? "0.5s" : "0.5s"}`,
        }}
        onMouseOut={() => setState({ ...state, [hoveredOn]: false })}
        onMouseOver={() => setState({ ...state, [hoveredOn]: true })}
        to={linkTo}
        spy={true}
        smooth={true}
        offset={-10}
        duration={900}
      >
        {LinkName}
      </Link>
    );
  };

  return (
    <div className="NavBar" style={style.outerDiv}>
      <div className="leftDiv" style={style.leftDiv}>
        <p style={style.leftDivButtons}>Dhananajaya M</p>
      </div>
      <div style={style.midDiv}>
        {fetchLinkButton("Home", "home", "hoveredOnHomeButton")}
        {fetchLinkButton("Projects", "projects", "hoveredOnProjectsButton")}
        {fetchLinkButton("About", "about", "hoveredOnAboutButton")}
        {fetchLinkButton("Contact", "contact", "hoveredOnContactButton")}
      </div>
      <div className="rightDiv" style={style.rightDiv}>
        <button id="themeButton" style={style.rightDivButtons}>
          Theme
        </button>
        <a
          style={style.rightDivButtons}
          href={ResumePDF}
          download="Dhananjaya_M_CV"
          target="_blank"
        >
          <button
            className="resumeLink"
            style={{
              ...style.rightDivButtons,
              transform: `${
                state.hoveredOnResumeIcon ? "scale(1.5,1.5)" : "scale(1,1)"
              }`,
              transition: `${state.hoveredOnResumeIcon ? "0.5s" : "0.5s"}`,
            }}
            onMouseOut={() =>
              setState({ ...state, hoveredOnResumeIcon: false })
            }
            onMouseOver={() =>
              setState({ ...state, hoveredOnResumeIcon: true })
            }
          >
            <div className="resumeIcon" style={style.icons.ResumeIcon}>
              <p style={style.rightDivButtons}>Resume</p>
              {state.hoveredOnResumeIcon && (
                <img style={style.icons.ResumeIcon} src={ResumeIcon} />
              )}
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
