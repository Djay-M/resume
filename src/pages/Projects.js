import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Project from "../components/Project";
import UnderLine from "../components/UnderLine";
import {
  defaultTheme,
  paragrap,
  themesConfig,
  underLineColor,
} from "../config/constants";
import { fetchDetailedDescriptionIds } from "../helpers";
const _ = require("lodash");

export default function Projects() {
  let theme = defaultTheme;
  const constants = {
    workProjectsButtonId: "workProjectsButton",
    personalProjectsButtonId: "personalProjectsButton",
    boxShadow: "rgba(100,100,111,50) 1px 0px 10px 10px",
  };
  const [state, setState] = useState({
    onClickWorkProjectsButton: true,
    onClickPersonalProjectsButton: false,
    projectsToDisplay: constants.workProjectsButtonId,
    ...fetchDetailedDescriptionIds(),
  });

  //eslint-disable-next-line
  const [cookies, setCookie] = useCookies([theme]);
  if (cookies.theme && _.includes(Object.keys(themesConfig), cookies.theme)) {
    theme = cookies.theme;
  }
  const { backgroundImage, backgroundColor, textColor } = themesConfig[theme];

  const style = {
    outerDiv: {
      display: "flex",
      flexDirection: "column",
      color: textColor,
      height: "100vh",
      width: "100vw",
      backgroundColor: backgroundColor,
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    paragraphTitleDiv: {
      textAlign: "center",
      marginTop: "3%",
      color: textColor,
      fontSize: "3rem",
      textTransform: "uppercase",
      letterSpacing: "3px",
      fontWeight: "800",
    },
    paragraphBodyDiv: {
      color: textColor,
      fontSize: "20px",
      textAlign: "center",
      padding: "2px",
      whiteSpace: "pre-line",
    },
    projectsNavBar: {
      display: "flex",
      gap: "3%",
      margin: "1.5rem 3.5rem 1rem auto",
      width: "90%",
    },
    projectsDiv: {
      margin: "1.5rem",
      width: "90%",
      height: "60%",
      overflow: "auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      gap: "1rem",
    },
    projectButton: {
      width: "25rem",
      height: "5rem",
      fontSize: "30px",
      color: textColor,
      backgroundColor: "transparent",
      border: "0.5px solid",
      borderRadius: "20px",
    },
  };

  const handleOnClick = (event) => {
    const buttonId = event?.target?.id;
    if (buttonId === constants.workProjectsButtonId) {
      setState({
        ...state,
        onClickWorkProjectsButton: true,
        onClickPersonalProjectsButton: false,
        projectsToDisplay: "workProjects",
      });
    }
    if (buttonId === constants.personalProjectsButtonId) {
      setState({
        ...state,
        onClickPersonalProjectsButton: true,
        onClickWorkProjectsButton: false,
        projectsToDisplay: "personalProjects",
      });
    }
  };

  const handleOnClickProject = (event) => {
    const buttonId = event?.target?.id;
    setState({
      ...state,
      [buttonId]: !state[buttonId],
    });
  };

  const projects = state.onClickWorkProjectsButton
    ? paragrap.projects.workProjects.map((project) => (
        <Project
          projectDetails={project}
          onClickFunction={handleOnClickProject}
          popOverState={state[`popOverState-${project.title}`]}
        />
      ))
    : paragrap.projects.personalProjects.map((project) => (
        <Project
          projectDetails={project}
          onClickFunction={handleOnClickProject}
          popOverState={state[`popOverState-${project.title}`]}
        />
      ));

  return (
    <div className="Projects" id="projects">
      <div className="outerDiv" style={style.outerDiv}>
        <div style={style.paragraphTitleDiv}>{paragrap.projects.title}</div>
        <UnderLine color={underLineColor} />
        <div style={style.paragraphBodyDiv}>
          <span>{paragrap.projects.description}</span>
        </div>

        <div className="projectsNavBar" style={style.projectsNavBar}>
          <div className="workProjectsDiv">
            <button
              id={constants.workProjectsButtonId}
              className={constants.workProjectsButtonId}
              style={{
                ...style.projectButton,
                ...(state.onClickWorkProjectsButton && {
                  boxShadow: constants.boxShadow,
                }),
              }}
              onClick={handleOnClick}
            >
              Work Projects
            </button>
          </div>
          <div className="personalProjectsDiv">
            <button
              id={constants.personalProjectsButtonId}
              className={constants.personalProjectsButtonId}
              style={{
                ...style.projectButton,
                ...(state.onClickPersonalProjectsButton && {
                  boxShadow: constants.boxShadow,
                }),
              }}
              onClick={handleOnClick}
            >
              Personal Projects
            </button>
          </div>
        </div>

        <div className="projectsDiv" style={style.projectsDiv}>
          {state.projectsToDisplay === constants.workProjectsButtonId
            ? projects
            : projects}
        </div>
        <UnderLine color={underLineColor} width={"100%"} />
      </div>
    </div>
  );
}
