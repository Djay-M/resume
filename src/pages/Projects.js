import React from "react";
import { useCookies } from "react-cookie";
import NavBar from "../components/NavBar";
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
  const { backgroundImage, backgroundColor, textColor } = themesConfig[theme];

  const [cookies, setCookie] = useCookies([theme]);
  if (cookies.theme && _.includes(Object.keys(themesConfig), cookies.theme)) {
    theme = cookies.theme;
  }

  const style = {
    outerDiv: {
      position: "fixed",
      display: "flex",
      flexDirection: "column",
    },
    projectsDiv: {
      backgroundColor: backgroundColor,
      backgroundImage: `url(${backgroundImage})`,
      minHeight: "100vh",
      minWidth: "100vw",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    paragraphDiv: {
      textAlign: "center",
      marginTop: "6%",
      color: textColor,
    },
    paragraphTitleDiv: {
      fontSize: "3rem",
      textTransform: "uppercase",
      letterSpacing: "3px",
      textAlign: "center",
      fontWeight: "800",
    },
    paragraphBodyDiv: {
      color: textColor,
      fontSize: "20px",
      textAlign: "center",
      padding: "2px",
      whiteSpace: "pre-line",
    },
  };

  return (
    <div className="outerDiv" style={style.outerDiv}>
      <div className="projetcsDiv" style={style.projectsDiv}>
        <NavBar theme={theme} />
        <div style={{ ...style.paragraphDiv, ...style.paragraphTitleDiv }}>
          {paragrap.projects.title}
        </div>
        <UnderLine color={underLineColor} />
        <div style={style.paragraphBodyDiv}>
          <span>{paragrap.projects.description}</span>
        </div>
      </div>
    </div>
  );
}
