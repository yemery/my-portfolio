import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex flex-col gap-y-3 items-center justify-center h-full text-center ">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-xl md:text-4xl font-bold ">
          hey i&apos;m <span className="text-green-700">meryem </span>ajmani{" "}
        </h1>
        <p className="max-w-[600px] text-base md:text-xl">
          I&apos;m a third-year{" "}
          <span className="font-semibold">computer science</span> engineering
          student with experience in{" "}
          <span className="font-semibold">web scraping</span> and{" "}
          <span className="font-semibold">web development</span>, and I&apos;m
          interested in <br />
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "data analytics.",
              1000,
              "microservices architecture.",
              1000,
              "machine learning.",
              1000,
            ]}
            speed={50}
            className="text-green-700 font-semibold"
            repeat={Infinity}
          />
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <a
          href="/assets/files/Meryem_Ajmani.pdf"
          className="px-4 py-4 bg-green-700 w-[200px] text-white leading-5 rounded hover:bg-green-500 hover:text-white dark:hover:bg-black	"
          download={`meryem-ajmani-resume.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>

        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active"
              : "px-4 py-4 bg-green-100 w-[200px] hover:bg-green-500 border-b-green-100 text-black leading-5 rounded  hover:text-white dark:hover:bg-black	"
          }
        >
          see all projects
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
