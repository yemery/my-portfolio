const navbarItems = [
  { id: 0, to: "/", label: "Home" },
  { id: 1, to: "/About", label: "About" },
  { id: 3, to: "/Resume", label: "Resume" },
  { id: 2, to: "/Projects", label: "Projects" },
];

const projects = [
  {
    "name": "Automated Web Scraping and Data Storage System",
    "description": "Developed a system using Selenium for automated web scraping and data storage, specifically designed for gig data collection.",
    "tools": ["Python (Programming Language)", "MongoDB", "Selenium"],
    "githubLink": "https://github.com/your_username/automated-web-scraping"
  },
  {
    "name": "Consumable Stock Management System",
    "description": "Collaborated with Al Omrane to create a Consumable Stock Management System, employing tools like UML for design, Laravel 9 for backend, and Pandas for data manipulation.",
    "tools": ["Unified Modeling Language (UML)", "Python (Programming Language)", "MySQL", "Laravel 9", "Pandas (Software)", "Selenium", "Chart.js"],
    "githubLink": "https://github.com/your_username/consumable-stock-management"
  },
  {
    "name": "Automated Web Content Monitoring System with Discord Alerts",
    "description": "Built an automated system utilizing Python and Beautiful Soup for web content monitoring, with Discord integration for real-time alerts.",
    "tools": ["Python (Programming Language)", "Beautiful Soup"],
    "githubLink": "https://github.com/your_username/automated-web-content-monitoring"
  }
]


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
    company: "Al Omrane",
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

const skills=[
  {
    "category": "Frontend Development",
    "skills": ["CSS", "HTML", "React", "Tailwind"]
  },
  {
    "category": "Backend Development",
    "skills": ["Laravel"]
  },
  {
    "category": "Database Management",
    "skills": ["MongoDB", "MySQL", "Oracle", "SQL Server"]
  },
  {
    "category": "Miscellaneous",
    "skills": ["Discord", "Vite", "Git", "GitHub"]
  },
  {
    "category": "Web Scraping",
    "skills": ["Beautiful Soup", "Selenium"]
  },
  {
    "category": "Programming Languages",
    "skills": ["C++", "Javascript", "PHP", "Python"]
  }
]

export { navbarItems, projects, educationHistory,experience,skills };
