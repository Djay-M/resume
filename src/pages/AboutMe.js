import React from "react";
import { useCookies } from "react-cookie";
import UnderLine from "../components/UnderLine";
const _ = require("lodash");
const {
  themesConfig,
  defaultTheme,
  paragrap,
  underLineColor,
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
      color: textColor,
      backgroundColor: backgroundColor,
    },
    aboutMeDiv: {
      backgroundImage: `url(${backgroundImage})`,
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
      fontSize: "1.4rem",
      lineHeight: "1.7",
    },
    mySkillsDiv: {
      display: "flex",
      flexWrap: "wrap",
    },
    mySkills: {
      title: {
        textAlign: "center",
        fontSize: "1.5rem",
        textTransform: "uppercase",
        fontWeight: "500",
      },
      body: {
        flex: "0 0 14%",
        textAlign: "center",
        padding: "1.5rem 0.5rem",
        marginBottom: "6%",
        marginRight: "6%",
        fontWeight: 6,
        borderRadius: "10px",
      },
    },
  };

  let hoveredInitials = {};
  const mySkillsArray = paragrap.aboutMe.mySkills.map((skill) => {
    hoveredInitials[`hoveredOn${skill.name}`] = false;
    return (
      <div
        className="bg-transparent hover:scale-125 duration-500"
        style={{
          ...style.mySkills.body,
        }}
      >
        {skill.imageLink && <img src={skill.imageLink} alt=""></img>}
        {skill.name}
      </div>
    );
  });

  // eslint-disable-next-line eqeqeq
  return (
    <div>
      <div
        id="about"
        className="w-full h-full md:h-screen"
        style={style.outerDiv}
      >
        <div className="aboutMe" style={style.aboutMeDiv}>
          <div style={style.paragraphDiv}>
            <p style={style.paragraphTitleDiv}>{paragrap.aboutMe.title}</p>
            <div>
              <UnderLine color={underLineColor} />
            </div>
            <div className="mt-5">
              <span style={style.paragraphBodyDiv}>
                {paragrap.aboutMe.body}
              </span>
            </div>
          </div>
          <div className="w-full grid sm:grid-cols-2 gap-8 px-4 items-center">
            <div
              className="sm:text-left mt-10 ml-20"
              style={style.definitionDiv}
            >
              <p style={style.definitionPargraph}>
                {paragrap.aboutMe.definitionPargrap1}
              </p>
              <p style={style.definitionPargraph}>
                {paragrap.aboutMe.definitionPargrap2}
              </p>
              <p style={style.definitionPargraph}>
                {paragrap.aboutMe.definitionPargrap3}
              </p>
            </div>
            <div className="mt-10">
              <p className="m-10" style={style.mySkills.title}>
                Tech Stacks
              </p>
              <div style={style.mySkillsDiv}>{mySkillsArray}</div>
            </div>
          </div>
        </div>
      </div>
      <UnderLine color={underLineColor} width={"100%"} />
    </div>
  );
}
