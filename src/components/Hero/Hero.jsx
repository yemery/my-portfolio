import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex flex-col gap-y-6 items-center justify-center h-full text-center px-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-5xl font-bold leading-tight">
          Hey, I&apos;m{" "}
          <span className="text-green-700 dark:text-primary-500 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Meryem Ajmani
          </span>
        </h1>
        
        <div className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300 min-h-[3rem] flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000,
              'Full-Stack Developer',
              2000,
              'Web Scraping Specialist',
              2000,
              'Data Processing Expert',
              2000,
              'Freelance Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-green-600 dark:text-green-400"
          />
        </div>
        
        <p className="max-w-[700px] text-base md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          I&apos;m a passionate{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">Software Engineering</span>{" "}
          student at École Marocaine des Sciences de l&apos;Ingénieur, specializing in{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">web scraping</span>,{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">full-stack development</span>, and{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">data processing</span>.
          I bring ideas to life through code and help businesses extract valuable insights from data.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
        <a
          href="meryem-ajmani-resume.pdf"
          className="group px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 w-[220px] text-white font-semibold leading-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg dark:from-green-500 dark:to-green-400 dark:hover:from-green-600 dark:hover:to-green-500"
          download={`meryem-ajmani-resume.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="flex items-center justify-center gap-2">
           Download Resume
          </span>
        </a>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `group px-6 py-4 w-[220px] font-semibold leading-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isActive
                ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                : "bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-600 border border-gray-200 hover:border-green-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-green-400 dark:border-gray-700"
            }`
          }
        >
          <span className="flex items-center justify-center gap-2">
             View Projects
          </span>
        </NavLink>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for freelance work
        </div>
        <div className="flex items-center gap-2">
          <span>📍</span>
          Based in Morocco
        </div>
        <div className="flex items-center gap-2">
          <span>💻</span>
          Remote-friendly
        </div>
      </div>
    </div>
  );
};

export default Hero;
