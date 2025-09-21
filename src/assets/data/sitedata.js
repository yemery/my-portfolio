const navbarItems = [
  { id: 0, to: "/", label: "Home" },
  { id: 1, to: "/About", label: "About" },
  { id: 3, to: "/Resume", label: "Resume" },
  { id: 2, to: "/Projects", label: "Projects" },
  { id: 4, to: "/Contact", label: "Contact" },
];

const projects = [
  {
    name: "Freelancing Data Quality Dashboard",
    description: "Developed a web application for analyzing the quality of scraped data, providing insights on outdated data percentages, accuracy, and error detection in scraped formats.",
    tools: [
        "React",
        "Redux",
        "Axios",
        "Chart.js",
        "Tailwind",
        "Vite",
        "Jwt",
    ],
    githubLink: ""
},
{
    name: "Dental Clinic Management System",
    description: "A desktop application designed to streamline dental clinic operations, including patient records, appointments, consultations, invoices, and prescriptions, using Java Swing and JSON-based storage.",
    tools: [
        "Java 21+",
        "Java Swing",
        "Jackson Library",
        "IntelliJ IDEA",
        "Git",
        "GitHub"
    ],
    githubLink: "https://github.com/yemery/Dental-Clinic-Management-System"
},
{
  name: "University Library Management System",
  description: "Developed a web-based library management system with secure authentication, role-based access control, and automated notifications for an efficient book borrowing system.",
  tools: [
      "Django",
      "Django REST Framework",
      "React",
      "Redux",
      "MySQL",
      "Tailwind",
      "Jwt",
      "Python"
  ],
  githubLink: "https://github.com/yemery/university-library-management"
},
  {
    
    name: "Jewellery Shop Website",
    description: "Front-end code for a Jewellery Shop Website. ",
    tools: ["React", "Tailwind css", "Flowbite"],
    githubLink: "https://github.com/yemery/bijou-site",
  },
  {
    name: "Oracle Quiz App",
    description:
      "Contributed to building an Oracle Quiz App for the GDSC club. Responsible for data scraping from various sources .",
    tools: ["Python", "Beautiful Soup", "Selenium"],
    githubLink: "",
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
      "DeepDiff",
      "Discord",
    ],
    githubLink: "https://github.com/yemery/schedule-checker-v2",
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
    "position": "Freelance Software Engineer",
    "company": "Fiverr",
    "location": "Remote",
    "duration": "Feb 2025 - Present",
    "description": "Providing tailored web application development, web scraping, and data mining solutions to clients worldwide.",
    "tasks": [
        "Developing custom web applications using modern frameworks and technologies.",
        "Building efficient web scraping solutions to extract and process data from various sources.",
        "Designing and implementing data mining strategies to uncover valuable insights from large datasets.",
        "Automating workflows and optimizing data pipelines for accuracy and efficiency.",
        "Collaborating with clients to understand requirements and deliver scalable solutions."
    ],
    "tools": [
        "Python",
        "React",
        "Node.js",
        "Express.js",
        "BeautifulSoup",
        "Selenium",
        "JSON",
        "MongoDB",
       
    ]
}
,
  {
    position: "Freelance Web Scraper & Data Cleaner",
    company: "Self-Employed",
    location: "Berlin, Germany · Remote",
    duration: "Jul 2024 - Jan 2025",
    description: "Extracting, cleaning, and processing data from various websites to provide structured and meaningful insights.",
    tasks: [
        "Extracting data from websites using Python, BeautifulSoup, Selenium, and Scrapy.",
        "Cleaning and transforming raw data into structured, usable formats using Pandas and regex.",
        "Developing custom web scraping and data processing solutions tailored to client needs.",
        "Automating data extraction pipelines and ensuring data accuracy and consistency."
    ],
    tools: [
        "Python",
        "BeautifulSoup",
        "Selenium",
        "Scrapy",
        "Pandas",
        "Regex",
        "Requests",
        "JSON"
    ]
},
{
  position: "Software Engineering Intern",
  company: "Ministère de l'Aménagement du Territoire et d'Urbanisme",
  location: "Rabat-Salé-Kénitra, Morocco",
  duration: "Aug 2024 - Sep 2024 ",
  description: "Worked on migrating and modernizing a web application by implementing a client-server architecture and improving system security and real-time features.",
  tasks: [
      "Migrated a web application from Laravel 5 to Laravel 10, improving maintainability and performance.",
      "Implemented a client-server architecture, separating frontend and backend for better scalability.",
      "Developed RESTful API endpoints for seamless client-server communication.",
      "Integrated authentication and authorization mechanisms using Laravel Sanctum.",
      "Implemented real-time notifications using Pusher for enhanced user experience."
  ],
  tools: [
      "Laravel",
      "Laravel Sanctum",
      "MySQL",
      "React.js",
      "REST APIs",
      "Pusher"
  ]
} ,
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
    skills: ["CSS", "HTML", "React", "Tailwind CSS", "JavaScript", "Chart.js"],
  },
  {
    category: "Backend Development",
    skills: ["Laravel", "Django", "Django Rest Framework", "Node.js", "Express.js", "PHP"],
  },
  {
    category: "Database Management",
    skills: ["MongoDB", "MySQL", "Oracle", "SQL Server", "PostgreSQL"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "PHP", "Java 21+", "C++"],
  },
  {
    category: "Web Scraping & Automation",
    skills: ["Beautiful Soup", "Selenium", "Scrapy", "Pandas", "Requests"],
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "Vite", "Insomnia", "IntelliJ IDEA", "VS Code"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["MongoDB Atlas", "Laravel Sanctum", "JWT", "REST APIs"],
  },
  {
    category: "Data Processing",
    skills: ["Pandas", "JSON", "Data Mining", "Data Cleaning", "Excel"],
  },
];

