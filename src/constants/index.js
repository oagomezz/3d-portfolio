import {
    cherryBlossom,
    mountain,
    carpfish,
    learnacademy,
    MindAtBay,
    XplorStem,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };