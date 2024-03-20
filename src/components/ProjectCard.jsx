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
        <p className="flex flex-grow">{subtitle.substring(1, 50)}...</p>
        <div className="flex gap-2 flex-wrap ">
          {toolsUsed.map((e,index) => (
         
              <div key={index} className="text-xs p-1 bg-green-300 rounded">{e}</div>
            
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
