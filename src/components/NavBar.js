import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultTheme, themesConfig } from "../config/constants";

function NavBar(props) {
  const navigate = useNavigate();
  let theme = props.theme ? props.theme : defaultTheme;
  const [state, setState] = useState({
    hoveredOnHomeButton: false,
    hoveredOnProjectsButton: false,
    hoveredOnAboutButton: false,
    hoveredOnContactButton: false,
  });
  const textColor = themesConfig[theme].textColor;
  const style = {
    outerDiv: {
      position: "sticky",
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
      color: textColor,
    },
    midDiv: {
      display: "flex",
      alignItems: "center",
      width: "50%",
      justifyContent: "center",
    },
    midButton: {
      color: textColor,
      backgroundColor: "transparent",
      border: "none",
    },
    rightDiv: {
      width: "30%",
      marginRight: "5%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    rightDivButtons: {
      margin: "7px",
      color: textColor,
      backgroundColor: "transparent",
      border: "0.1px solid transparent",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const handleOnClick = (event) => {
    navigate(`/${event.target.value}`);
  };

  return (
    <div className="NavBar" style={style.outerDiv}>
      <div className="leftDiv" style={style.leftDiv}>
        <p style={style.leftDivButtons}>Dhananajaya M</p>
      </div>
      <div style={style.midDiv}>
        {/* TODO: ADD a feature change theme */}
        {/* <button id="themeButton" style={style.midButton}>
          theme
        </button> */}
      </div>
      <div className="rightDiv" style={style.rightDiv}>
        <button
          id="homeButton"
          value="home"
          style={{
            ...style.rightDivButtons,
            transform: `${
              state.hoveredOnHomeButton ? "scale(1.5,1.5)" : "scale(1,1)"
            }`,
            transition: `${state.hoveredOnHomeButton ? "0.5s" : "0.5s"}`,
          }}
          onMouseOut={() => setState({ ...state, hoveredOnHomeButton: false })}
          onMouseOver={() => setState({ ...state, hoveredOnHomeButton: true })}
          onClick={(event) => handleOnClick(event)}
        >
          Home
        </button>
        <button
          id="projectsButton"
          value="projects"
          style={{
            ...style.rightDivButtons,
            transform: `${
              state.hoveredOnProjectsButton ? "scale(1.5,1.5)" : "scale(1,1)"
            }`,
            transition: `${state.hoveredOnProjectsButton ? "0.5s" : "0.5s"}`,
          }}
          onMouseOut={() =>
            setState({ ...state, hoveredOnProjectsButton: false })
          }
          onMouseOver={() =>
            setState({ ...state, hoveredOnProjectsButton: true })
          }
          onClick={(event) => handleOnClick(event)}
        >
          Projects
        </button>
        <button
          id="aboutButton"
          value="about"
          style={{
            ...style.rightDivButtons,
            transform: `${
              state.hoveredOnAboutButton ? "scale(1.5,1.5)" : "scale(1,1)"
            }`,
            transition: `${state.hoveredOnAboutButton ? "0.5s" : "0.5s"}`,
          }}
          onMouseOut={() => setState({ ...state, hoveredOnAboutButton: false })}
          onMouseOver={() => setState({ ...state, hoveredOnAboutButton: true })}
          onClick={(event) => handleOnClick(event)}
        >
          About
        </button>
        <button
          id="contactButton"
          value="contact"
          style={{
            ...style.rightDivButtons,
            transform: `${
              state.hoveredOnContactButton ? "scale(1.5,1.5)" : "scale(1,1)"
            }`,
            transition: `${state.hoveredOnContactButton ? "0.5s" : "0.5s"}`,
          }}
          onMouseOut={() =>
            setState({ ...state, hoveredOnContactButton: false })
          }
          onMouseOver={() =>
            setState({ ...state, hoveredOnContactButton: true })
          }
          onClick={(event) => handleOnClick(event)}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default NavBar;
