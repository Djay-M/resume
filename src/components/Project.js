import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function Project(props) {
  const {
    projectDetails,
    backgroundColor,
    textColor,
    onClickFunction,
    popOverState,
  } = props;

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
      backgroundColor: backgroundColor || "rgba(153,153,153,1)",
      color: textColor,
    },
    rightDiv: {
      width: "70%",
      height: "12rem",
    },
  };

  const detailedDescriptionList = (detailedDescription) => {
    const bulletsPoints = detailedDescription.map((point) => (
      <li id={`popOverState-${projectDetails.title}`}>{point}</li>
    ));
    return (
      <div id={`popOverState-${projectDetails.title}`}>
        <p>{projectDetails.description}</p>
        {bulletsPoints}{" "}
        <button
          id={`popOverState-${projectDetails.title}`}
          onClick={onClickFunction}
        >
          Close
        </button>
      </div>
    );
  };

  return (
    <div id={projectDetails.title} style={style.leftDiv}>
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
      {projectDetails.githubLink && (
        <a
          href={projectDetails.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "15px", margin: "50px" }}
        >
          Github
        </a>
      )}
      {projectDetails.websiteLink && (
        <a
          href={projectDetails.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "15px", margin: "50px" }}
        >
          Site Link
        </a>
      )}
      {onClickFunction && (
        <div id={`popOverState-${projectDetails.title}`}>
          <button
            id={`popOverState-${projectDetails.title}`}
            aria-describedby="simple-popover"
            variant="contained"
            onClick={onClickFunction}
          >
            Detailed Description
          </button>
          <Popover
            id={`popOverState-${projectDetails.title}`}
            open={popOverState}
            anchorEl={"anchorEl"}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography
              id={`popOverState-${projectDetails.title}`}
              sx={{ p: 4 }}
            >
              {detailedDescriptionList(projectDetails.detailedDescription)}
            </Typography>
          </Popover>
        </div>
      )}
    </div>
  );
}
