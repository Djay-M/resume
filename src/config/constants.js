// import darkBackGround from "../assets/images/backgroundImages/darkBackGround.jpg";
// import lightBackGround from "../assets/images/backgroundImages/lightBackGround.jpg";

export const localTimeZone = "Asia/Kolkata";
export const defaultTheme = "dark";
export const underLineColor = "#facf0f"; // #7843e9
export const linkedInProfile =
  "https://www.linkedin.com/in/dhananjaya-mulukaledu/";

export const themesConfig = {
  hoverTextColor: "blue",
  dark: {
    backgroundImage: "darkBackGround",
    backgroundColor: `#282c34`,
    navBarBackgroundColor: `rgba(153,153,153,1)`,
    textColor: "white",
  },
  light: {
    backgroundImage: "lightBackGround",
    backgroundColor: `#fff`,
    navBarBackgroundColor: `rgba(153,153,153,1)`,
    textColor: "black",
  },
};

export const paragrap = {
  home: {
    title: `Hey Hi, I'M Dhananjaya`,
    body: `A Backend focused fullstack Developer building the Services and Web Applications
    that leads to the success of the overall product`,
  },
  aboutMe: {
    title: `About Me`,
    body: `Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.`,
    definitionPargrap1: `A programmer with 4+ years of experience in designing scalable APIs, workflows and managing,
    building micro-services.I love to work with distributed systems and design, restructure them.`,
    definitionPargrap2: `I'm open to Job opportunities where I can contribute, learn and grow.
    If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.`,
    definitionPargrap3: `Check out some of my work in the Projects section.`,
    mySkills: [
      {
        name: "Node",
        experience: "4 Years",
        level: "Advanced",
      },
      {
        name: "Python",
        experience: "4 Years",
        level: "Intermediate",
      },
      {
        name: "Sails JS",
        experience: "4 Years",
        level: "Advanced",
      },
      {
        name: "React JS",
        experience: "4 Years",
        level: "Beginner",
      },
      {
        name: "AWS",
        experience: "4 Years",
        level: "Intermediate",
      },
      {
        name: "SQL",
        experience: "4 Years",
        level: "Intermediate",
      },
      {
        name: "Postgres",
        experience: "4 Years",
        level: "Intermediate",
      },
      {
        name: "Mongo",
        experience: "3 Years",
        level: "Intermediate",
      },
      {
        name: "Hasura",
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
        description: `Desgined and developed a micro-service for managing all the payment related logic and data,
        like payments(capturing payments from different sources) and payout(transferring money to various accounts)`,
        detailedDescription: [
          "Designed a micro-service for managing all the payment related logic and data,",
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
        description: `Developed a multiple APIs in different micro-services for complete a loan process.`,
        detailedDescription: ["Takeover Fund Transfers.", "Loan Renewals"],
        jobTitle: "Senior Software Engineer (SDE-2)",
        company: "Oro Corp",
        techStact: ["Node Js", "Postgres", "Hasura"],
      },
      // Rupeek
      {
        title: `Loan Renewal`,
        description: `Renewal is process closing a loan and booking a new loan with the same loan's gold but with differnt interest plan.`,
        detailedDescription: [
          "Played key role in building an aggregate service for automating the loan renewal process.",
          "Used Zeebe as a BPMN workflow automation engine to orchestrate multiple micro-services to enabling loan renewal.",
          "RESTful APIs for multiple services offering synchronous and asynchronous executions, asynchronous operations were handled using SNS and SQS.",
          "Designed, Implemented and Maintained various product features.",
          "Designed and Implemented workflow diagrams in Zeebe.",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Node Js", "Postgres", "Mongo", "SNS-SQS", "Zeebe"],
      },
      {
        title: `Notification Service`,
        description: `Desgined and developed a micro-service for sending different type of notifications across organisation and to customers`,
        detailedDescription: [
          "Collaborated on building a generic service for sending notifications over various channels,viz. sms, email, push notifications and tickets for support desk.",
          "Used AWS-SES, Kaleyra, Twilio as service providers.",
          "Notifications were published and queued using SNS and SQS respectively",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Node Js", "Mongo", "SNS-SQS", "Zeebe"],
      },
      {
        title: `LenderDataSync service`,
        description: `Contributed in Developing a micro-service which consumed MIS files from different lenders and synced it with company's loan data.`,
        detailedDescription: [
          "Collaborated in building a service, responsible for consuming the lender MIS files, syncing company's loan data with lender's loan data.",
          "Took ownership of the service, refactored existing code bases, ensured that standards and best practices are maintained.",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Python", "Airflow", "Celery", "Node Js", "SNS-SQS"],
      },
      {
        title: `Customer Info service`,
        description: `Developed a micro-service, for maintaining the mapping between company's customer data and bank customer data.`,
        detailedDescription: [
          "– Collaborated in building a service for storing the mapping of customer and lender phone data",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Node Js", "Postgres"],
      },
      {
        title: `Data Builder service`,
        description: `Developed a micro-service, for internal use, which dumpy data and replicated Prod-data to lower env DB's`,
        detailedDescription: [
          "Created new service for mocking external thrid-party services and creating test loans in lower envs",
          "This reduced testing time from above 30 minutes to under 1 minute and improved QA-Dev productivity",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Python", "Flask", "Redis"],
      },
      {
        title: `Sales Manager`,
        description: `Developed a micro-service, for internal use, which dumpy data and replicated Prod-data to lower env DB's`,
        detailedDescription: [
          "Played a key role in developing RESTful APIs for the service, for creating visits and assigning them to agents(sales managers).",
        ],
        jobTitle: "Software Engineer (SDE-1)",
        company: "Rupeek",
        techStact: ["Node Js", "Mongo"],
      },
    ],
    personalProjects: [
      {
        title: `Resume Website`,
        description: `Desgined and developed a micro-service for managing all the payment related logic and data,
        like payments(capturing payments from different sources) and payout(transferring money to various accounts)`,
        detailedDescription: [
          "Designed a micro-service for managing all the payment related logic and data,",
          "In case of payments(capturing payments from different sources)",
          "And in case of payout(transferring money to various accounts).",
          "Developed a feature for routing customer payments.",
          "Integrated RazorpayX into company's eco-system.",
        ],
        githubLink: "https://github.com/Djay-M/resume",
        websiteLink: "https://djay-m.github.io/resume/",
        techStact: ["React Js"],
      },
      {
        title: `TIC TAC TOE`,
        description: `Desgined and developed a micro-service for managing all the payment related logic and data,
        like payments(capturing payments from different sources) and payout(transferring money to various accounts)`,
        detailedDescription: [
          "Designed a micro-service for managing all the payment related logic and data,",
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
