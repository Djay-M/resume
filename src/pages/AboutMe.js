import React from "react";
import { useCookies } from "react-cookie";
import NavBar from "../components/NavBar";
import UnderLine from "../components/UnderLine";
const _ = require("lodash");
const {
  themesConfig,
  defaultTheme,
  paragrap,
  underLineColor,
  linkedInProfile,
} = require("../config/constants");

export default function AboutMe() {
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
    },
    aboutMeDiv: {
      height: "95vh",
      width: "100vw",
      backgroundColor: backgroundColor,
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    paragraphDiv: {
      textAlign: "center",
    },
    paragraphTitleDiv: {
      fontSize: "3rem",
      textTransform: "uppercase",
      letterSpacing: "3px",
      fontWeight: "800",
    },
    paragraphBodyDiv: {
      fontSize: "20px",
      padding: "2px",
      whiteSpace: "pre-line",
    },
    midDiv: {
      marginTop: "8%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    definitionDiv: {
      textAlign: "centre",
    },
    definitionPargraph: {
      marginLeft: "5%",
      marginRight: "10%",
      fontSize: "1.4rem",
      maxWidth: "60rem",
      lineHeight: "1.7",
      marginBottom: "1rem",
    },
    mySkillsDiv: {
      display: "flex",
      flexWrap: "wrap",
    },
    mySkills: {
      flex: "0 0 15%",
      height: "5%",
      textAlign: "center",
      padding: "1.5rem 0.5rem",
      marginBottom: "6%",
      marginRight: "3%",
      fontWeight: 6,
      backgroundColor: "rgba(153,153,153,.9)",
      borderRadius: "10px",
    },
    definitionDivButton: {
      fontSize: "1.4rem",
      textDecoration: "underline",
      color: "#facf0f",
      marginLeft: "5%",
      backgroundColor: "transparent",
      border: "none",
      borderRadius: "5px",
    },
  };

  const mySkillsArray = paragrap.aboutMe.mySkills.map((skill) => {
    return <div style={style.mySkills}>{skill.name}</div>;
  });

  return (
    <div className="outerDiv" style={style.outerDiv}>
      <NavBar theme={theme} />
      <div className="aboutMe" style={style.aboutMeDiv}>
        <div style={style.paragraphDiv}>
          <p style={style.paragraphTitleDiv}>{paragrap.aboutMe.title}</p>
          <div>
            <UnderLine color={underLineColor} marginTop={"-2%"} />
          </div>
          <div>
            <span style={style.paragraphBodyDiv}>{paragrap.aboutMe.body}</span>
          </div>
        </div>
        <div className="midDiv" style={style.midDiv}>
          <div style={style.definitionDiv}>
            <p style={style.definitionPargraph}>
              {paragrap.aboutMe.definitionPargrap1}
            </p>
            <p style={style.definitionPargraph}>
              {paragrap.aboutMe.definitionPargrap2}
            </p>
            <p style={style.definitionPargraph}>
              {paragrap.aboutMe.definitionPargrap3}
            </p>
            <a
              style={style.definitionDivButton}
              href={linkedInProfile}
              target="_black"
            >
              LinkedIn Profile
            </a>
          </div>
          <div style={style.mySkillsDiv}>{mySkillsArray}</div>
        </div>
      </div>
    </div>
  );
}
