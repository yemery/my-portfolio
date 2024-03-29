const navbarItems = [
  { id: 0, to: "/", label: "Home" },
  { id: 1, to: "/About", label: "About" },
  { id: 3, to: "/Resume", label: "Resume" },
  { id: 2, to: "/Projects", label: "Projects" },
  { id: 4, to: "/Contact", label: "Contact" },
];

const projects = [
  {
    name: "Jewellery Shop Website",
    description:
      "Front-end code for a Jewellery Shop Website. ",
    tools: ["React", "Tailwind CSS", "Flowbite"],
    githubLink: "https://github.com/yemery/bijou-site",
  },
  {
    name: "Oracle Quiz App",
    description:
      "Contributed to building an Oracle Quiz App for the GDSC club. Responsible for data scraping from various sources .",
    tools: ["Python", "Beautiful Soup", "Selenium"],
    githubLink: "https://github.com/gdsc-club/oracle-quiz-app",
  },
 
  {
    name: "Fiverr Gig Scraper",
    description:
      "Python script designed to scrape data from Fiverr based on a given keyword search.",
    tools: ["Python", "Selenium", "Pymongo", "MongoDB"],
    githubLink: "",
  },
  {
    name: "Schedule Checker",
    description:
      "Automates schedule checking for NTIC Rabat, ensuring timely updates and alerts to students.",
    tools: [
      "Python",
      "MongoDB",
      "Selenium",
      "Requests",
      "Beautiful Soup",
      "DeepDiff"
    ],
    githubLink: "https://github.com/yemery/schedule-checker-v2"
},
  {
    name: "Consumable Stock Management System",
    description:
      "Developed a stock management system with UML design, Laravel backend, and Pandas for data handling.",
    tools: [
      "UML",
      "Python",
      "MySQL",
      "Laravel",
      "Pandas",
      "Selenium",
      "Chart.js",
      "Tailwind",
    ],
    githubLink: "",
  },
 

];

const educationHistory = [
  {
    school: "Ecole Marocaine des Sciences de l'ingénieur",
    degree: "software engineering, computer science and engineering",
    dates: "Oct 2023 - Ongoing",
  },
  {
    school: "Specialized Institute Of Applied Technology NTIC",
    degree: "Specialized technician, Web full stack development",
    dates: "Oct 2021 - Jul 2023",
  },
  {
    school: "Lycée Abidar El Ghifari",
    degree: "Baccalaureate in Mathematical Sciences A",
    dates: "Oct 2020 - Jul 2021",
  },
];
const experience = [
  {
    position: "Web App Developer Intern",
    company: "Al Omrane Rabat-Salé-Kenitra",
    location: "Rabat, Rabat-Salé-Kenitra, Morocco",
    duration: "Mar 2023 - Apr 2023",
    description:
      "Worked as a Web App Developer Intern on Consumable Stock Management Software.",
    tasks: [
      "Documentation and Design",
      "Functionalities of Roles - Admin Role: User management, order handling, data visualization, purchase request validation, data export, and notification management.",
      "Functionalities of Roles - Agency Director and Normal Employee: User authentication, profile management, orders validation, products monitoring, and notification management.",
      "Data Editing and Automation: Modify datasets using pandas scripts, utilize Selenium for data registration and database population.",
    ],
    tools: [
      "Pandas",
      "Laravel Jetstream",
      "Chart.js",
      "Laravel 9",
      "Python",
      "MySQL",
      "Unified Modeling Language",
    ],
  },
];

const skills = [
  {
    category: "Frontend Development",
    skills: ["CSS", "HTML", "React", "Tailwind"],
  },
  {
    category: "Backend Development",
    skills: ["Laravel"],
  },
  {
    category: "Database Management",
    skills: ["MongoDB", "MySQL", "Oracle", "SQL Server"],
  },
  {
    category: "Miscellaneous",
    skills: ["Discord", "Vite", "Git", "GitHub"],
  },
  {
    category: "Web Scraping",
    skills: ["Beautiful Soup", "Selenium"],
  },
  {
    category: "Programming Languages",
    skills: ["C++", "Javascript", "PHP", "Python"],
  },
];

export { navbarItems, projects, educationHistory, experience, skills };
