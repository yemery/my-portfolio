import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Badge from "../commons/Badge";
import { useSelector } from "react-redux";
import { Tooltip } from "flowbite-react";

const ProjectCard = (props) => {
  const { handleClick } = props;
  const toolchoosed = useSelector((state) => state.project.tools);

  return (
    <div
      className="flex bg-green-100  p-4 rounded dark:bg-surface-200 gap-3
    	"
    >
      <div className=" flex flex-grow flex-col gap-y-2 ">
        <p className="font-semibold">{props.name}</p>
        <p className="flex flex-grow ">
          <span className="">{props.description}</span>
        </p>
        <div className="flex gap-1 flex-wrap ">
          {props.tools.map((e, index) => (
            <Badge key={index} content={e} color={toolchoosed[e]} />
          ))}
        </div>
      </div>
      <div className="text-right rounded ">
      
        <Tooltip
          content={
            props.githubLink === ""
              ? "This repository is private"
              : "go to github repo"
          }
          trigger={props.githubLink === "" ? "hover" : "hidden"}
          // changing color of tooltip
          className="bg-black"
          arrow={false}
        >
          <button
            onClick={(e) => handleClick(props.githubLink)}
            className={`${
              props.githubLink === "" && "cursor-not-allowed text-gray-400"
            }  `}
          >
            <FaGithub />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProjectCard;
