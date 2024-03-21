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
        <p className="flex flex-grow ">
          <span className="line-clamp-2">{props.description}</span>
        </p>
        <div className="flex gap-1 flex-wrap ">
          {props.tools.map((e, index) => (
            <Badge key={index} content={e} />
          ))}
        </div>
      </div>
      <div className="text-right rounded">
        <button
          onClick={() => {
            window.open(props.githubLink, "_blank");
          }}
          disabled={props.githubLink === ""}
        >
          <FaGithub />{" "}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
