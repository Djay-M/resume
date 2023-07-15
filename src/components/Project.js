import React from "react";

export default function Project(props) {
  const { projectDetails } = props;

  const style = {
    mainDiv: {
      margin: "1rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: "3rem",
    },
    leftDiv: {
      width: "30%",
      height: "12rem",
      border: "2px solid",
      borderRadius: "10px",
    },
    rightDiv: {
      width: "70%",
      height: "12rem",
    },
  };

  const detailedDescriptionList = (detailedDescription) =>
    detailedDescription.map((point) => <li>{point}</li>);

  return (
    <div style={style.mainDiv}>
      <div style={style.leftDiv}>
        <p style={{ fontSize: "30px", textAlign: "center" }}>
          {projectDetails.title}
        </p>
        {projectDetails.techStact && (
          <p style={{ fontSize: "15px", margin: "3px" }}>
            {`Tech Stack Used: `}
            <i>
              <b>{projectDetails.techStact.toString()}</b>
            </i>
          </p>
        )}
        {projectDetails.company && (
          <p style={{ fontSize: "15px", margin: "3px" }}>
            {`Company: ${projectDetails.company}`}
          </p>
        )}
        {projectDetails.jobTitle && (
          <p style={{ fontSize: "15px", margin: "3px" }}>
            {`Title: ${projectDetails.jobTitle}`}
          </p>
        )}
      </div>
      <div style={style.rightDiv}>
        <p style={{ fontSize: "20px" }}>{projectDetails.description}</p>
        <div>{detailedDescriptionList(projectDetails.detailedDescription)}</div>
      </div>
    </div>
  );
}
