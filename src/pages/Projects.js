import React from "react";
import { useCookies } from "react-cookie";
import Project from "../components/Project";
import UnderLine from "../components/UnderLine";
import {
  defaultTheme,
  paragrap,
  themesConfig,
  underLineColor,
} from "../config/constants";
const _ = require("lodash");

export default function Projects() {
  let theme = defaultTheme;

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
    projectsDiv: {
      margin: "1.5rem 3.5rem 1rem auto",
      width: "90%",
      height: "70%",
      overflow: "auto",
    },
  };

  const projects = paragrap.projects.workExperience.map((project) => (
    <Project projectDetails={project} />
  ));

  return (
    <div className="Projects" id="projects">
      <div className="outerDiv" style={style.outerDiv}>
        <div style={style.paragraphTitleDiv}>{paragrap.projects.title}</div>
        <UnderLine color={underLineColor} />
        <div style={style.paragraphBodyDiv}>
          <span>{paragrap.projects.description}</span>
        </div>

        {/* Projects */}
        <div style={style.projectsDiv}>{projects}</div>
        <UnderLine color={underLineColor} width={"100%"} />
      </div>
    </div>
  );
}
