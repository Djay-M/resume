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
      width: "100%",
      height: "20rem",
      border: "10px solid",
      borderRadius: "10px",
    },
    right: {},
  };

  const detailedDescriptionList = (detailedDescription) =>
    detailedDescription.map((point) => <li>{point}</li>);

  return (
    <div style={style.mainDiv}>
      <div style={style.leftDiv}>
        <p style={{ fontSize: "30px", textAlign: "center" }}>
          {projectDetails.title}
        </p>
      </div>
      <div style={style.right}>
        <p style={{ fontSize: "20px" }}>{projectDetails.description}</p>
        <div>{detailedDescriptionList(projectDetails.detailedDescription)}</div>
      </div>
    </div>
  );
}
