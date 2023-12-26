import React, { useState } from "react";
import { useCookies } from "react-cookie";
import UnderLine from "../components/UnderLine";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
  const [state, setState] = useState({});
  //eslint-disable-next-line
  const [cookies, setCookie] = useCookies([theme]);
  if (cookies.theme && _.includes(Object.keys(themesConfig), cookies.theme)) {
    theme = cookies.theme;
  }

  const { hoverTextColor } = themesConfig;
  const { backgroundImage, backgroundColor, textColor } = themesConfig[theme];

  const style = {
    outerDiv: {
      display: "flex",
      flexDirection: "column",
      color: textColor,
      backgroundColor: backgroundColor,
    },
    aboutMeDiv: {
      height: "95vh",
      width: "100vw",
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    paragraphDiv: {
      textAlign: "center",
      marginTop: "4%",
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
      title: {
        textAlign: "center",
        fontSize: "1.5rem",
        textTransform: "uppercase",
        fontWeight: "500",
      },
      body: {
        flex: "0 0 15%",
        height: "5%",
        textAlign: "center",
        padding: "1.5rem 0.5rem",
        marginBottom: "6%",
        marginRight: "6%",
        fontWeight: 6,
        backgroundColor: "rgba(153,153,153,.9)",
        borderRadius: "10px",
      },
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

  let hoveredInitials = {};
  const mySkillsArray = paragrap.aboutMe.mySkills.map((skill) => {
    hoveredInitials[`hoveredOn${skill.name}`] = false;
    return (
      <div
        style={{
          ...style.mySkills.body,
          transform: "scale(1,1)",
          transition: "0.5s",
          ...(state?.[`hoveredOn${skill.name}`] && {
            color: hoverTextColor,
            transform: "scale(1.2,1.2)",
            transition: "0.5s",
          }),
        }}
        onMouseOut={() =>
          setState({ ...state, [`hoveredOn${skill.name}`]: false })
        }
        onMouseOver={() =>
          setState({ ...state, [`hoveredOn${skill.name}`]: true })
        }
      >
        {skill.name}
      </div>
    );
  });

  // eslint-disable-next-line eqeqeq
  state == {} && setState({ ...state, ...hoveredInitials });
  return (
    <div className="about" id="about">
      <div className="outerDiv" style={style.outerDiv}>
        <div className="aboutMe" style={style.aboutMeDiv}>
          <div style={style.paragraphDiv}>
            <p style={style.paragraphTitleDiv}>{paragrap.aboutMe.title}</p>
            <div>
              <UnderLine color={underLineColor} />
            </div>
            <div>
              <span style={style.paragraphBodyDiv}>
                {paragrap.aboutMe.body}
              </span>
            </div>
          </div>
          <Container style={style.midDiv}>
            <div className="midDiv">
              <Row>
                <Col>
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
                </Col>
                <Col>
                  <div>
                    <p style={style.mySkills.title}> Tech Stacks</p>
                    <div style={style.mySkillsDiv}>{mySkillsArray}</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