// Additional professional information
const certifications = [
  {
    name: "Full-Stack Web Development Technician",
    issuer: "Institut Spécialisé de Technologie Appliquée NTIC Rabat",
    year: "2023",
    description: "Comprehensive training in modern web development technologies"
  }
];

const languages = [
  {
    language: "Arabic",
    proficiency: "Native"
  },
  {
    language: "French",
    proficiency: "Fluent"
  },
  {
    language: "English",
    proficiency: "Professional"
  }
];

const contactInfo = {
  email: "meryemajmani33@gmail.com",
  location: "Rabat, Morocco",
  availability: "Available for freelance work",
  timezone: "GMT+1 (Morocco Time)",
  linkedIn: "",
  github: "https://github.com/yemery",
  fiverr: "https://www.fiverr.com/meryemajmani"
};

const achievements = [
  {
    title: "Web Tech Lead",
    organization: "GDSC EMSI RABAT",
    period: "March 2024 - Present",
    description: "Leading web technology initiatives and mentoring fellow members"
  },
  {
    title: "Successful Freelancer",
    platform: "Multiple platforms",
    period: "2024 - Present",
    description: "Delivering high-quality web scraping and development solutions"
  },
  {
    title: "Laravel Migration Expert",
    project: "Ministry Project",
    period: "Summer 2024",
    description: "Successfully migrated Laravel 5 to Laravel 10 with modern architecture"
  }
];

const services = [
  {
    title: "Web Scraping & Data Extraction",
    description: "Custom solutions for extracting data from websites using Python, BeautifulSoup, and Selenium",
    technologies: ["Python", "BeautifulSoup", "Selenium", "Scrapy", "Pandas"]
  },
  {
    title: "Full-Stack Web Development",
    description: "Modern web applications using React, Laravel, and Django frameworks",
    technologies: ["React", "Laravel", "Django", "MySQL", "Tailwind CSS"]
  },
  {
    title: "Data Processing & Analysis",
    description: "Clean, transform, and analyze data to provide meaningful insights",
    technologies: ["Pandas", "Python", "Excel", "JSON", "Data Visualization"]
  },
  {
    title: "API Development & Integration",
    description: "RESTful APIs and third-party integrations for seamless data flow",
    technologies: ["Laravel", "Django REST", "Node.js", "JWT", "API Design"]
  }
];

