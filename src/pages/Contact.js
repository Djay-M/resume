import React, { useState } from "react";
import moment from "moment-timezone";
import { useCookies } from "react-cookie";
import UnderLine from "../components/UnderLine";
import axios from "axios";

const _ = require("lodash");
const {
  themesConfig,
  defaultTheme,
  paragrap,
  underLineColor,
  localTimeZone,
  getformLink,
} = require("../config/constants");

function Contact() {
  const [formData, setFormData] = useState({
    createdAt: moment.tz(localTimeZone).format(),
  });

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
      backgroundColor: backgroundColor,
    },
    titleDiv: {
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
    form: {
      boxShadow: "rgba(100,100,111,50) 0 10px 50px 5px",
      backgroundColor: "#557A95", //"rgba(153,153,153,.9)",
      padding: "2rem 3rem",
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
    },
    formSubmit: {
      fontSize: "16px",
      textTransform: "uppercase",
      fontWeight: "700",
      textAlign: "center",
    },
  };

  const getform = async (data) => {
    try {
      await axios.post(
        getformLink,
        { data },
        { headers: { Accept: "application/json" } }
      );
      return "success";
    } catch (error) {
      console.log("Error while calling the getform api", error);
    }
  };

  const handleFormInputChange = (event) => {
    const key = event.target.id;
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    let alertMessage = `Thank you for reaching out, will get back to as soon as possible`;
    if (!formData.name || !formData.email) {
      alertMessage = `Please enter your Name, Email`;
      alert(alertMessage);
    }
    getform(formData);
    alert(alertMessage);
  };

  return (
    <div id="contact">
      <div className="w-full h-full sm:h-screen" style={style.outerDiv}>
        <div>
          <div style={style.titleDiv}>
            <div style={style.paragraphDiv}>
              <p className="mt-10" style={style.paragraphTitleDiv}>
                {paragrap.contact.title}
              </p>
              <div>
                <UnderLine color={underLineColor} />
              </div>
              <div className="m-10 grid justify-center">
                <span style={style.paragraphBodyDiv}>
                  {paragrap.contact.body}
                </span>
                <span style={style.paragraphBodyDiv}>
                  {paragrap.contact.emailDetails}
                </span>
              </div>
            </div>
            <div className="w-1/2" style={style.form}>
              {/* Name */}
              <div className="nameDiv" style={style.formDiv}>
                <label style={style.formLabel}>Name</label>
                <input
                  style={style.formInput}
                  placeholder="Enter Your Name *Required"
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
                  placeholder="Enter Your Email *Required"
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
                  required="false"
                  id="message"
                  value={formData.message}
                  onChange={handleFormInputChange}
                ></input>
              </div>

              {/* createdAt time value */}
              <input
                type="hidden"
                id="createdAt"
                name="createdAt"
                value={formData.createdAt}
              ></input>

              {/* submit button */}

              <div className="flex justify-center items-center">
                <button
                  className="border-2 hover:bg-black px-3 py-4"
                  onClick={handleFormSubmit}
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UnderLine color={underLineColor} />
    </div>
  );
}

export default Contact;
