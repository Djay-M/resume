import React, { useState } from "react";
import moment from "moment-timezone";
import { useCookies } from "react-cookie";
import NavBar from "../components/NavBar";
import UnderLine from "../components/UnderLine";

const _ = require("lodash");
const {
  themesConfig,
  defaultTheme,
  paragrap,
  underLineColor,
  localTimeZone,
  linkedInProfile,
} = require("../config/constants");

function Contact() {
  const [formData, setFormData] = useState({
    createdAt: moment.tz(localTimeZone).format(),
  });

  const [linkedInLink, setLinkedInLink] = useState(false);

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
    titleDiv: {
      backgroundColor: backgroundColor,
      backgroundImage: `url(${backgroundImage})`,
      height: "95vh",
      width: "100vw",
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
    form: {
      boxShadow: "rgba(100,100,111,50) 0 20px 90px 0",
      backgroundColor: "rgba(153,153,153,.9)",
      padding: "2rem 3rem",
      marginTop: "30px",
      height: "60%",
      width: "50%",
      textAlign: "right",
      borderRadius: "10px",
      margin: "1rem auto 0 auto",
    },
    formDiv: {
      margin: "0 1rem 2rem 0",
    },
    formLabel: {
      fontSize: "16px",
      letterSpacing: "1px",
      fontWeight: 700,
      marginBottom: "9px",
      display: "block",
      textAlign: "left",
    },
    formInput: {
      color: "#333",
      padding: "1rem 1rem",
      width: "100%",
      border: "1px solid #ebebeb",
      fontSize: "16px",
      borderRadius: "5px",
      fontWeight: 900,
    },
    formSubmit: {
      fontSize: "16px",
      textTransform: "uppercase",
      display: "inline-block",
      fontWeight: "700",
      borderRadius: "5px",
    },
    linkedInLink: {
      fontSize: "1.4rem",
      textDecoration: "underline",
      color: "#facf0f",
      marginLeft: "5%",
      backgroundColor: "transparent",
      border: "none",
      borderRadius: "5px",
    },
  };

  const handleFormInputChange = (event) => {
    const key = event.target.id;
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    let alertMessage = `Error while submitting the form, please reach out to me on linkedIn`;
    let showLinkedInLink = true;
    if (!formData.name || !formData.email) {
      alertMessage = `Please enter your Name, Email`;
      showLinkedInLink = false;
    }
    alert(alertMessage);
    setLinkedInLink(showLinkedInLink);
  };

  return (
    <div style={style.outerDiv}>
      <NavBar theme={theme} />
      <div style={style.titleDiv}>
        <div style={style.paragraphDiv}>
          <p style={style.paragraphTitleDiv}>{paragrap.contact.title}</p>
          <div>
            <UnderLine color={underLineColor} marginTop={"-2%"} />
          </div>
          <div>
            <span style={style.paragraphBodyDiv}>{paragrap.contact.body}</span>
          </div>
        </div>
        <div style={style.form}>
          {/* Name */}
          <div className="nameDiv" style={style.formDiv}>
            <label style={style.formLabel}>Name</label>
            <input
              style={style.formInput}
              placeholder="Enter Your Name"
              required="true"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleFormInputChange}
            ></input>
          </div>

          {/* Email */}
          <div className="emailDiv" style={style.formDiv}>
            <label style={style.formLabel}>Email</label>
            <input
              style={style.formInput}
              placeholder="Enter Your Email"
              required="true"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleFormInputChange}
            ></input>
          </div>

          {/* Message */}
          <div className="messageDiv" style={style.formDiv}>
            <label style={style.formLabel}>Message</label>
            <input
              style={{
                ...style.formInput,
                height: "100px",
              }}
              placeholder="Enter Your Message"
              required="true"
              id="message"
              value={formData.message}
              onChange={handleFormInputChange}
            ></input>
          </div>

          {/* submit button */}
          <input
            type="hidden"
            id="createdAt"
            name="createdAt"
            value={formData.createdAt}
          ></input>

          {/* submit button */}
          <div className="submitDiv" style={style.formDiv}>
            {linkedInLink && (
              <a
                href={linkedInProfile}
                target="_black"
                style={{
                  ...style.linkedInLink,
                  margin: "10%",
                }}
              >
                LinkedIn
              </a>
            )}
            <button style={style.formSubmit} onClick={handleFormSubmit}>
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
