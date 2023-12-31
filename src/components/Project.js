import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

export default function Project(props) {
  const {
    projectDetails,
    backgroundColor,
    textColor,
    onClickFunction,
    popOverState,
  } = props;

  const style = {
    leftDiv: {
      borderRadius: "10px",
      backgroundColor: backgroundColor || "#29648A", //"rgba(153,153,153,1)",
      color: textColor,
    },
  };

  const detailedDescriptionList = (detailedDescription, techStack) => {
    const bulletsPoints = detailedDescription.map((point) => (
      <li id={`popOverState-${projectDetails.title}`}>{point}</li>
    ));
    return (
      <div id={`popOverState-${projectDetails.title}`}>
        <p>{projectDetails.description}</p>
        {bulletsPoints}
        <p className="text-left text-wrap">
          {`Tech Stack Used: `}
          <i>
            <b>{projectDetails.techStack.toString()}</b>
          </i>
        </p>
      </div>
    );
  };

  return (
    <button
      className="w-full flex justify-between items-center hover:scale-95 duration-500"
      style={style.leftDiv}
      id={`popOverState-${projectDetails.title}`}
      onClick={onClickFunction}
    >
      <div>
        <p className="sm:w-10 text-center font-semibold text-lg ml-5 m-3">
          {projectDetails.title}
        </p>
      </div>
      {projectDetails.company && (
        <div>
          <p className="text-center text-wrap">{`Company: ${projectDetails.company}`}</p>
        </div>
      )}
      {projectDetails.jobTitle && (
        <div>
          <p className="text-left text-wrap ml-3">{`Title: ${projectDetails.jobTitle}`}</p>
        </div>
      )}
      {projectDetails.githubLink && (
        <div>
          <a
            className="text-left text-wrap ml-3"
            href={projectDetails.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      )}
      {projectDetails.websiteLink && (
        <div>
          <a
            className="text-left text-wrap ml-3"
            href={projectDetails.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Site Link
          </a>
        </div>
      )}
      {onClickFunction && (
        <div
          id={`popOverState-${projectDetails.title}`}
          className="hidden sm:block text-left text-wrap ml-3"
        >
          <button
            id={`popOverState-${projectDetails.title}`}
            onClick={onClickFunction}
          >
            Detailed Description
            <ExpandMoreIcon />
          </button>
          <Collapse in={popOverState} timeout="auto" unmountOnExit>
            <div
              id={`popOverState-${projectDetails.title}`}
              open={popOverState}
              onClose={onClickFunction}
              anchorEl={"anchorEl"}
            >
              <div id={`popOverState-${projectDetails.title}`} sx={{ p: 4 }}>
                {detailedDescriptionList(
                  projectDetails.detailedDescription,
                  projectDetails.techStack
                )}
              </div>
            </div>
          </Collapse>
        </div>
      )}
    </button>
  );
}
