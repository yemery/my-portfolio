import Here from "../components/commons/Here";

const About = () => {
  return (
    <div className="flex flex-col gap-y-3 items-center justify-center h-full w-full text-justify">
      <span className="max-w-[900px]">
        My journey into{" "}
        <span className="font-semibold">software development</span> began in the
        summer of 2021 after obtaining{" "}
        <span className="font-semibold">
        my high school diploma in science and mathematics
                </span>
        . A close mentor introduced me to the world of{" "}
        <span className="font-semibold">programming</span>. I embarked on a self-guided exploration of algorithms and Python programming, using online resources and hands-on projects to solidify my skills.
      </span>

      {/* <span className="max-w-[900px]">
        I embarked on a{" "}
        <span className="font-semibold">self-guided learning journey</span>,
        using online resources and YouTube tutorials to dive into{" "}
        <span className="font-semibold">Python</span> and{" "}
        <span className="font-semibold">algorithmic problem-solving</span>. I
        quickly transitioned from theory to practice, developing small projects
        to strengthen my skills.
      </span> */}

      <span className="max-w-[900px]">
        To further advance, I enrolled at{" "}
        <span className="font-semibold">
          Institut Spécialisé de Technologie Appliquée NTIC Rabat
        </span>{" "}
        in October 2021, specializing as a{" "}
        <span className="font-semibold">
          full-stack web development technician
        </span>
        . Over two years, I built{" "}
        <span className="font-semibold">
          web applications, automation scripts
        </span>
        , and <span className="font-semibold">data extraction tools</span>.
        During my final year, I interned at{" "}
        <span className="font-semibold">Al Omrane Rabat</span>.
      </span>

      <span className="max-w-[900px]">
        As an <span className="font-semibold">intern web developer</span>, I led
        the development of a{" "}
        <span className="font-semibold">
          material management web application
        </span>
        . My responsibilities included improving{" "}
        <span className="font-semibold">user roles, stock management</span>, and{" "}
        <span className="font-semibold">data visualization</span>. I also worked
        extensively on{" "}
        <span className="font-semibold">data cleaning and automation</span>{" "}
        using <span className="font-semibold">Pandas and Selenium</span>,
        ensuring seamless database management.
      </span>

      <span className="max-w-[900px]">
        After graduating in <span className="font-semibold">July 2023</span>, I
        continued my education at{" "}
        <span className="font-semibold">
          École Marocaine des Sciences de l&apos;Ingénieur in Rabat
        </span>
        , pursuing a degree in{" "}
        <span className="font-semibold">software engineering</span>.
        {/*   */}
        Alongside my studies, I expanded my expertise into{" "}
        <span className="font-semibold">web scraping, data extraction</span>,
        and <span className="font-semibold">automation</span> as a{" "}
        <span className="font-semibold">
          freelance Web Scraper & Data Cleaner . {" "}
        </span>

        I help businesses extract, clean, and structure data, ensuring high-quality insights and efficient processing.
        .
      </span>

      <span className="max-w-[900px]">
        My projects involve{" "}
        <span className="font-semibold">
          building web apps for data quality testing, real-time data dashboards,
          and scalable backend solutions
        </span>
        . In <span className="font-semibold">Summer 2024</span>, I completed a
        <span className="font-semibold"> Software Engineering Internship</span>
        at the <span className="font-semibold">Ministry of Urban Planning</span>
        , migrating a{" "}
        <span className="font-semibold">Laravel 5 application</span> to{" "}
        <span className="font-semibold">Laravel 10</span>, implementing{" "}
        <span className="font-semibold">RESTful APIs</span>, and integrating{" "}
        <span className="font-semibold">real-time notifications</span> with
        Pusher.
      </span>

      <span className="max-w-[900px]">
        I am passionate about{" "}
        <span className="font-semibold">
          data-driven applications, automation, and backend development
        </span>
        . If you have an exciting opportunity that aligns with my skills and
        enthusiasm, I&apos;m eager to collaborate. Feel free to reach out{" "}
        <Here email="mailto:meryemajmani33@gmail.com" />.
      </span>
    </div>
  );
};

export default About;
