import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Badge from "./commons/Badge";

const ProjectCard = (props) => {
  return (
    <div
      className="flex bg-green-100  p-4 rounded 
    	"
    >
      <div className=" flex flex-grow flex-col gap-y-2 ">
        <p className="font-semibold">{props.name}</p>
        <p className="flex flex-grow line-clamp-3">{props.description}</p>
        <div className="flex gap-1 flex-wrap ">
          {props.tools.map((e, index) => (
            <Badge key={index} content={e} />
          ))}
        </div>
      </div>
      <div className="text-right rounded">
        <Link to={props.githubLink}>
          {" "}
          <FaGithub />{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
