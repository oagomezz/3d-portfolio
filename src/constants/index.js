import {
    cherryBlossom,
    mountain,
    carpfish,
    learnacademy,
    MindAtBay,
    XplorStem,
    javascript,
    ruby,
    rubyonrails,
    bootstrap,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    activexcel,
    budgetapp,
    treklog,
    barkbuddies,
    ecommercestore,
    friendlist,
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: carpfish,
    },
    {
      title: "Backend Developer",
      icon: cherryBlossom,
    },
    {  title: "Full Stack Developer",
      icon: mountain,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Ruby on Rails",
      icon: rubyonrails,
    },
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company_name: "LEARN ACADEMY",
      icon: learnacademy,
      iconBg: "#313133",
      date: "November 2022 - April 2023",
      points: [
        "Completed 480 hours of direct coding experience in an intensive remote development bootcamp.",
        "Developed a series of monolithic and decoupled applications that utilize a front-end built with React.js and a back-end powered by Ruby on Rails with integrated databases.",
        "Strong understanding of ActiveRecord's associations to establish and navigate relationships between database tables.",
        "Actively participated in Agile ceremonies, such as daily stand-ups, sprint planning, and retrospectives, to foster continuous improvement and deliver customer value iteratively.",
      ],
    },
    {
      title: "Web Developer (Intern)",
      company_name: "XplorStem Academy",
      icon: XplorStem,
      iconBg: "white",
      date: "March 2023 - April 2023",
      points: [
        "Successfully filtered and formatted over 30 data tables, enabling dynamic data exchange for web application users..",
        "Employed effective communication strategies to collaboratively develop applications in pair and mob programming settings.",
        "Improved testing efficiency and effectiveness by implementing mock functions and fixtures for dependencies and API calls.",
        "Collaborated with development team to establish testing best practices and incorporate testing into the development process.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Mind At Bay",
      icon: MindAtBay,
      iconBg: "white",
      date: "February 2023 - May 2023",
      points: [
        "Developing a progressive web app (PWA) and native mobile apps with FlutterFlow.",
        "Communicating with stakeholders when there are roadblocks or limitations with design, legal team, or development.",
        "Making informed decisions about the tech stack according to stakeholder and user need.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "TrekLog",
      description:
        "I was the project lead on a team of 4 members, This monolithic app has full CRUD capabilities and utilizes RESTful routing. We used React front-end with Rails backend and a PostgreSQL database. We acheived 70% test coverage on Jest and RSpec.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ruby on rails",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: treklog,
      source_code_link: "https://github.com/",
    },
    {
      name: "ActivExcel",
      description:
        "Ruby on Rails Application created on the MVC architecture of Rails. ActivExcel is the ultimate workout logging app that revolutionizes your fitness journey. With comprehensive tracking and analysis capabilities, you can easily monitor and visualize your progress over time. Download FitTrack now and unlock your true fitness potential!",
      tags: [
        {
          name: "ruby on rails",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: activexcel,
      source_code_link: "https://github.com/",
    },
    {
      name: "Budget App",
      description:
        "This React app was created to better understand React hooks such as useContext, useEffect and useReducer along with React Formatter.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: budgetapp,
      source_code_link: "https://github.com/",
    },
    {
      name: "BarkBuddies",
      description:
        "This decoupled app was created with a React front end and a Rails backend. Devise was implemented for user authentication.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "ruby on rails",
          color: "green-text-gradient",
        },
        {
          name: "ruby",
          color: "pink-text-gradient",
        },
      ],
      image: barkbuddies,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ecommerce Store",
      description:
        "React app created utilizing styles and components such as Material-UI, Material-UI Grid, Material-UI Button, developed without the use of CSS files and relied on styled-components library to style the components.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "materialui",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: ecommercestore,
      source_code_link: "https://github.com/",
    },
    {
      name: "Friend's List",
      description:
        "Ruby on Rails Application created to better understand the use of bootstrap on the MVC architecture of Rails and uploading DB's to Render to support a live application. Application supports full CRUD functionality, along with filters between different accounts.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: friendlist,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };