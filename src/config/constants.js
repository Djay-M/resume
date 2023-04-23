import darkBackGround from "../assets/images/backgroundImages/darkBackGround.jpg";
import lightBackGround from "../assets/images/backgroundImages/lightBackGround.jpg";

export const defaultTheme = "dark";
export const underLineColor = "#facf0f";

export const themesConfig = {
  dark: {
    backgroundImage: darkBackGround,
    backgroundColor: `#282c34`,
    textColor: "white",
  },
  light: {
    backgroundImage: lightBackGround,
    backgroundColor: `white`,
    textColor: "black",
  },
};

export const paragrap = {
  homePage: {
    title: `Hey Hi, I'M Dhananjaya`,
    body: `A Backend focused fullstack Developer building the Services and Web Applications
    that leads to the success of the overall product`,
  },
  projects: {
    title: `Projects`,
    description: `Here you will find some of the work experience projects and personal projects that
    I worked and created.`,
    workExperience: [
      {
        title: `OMS Service`,
        description: `Here you will find some of the work experience projects and personal projects that
    I worked and created.`,
        detailedDescription: `Here you will find some of the work experience projects and personal projects that
    I worked and created.`,
      },
      {
        title: `OMS Service`,
        description: `Here you will find some of the work experience projects and personal projects that
    I worked and created.`,
        detailedDescription: `Here you will find some of the work experience projects and personal projects that
    I worked and created.`,
      },
    ],
  },
};