const volenteering = [
  {
    position: "Web Tech Lead",
    organization: "GDSC EMSI RABAT",
    start_date: "March 2024",
    end_date: "Present",
    duration: "",
    description:
      "In my role as Web Tech Lead at GDSC EMSI Rabat, I lead initiatives related to web technologies, organizing workshops, and guiding fellow members in learning and applying web development skills.",
  },
  {
    position: "Member",
    organization: "GDSC EMSI RABAT",
    start_date: "November 2023",
    end_date: "March 2024",
    duration: "5 months",
    description:
      "As a member of GDSC (Google Developer Student Clubs) at EMSI Rabat, I actively participate in various activities and events aimed at promoting technology and innovation within the community.",
  },
];
const timelineData = [
  {
    time: "Summer 2021",
    title: "Introduction to Programming",
    body: "Started learning programming after obtaining my high school diploma in science and mathematics. Explored algorithms and Python through online resources and projects.",
  },
  {
    time: "Oct 2021 - July 2023",
    title: "Full-Stack Web Development at ISTA NTIC Rabat",
    body: "Studied as a specialized technician in full-stack web development. Built web applications, automation scripts, and data extraction tools.",
  },
  {
    time: "Jan 2023 - July 2023",
    title: "Internship at Al Omrane Rabat",
    body: "Developed a material management web application, improved user roles, stock management, and data visualization. Worked with Pandas and Selenium for data automation.",
  },
  {
    time: "July 2023",
    title: "Graduated as a Full-Stack Web Development Technician",
    body: "Completed studies at Institut Spécialisé de Technologie Appliquée NTIC Rabat and continued learning advanced development techniques.",
  },
  {
    time: "Oct 2023 - Present",
    title: "Software Engineering at École Marocaine des Sciences de l'Ingénieur",
    body: "Pursuing a degree in software engineering to deepen expertise in backend development, data processing, and automation.",
  },
  {
    time: "2024 - Present",
    title: "Freelancing as a Web Scraper & Data Cleaner",
    body: "Working on web scraping, data extraction, and automation projects. Building real-time data dashboards and scalable backend solutions.",
  },
  {
    time: "Summer 2024",
    title: "Software Engineering Internship at the Ministry of Urban Planning",
    body: "Migrated a Laravel 5 application to Laravel 10, implemented RESTful APIs, and integrated real-time notifications using Pusher.",
  },
];

// aboutData.js
const aboutData = {
  education: [
    {
      period: "October 2023 - Present",
      institution: "École Marocaine des Sciences de l'Ingénieur",
      specialization: "Software Engineering",
      location: "Rabat, Morocco",
      status: "Currently pursuing degree",
      achievements: [
        "Advanced software engineering principles",
        "Modern development methodologies",
        "System architecture and design"
      ]
    },
    {
      period: "October 2021 - July 2023",
      institution: "Institut Spécialisé de Technologie Appliquée NTIC Rabat",
      specialization: "Full-Stack Web Development Technician",
      location: "Rabat, Morocco",
      status: "Graduated with distinction",
      achievements: [
        "Web application development",
        "Database design and management",
        "Automation scripts and tools",
        "Data extraction and processing"
      ]
    },
    {
      period: "October 2020 - July 2021",
      institution: "Lycée Abidar El Ghifari",
      specialization: "Baccalaureate in Mathematical Sciences A",
      location: "Morocco",
      status: "Graduated",
      achievements: [
        "Strong mathematical foundation",
        "Analytical thinking skills",
        "Problem-solving abilities"
      ]
    }
  ],
  internships: [
    {
      period: "August 2024 - September 2024",
      company: "Ministère de l'Aménagement du Territoire et d'Urbanisme",
      role: "Software Engineering Intern",
      location: "Rabat-Salé-Kénitra, Morocco",
      project: "Web Application Migration and Modernization",
      responsibilities: [
        "Migrated Laravel 5 application to Laravel 10",
        "Implemented client-server architecture separation",
        "Developed RESTful API endpoints",
        "Integrated Laravel Sanctum for authentication",
        "Implemented real-time notifications with Pusher"
      ],
      technologies: ["Laravel", "Laravel Sanctum", "MySQL", "React.js", "REST APIs", "Pusher"]
    },
    {
      period: "March 2023 - April 2023",
      company: "Al Omrane Rabat-Salé-Kenitra",
      role: "Web App Developer Intern",
      location: "Rabat, Morocco",
      project: "Consumable Stock Management System",
      responsibilities: [
        "System documentation and UML design",
        "User role management implementation",
        "Data visualization with Chart.js",
        "Automated data processing with Pandas and Selenium",
        "Database optimization and management"
      ],
      technologies: ["Laravel 9", "MySQL", "Chart.js", "Python", "Pandas", "Selenium", "UML"]
    }
  ],
  freelance: {
    period: "February 2025 - Present",
    platforms: ["Fiverr", "Independent clients"],
    services: [
      "Custom web application development",
      "Web scraping and data extraction",
      "Data mining and analysis",
      "Workflow automation",
      "Database design and optimization"
    ],
    clientSatisfaction: "100% positive feedback",
    projectsCompleted: "20+"
  },
  contact: {
    email: "meryemajmani33@gmail.com",
    location: "Rabat, Morocco",
    availability: "Available for freelance projects",
    preferredContact: "Email"
  }
};

export default aboutData;
export {
  navbarItems,
  projects,
  educationHistory,
  experience,
  skills,
  volenteering,
  timelineData,
  aboutData,
  certifications,
  languages,
  contactInfo,
  achievements,
  services
};
