import { useEffect, useState } from "react";
import { projects, skills } from "../assets/data/sitedata";
import ProjectCard from "../components/Project/ProjectCard";
import Badge from "../components/commons/Badge";
import randomColor from "randomcolor";
import useToggleMenu from "../hooks/useToggleMenu";
import Alert from "../components/commons/Alert";
import { useDispatch, useSelector } from "react-redux";
import { filterByTools } from "../features/project/projectSlice";

const Projects = () => {
  const [isMenuOpen, toggleMenu] = useToggleMenu(false);
  const [skillsKeys, setSkills] = useState({});
  const handleClicked = (skill) => {
    if (skill in skillsKeys) {
      delete skillsKeys[skill];
      setSkills({ ...skillsKeys });
    } else {
      setSkills({ ...skillsKeys, [skill]: randomColor() });
    }
  };
  const prj = useSelector((state) => state.projects)
  const prjFilter = useSelector((state) => state.project.selectedProject)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log(skillsKeys, typeof skillsKeys);
    // console.log(projects.map((e)=>e.tools.includes('React')))
    // console.log(projects.filter((e)=>e.tools.includes('React')))
    // console.log(projects.filter((e)=>Object.keys(skillsKeys).some(v => e.tools.includes(v))))
    // console.log(dispatch(filterByTools(skillsKeys)))
   console.log(skillsKeys)
    dispatch(filterByTools(skillsKeys || ""))
  //  console.log(prjFilter)
  }, [skillsKeys]);

  const handleClick = (link) => {
    if (link === "") {
      toggleMenu();
    } else {
      window.open(link, "_blank");
    }
    console.log("clicked", link);
  };
  return (
    <div className="relative grid  grid-cols-1 md:grid-cols-2   md:grid-flow-col-dense gap-3">
      {/* {isMenuOpen && <Alert message="This repository is private check my linkedin ull find post there" />} */}

      <div className="order-last md:order-first grid grid-cols-1 md:col-span-2  lg:grid-cols-2 w-full h-full gap-9 ">
        {projects.map((e, index) => (
          <ProjectCard key={index} {...e} handleClick={handleClick} />
        ))}
      </div>
      <div className="md:px-9 ">
        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <li key={index}>
              <h3 className="font-semibold">{skill.category}</h3>
              <ul className="flex flex-wrap w-full gap-2">
                {skill.skills.map((item, index) => (
                  <li key={index} onClick={(e) => handleClicked(item)}>
                    <Badge content={item} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {prjFilter.map((e, index) => (
          <p>{e.name}</p>
        ))}
      </div>

    </div>
  );
};

export default Projects;
