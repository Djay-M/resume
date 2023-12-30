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
    boxShadow: "rgba(100,100,111,50) 3px 3px 3px 5px",
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
      backgroundColor: backgroundColor,
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    paragraphTitleDiv: {
      textAlign: "center",
      color: textColor,
      fontSize: "3rem",
      textTransform: "uppercase",
      letterSpacing: "3px",
      fontWeight: "800",
    },
    paragraphBodyDiv: {
      marginTop: "1%",
      color: textColor,
      fontSize: "20px",
      textAlign: "center",
      padding: "2px",
      whiteSpace: "pre-line",
    },
    projectsDiv: {},
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
    <div
      id="projects"
      className="w-full h-full sm:h-screen"
      style={style.outerDiv}
    >
      <div style={style.paragraphTitleDiv}>{paragrap.projects.title}</div>
      <UnderLine color={underLineColor} />
      <div style={style.paragraphBodyDiv}>
        <span>{paragrap.projects.description}</span>
      </div>

      <div className="grid sm:grid-cols-3 sm:ml-20 gap-10">
        <div className="workProjectsDiv">
          <button
            id={constants.workProjectsButtonId}
            className={constants.workProjectsButtonId}
            style={{
              ...style.projectButton,
              ...(state.onClickWorkProjectsButton && {
                boxShadow: constants.boxShadow,
                textDecorationLine: "underline",
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
                textDecorationLine: "underline",
              }),
            }}
            onClick={handleOnClick}
          >
            Personal Projects
          </button>
        </div>
      </div>

      <div className="grid overflow-scroll mt-5 sm:ml-20 gap-5">
        {state.projectsToDisplay === constants.workProjectsButtonId
          ? projects
          : projects}
      </div>
    </div>
  );
}
