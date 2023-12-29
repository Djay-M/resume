// import darkBackGround from "../assets/images/backgroundImages/darkBackGround.jpg";
// import lightBackGround from "../assets/images/backgroundImages/lightBackGround.jpg";

import { icons } from "../assets/icons";

export const localTimeZone = "Asia/Kolkata";
export const defaultTheme = "dark";
export const underLineColor = "#facf0f"; // #7843e9
export const linkedInProfile =
  "https://www.linkedin.com/in/dhananjaya-mulukaledu/";
export const githubProfile = "https://github.com/Djay-M";

export const themesConfig = {
  hoverTextColor: "blue",
  dark: {
    backgroundImage: "darkBackGround",
    backgroundColor: `#282c34`,
    navBarBackgroundColor: `#0a192f`,
    textColor: "white",
  },
  light: {
    backgroundImage: "lightBackGround",
    backgroundColor: `#fff`,
    navBarBackgroundColor: `#0a192f`,
    textColor: "black",
  },
};

export const paragrap = {
  home: {
    title: `Hey Hi, I'M Dhananjaya`,
    jobTitle: `A Backend focused fullstack Developer.`,
    body: `Specializing in developing backend services and Web Applications
    that leads to the success of the overall product`,
  },
  aboutMe: {
    title: `About Me`,
    body: `Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.`,
    definitionPargrap1: `A programmer with 5 years of experience in designing scalable APIs, workflows and managing,
    building micro-services.I love to work with distributed systems and design, restructure them.`,
    definitionPargrap2: `I'm open to Job opportunities where I can contribute, learn and grow.
    If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.`,
    definitionPargrap3: `Check out some of my work in the Projects section.`,
    mySkills: [
      {
        name: "Node",
        imageLink: icons.Node,
        experience: "4 Years",
        level: "Advanced",
      },
      {
        name: "Python",
        imageLink: icons.Python,
        experience: "4 Years",
        level: "Intermediate",
      },
      {
        name: "Sails JS",
        imageLink: icons.Sails,
        experience: "4 Years",
        level: "Advanced",
      },
      {
        name: "React JS",
        imageLink: icons.React,
        experience: "4 Years",
        level: "Beginner",
      },
      {
        name: "AWS",
        imageLink: icons.AWS,
        experience: "4 Years",
        level: "Intermediate",
      },
      {
        name: "SQL",
        imageLink: icons.SQL,
        experience: "4 Years",
        level: "Intermediate",
      },
      {
        name: "Postgres",
        imageLink: icons.Postgres,
        experience: "4 Years",
        level: "Intermediate",
      },
      {
        name: "Mongo",
        imageLink: icons.Mongo,
        experience: "3 Years",
        level: "Intermediate",
      },
      {
        name: "Hasura",
        imageLink: icons.Hasura,
        experience: "1 Year",
        level: "Intermediate",
      },
    ],
  },
  projects: {
    title: `Projects`,
    description: `Here you will find some of the work experience projects and personal projects that
    I worked and created.`,
    workProjects: [
      // oro-corp
      {
        title: `Payment service`,
        description: `A micro-service for managing all the payment-related logic and data,
        like payments (capturing payments from different sources) and payouts (transferring money from and to various accounts).`,
        detailedDescription: [
          "Designed a micro-service for managing all the payment related Operations,",
          "In case of payments(capturing payments from different sources)",
          "And in case of payout(transferring money to various accounts).",
          "Developed a feature for routing customer payments.",
          "Integrated RazorpayX into company's eco-system.",
        ],
        jobTitle: "Senior Software Engineer (SDE-2)",
        company: "Oro Corp",
        techStact: ["Node Js", "Postgres"],
      },
      {
        title: `Created Workflows`,
        description: `Developed multiple APIs in different microservices to complete a loan process.`,
        detailedDescription: [
          "APIs for capturing fund transfers in the case of takeover loan flow",
          "APIS for completing loan renewals",
        ],
        jobTitle: "Senior Software Engineer (SDE-2)",
        company: "Oro Corp",
        techStact: ["Node Js", "Postgres", "Hasura"],
      },
      // Rupeek
      {
        title: `Loan Renewal`,
        description: `Renewal is the process of closing a loan and booking a new loan with the same loan's gold but with a different interest plan.`,
        detailedDescription: [
          "Played a key role in building an aggregate service for automating the loan renewal process.",
          "Used Zeebe as a BPMN workflow automation engine to orchestrate multiple micro-services to enable loan renewal.",
          "RESTful APIs for multiple services offering synchronous and asynchronous executions; asynchronous operations were handled using SNS and SQS.",
          "Designed, implemented, and maintained various product features.",
          "Designed and Implemented Workflow Diagrams in Zeebe",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Node Js", "Postgres", "Mongo", "SNS-SQS", "Zeebe"],
      },
      {
        title: `Notification Service`,
        description: `A micro-service for sending different types of notifications across the organization and to customers.`,
        detailedDescription: [
          "I collaborated on building a generic service for sending notifications over various channels,viz. SMS, email, push notifications, and tickets for the support desk.",
          "I used AWS-SES, Kaleyra, and Twilio as service providers.",
          "Notifications were published and queued using SNS and SQS, respectively",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Node Js", "Mongo", "SNS-SQS", "Zeebe"],
      },
      {
        title: `LenderDataSync service`,
        description: `A micro-service that consumed MIS files from different lenders and synced them with the company's loan data.`,
        detailedDescription: [
          "Collaborated in building a service, responsible for consuming the lender's MIS files, syncing the company's loan data with the lender's loan data.",
          "Took ownership of the service, refactored existing code, and ensured that standards and best practices were maintained.",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Python", "Airflow", "Celery", "Node Js", "SNS-SQS"],
      },
      {
        title: `Customer Info service`,
        description: `A micro-service for maintaining the mapping between the company's customer data and bank customer data.`,
        detailedDescription: [
          "Collaborated in building a service for storing the mapping of customer and lender phone data",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Node Js", "Postgres"],
      },
      {
        title: `Data Builder service`,
        description: `A micro-service, for internal use, that dumps data and replicates production data to lower-env DBs`,
        detailedDescription: [
          "Created a new service for mocking external third-party services and creating test loans in lower environments.",
          "This reduced testing time from above 30 minutes to under 1 minute and improved QA and Dev productivity",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Python", "Flask", "Redis"],
      },
      {
        title: `Sales Manager`,
        description: `A micro-service for managing sale, release, and loan manager data`,
        detailedDescription: [
          "Played a key role in developing RESTful APIs for the service, for creating visits and assigning them to agents (sales managers).",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Node Js", "Mongo"],
      },
    ],
    personalProjects: [
      {
        title: `Resume Website`,
        description: `A website or a portfolio that resembles my resume`,
        detailedDescription: [
          "I designed this website to practice my front-end development skills",
        ],
        githubLink: "https://github.com/Djay-M/resume",
        websiteLink: "https://djay-m.github.io/resume/",
        techStact: ["React Js"],
      },
      {
        title: `TIC TAC TOE`,
        description: `A website for board games, like TIC-TAC-TOE`,
        detailedDescription: [
          "I designed this website to practice my front-end development skills (fun project)",
        ],
        githubLink: "https://github.com/Djay-M/games/tree/main/tic_tac_toe",
        websiteLink: "https://github.com/Djay-M/games/tree/main/tic_tac_toe",
        techStact: ["React Js"],
      },
    ],
  },
  contact: {
    title: `Contact `,
    body: `Feel free to contact me by submitting the form below and I will get back to you as soon as possible.`,
  },
};
