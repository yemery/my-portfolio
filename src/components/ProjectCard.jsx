import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, subtitle, githubLink, toolsUsed }) => {
  return (
    <div
      className="flex bg-green-100  p-4 rounded 
    	"
    >
      <div className=" flex flex-grow flex-col gap-y-2 ">
        <p className="font-semibold">{title}</p>
        <p className="flex flex-grow">{subtitle}</p>
        <div className="flex gap-2 flex-wrap mt-7">
          {toolsUsed.map((e) => (
            <>
              <div className="text-xs p-1 bg-green-300 rounded">{e}</div>
            </>
          ))}
        </div>
      </div>
      <div className="text-right rounded">
        <Link to={githubLink}>
          {" "}
          <FaGithub />{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
