/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { defaultTheme, themesConfig } from "../config/constants";
import DownloadIcon from "@mui/icons-material/Download";
import ResumePDF from "../assets/Dhananjaya_M_CV.pdf";

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
      minHeight: "8%",
      minWidth: "100%",
      maxWidht: "100%",
      backgroundColor: themesConfig[theme].navBarBackgroundColor,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    leftDiv: {
      minWidth: "20%",
      marginRight: "10%",
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
      color: textColor,
      backgroundColor: "transparent",
      border: "0.1px solid transparent",
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
      margin: "3%",
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

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navbar-expand-lg"
      style={style.outerDiv}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ ...style.leftDiv, ...style.leftDivButtons }}
        >
          Dhananajaya M
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={style.midDiv}>
            <Nav.Link
              href="#home"
              style={{
                ...style.midButton,
                ...(state["hoveredOnHomeButton"] && {
                  color: "#7843e9",
                }),
                transform: `${
                  state["hoveredOnHomeButton"] ? "scale(1.5,1.5)" : "scale(1,1)"
                }`,
                transition: `${state["hoveredOnHomeButton"] ? "0.5s" : "0.5s"}`,
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={{
                ...style.midButton,
                ...(state["hoveredOnProjectsButton"] && {
                  color: "#7843e9",
                }),
                transform: `${
                  state["hoveredOnProjectsButton"]
                    ? "scale(1.5,1.5)"
                    : "scale(1,1)"
                }`,
                transition: `${
                  state["hoveredOnProjectsButton"] ? "0.5s" : "0.5s"
                }`,
              }}
              smooth={true}
              offset={-65}
              duration={900}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#about"
              style={{
                ...style.midButton,
                ...(state["hoveredOnAboutButton"] && {
                  color: "#7843e9",
                }),
                transform: `${
                  state["hoveredOnAboutButton"]
                    ? "scale(1.5,1.5)"
                    : "scale(1,1)"
                }`,
                transition: `${
                  state["hoveredOnAboutButton"] ? "0.5s" : "0.5s"
                }`,
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{
                ...style.midButton,
                ...(state["hoveredOnContactButton"] && {
                  color: "#7843e9",
                }),
                transform: `${
                  state["hoveredOnContactButton"]
                    ? "scale(1.5,1.5)"
                    : "scale(1,1)"
                }`,
                transition: `${
                  state["hoveredOnContactButton"] ? "0.5s" : "0.5s"
                }`,
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="">
              <a
                style={style.rightDivButtons}
                href={ResumePDF}
                download="Dhananjaya_M_CV"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="resumeLink"
                  style={{
                    ...style.rightDivButtons,
                    transform: `${
                      state.hoveredOnResumeIcon
                        ? "scale(1.5,1.5)"
                        : "scale(1,1)"
                    }`,
                    transition: `${
                      state.hoveredOnResumeIcon ? "0.5s" : "0.5s"
                    }`,
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
                    {state.hoveredOnResumeIcon && <DownloadIcon />}
                  </div>
                </button>
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
