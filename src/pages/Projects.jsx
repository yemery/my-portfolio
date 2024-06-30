import { useEffect, useState } from "react";
import { skills } from "../assets/data/sitedata";
import ProjectCard from "../components/Project/ProjectCard";
import Badge from "../components/commons/Badge";
import randomColor from "randomcolor";
import useToggleMenu from "../hooks/useToggleMenu";
import Alert from "../components/commons/Alert";
import { useDispatch, useSelector } from "react-redux";
import { filterByTools } from "../features/project/projectSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Projects = () => {
  const [isMenuOpen, toggleMenu] = useToggleMenu(false);
  const [tools, setTools] = useState({});
  const clickedTool = (skill) => {
    if (skill in tools) {
      delete tools[skill];
      setTools({ ...tools });
    } else {
      setTools({
        ...tools,
        [skill]: randomColor({
          luminosity: "light",
        }),
      });
    }
  };
  const projects = useSelector((state) => state.project.projects);
  const prjFilter = useSelector((state) => state.project.selectedProject);
  const [prj, setPrj] = useState(projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterByTools(tools));
  }, [tools]);
  useEffect(() => {
    setPrj(Object.keys(tools).length === 0 ? projects : prjFilter);
  }, [prjFilter, tools]);

  const clickedAlert = (link) => {
     if (link !== "") {
      window.open(link, "_blank");
    }
    console.log("clicked", link);
  };
  // const notify = () => toast("This repository is private. Check LinkedIn for posts about private repositories!");
  return (
    <div className="relative grid  grid-cols-1 md:grid-cols-2   md:grid-flow-col-dense gap-3">
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
   
      /> */}
      <div className="order-last md:order-first grid grid-cols-1 md:col-span-2  lg:grid-cols-2 w-full h-full gap-9 ">
        {/* {projects.map((e, index) => (
          <ProjectCard key={index} {...e} handleClicked={clickedAlert} />
        ))} */}
        {prj.map((e, index) => (
          <ProjectCard key={index} {...e} handleClick={clickedAlert} />
        ))}
      </div>
      <div className="md:px-9 ">
        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <li key={index}>
              <h3 className="font-semibold">{skill.category}</h3>
              <ul className="flex flex-wrap w-full gap-2">
                {skill.skills.map((item, index) => (
                  <li key={index} onClick={(e) => clickedTool(item)}>
                    <Badge content={item} color={tools[item]} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
