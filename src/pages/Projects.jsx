import { useEffect, useState } from "react";
import { skills, projects } from "../assets/data/sitedata";
import ProjectCard from "../components/Project/ProjectCard";
import Badge from "../components/commons/Badge";
import randomColor from "randomcolor";
import useToggleMenu from "../hooks/useToggleMenu";
import Alert from "../components/commons/Alert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Projects = () => {
  const [isMenuOpen, toggleMenu] = useToggleMenu(false);
  const [tools, setTools] = useState({});
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const clickedTool = (skill) => {
    const lowerCaseSkill = skill.toLowerCase();
    if (lowerCaseSkill in tools) {
      delete tools[lowerCaseSkill];
      setTools({ ...tools });
    } else {
      setTools({
        ...tools,
        [lowerCaseSkill]: randomColor({
          luminosity: "light",
        }),
      });
    }
  };

  // Filter projects based on selected tools
  useEffect(() => {
    if (Object.keys(tools).length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        Object.keys(tools).some((selectedTool) =>
          project.tools.map(tool => tool.toLowerCase()).includes(selectedTool.toLowerCase())
        )
      );
      setFilteredProjects(filtered);
    }
  }, [tools]);

  const clearFilters = () => {
    setTools({});
  };

  const clickedAlert = (link) => {
    if (link !== "") {
      window.open(link, "_blank");
    }
    console.log("clicked", link);
  };

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 md:grid-flow-col-dense gap-3">
      <div className="order-last md:order-first grid grid-cols-1 md:col-span-2 lg:grid-cols-2 w-full h-full gap-9">
        {filteredProjects.map((e, index) => (
          <ProjectCard key={index} {...e} handleClick={clickedAlert} toolColors={tools} />
        ))}
        {filteredProjects.length === 0 && Object.keys(tools).length > 0 && (
          <div className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
            No projects found with the selected skills. Try different filters.
          </div>
        )}
      </div>
      <div className="md:px-9 space-y-5">
        <div className="mb-4">
         
       
          {Object.keys(tools).length > 0 && (
            <div className="flex items-center justify-between mb-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <span className="text-sm text-blue-700 dark:text-blue-300 flex flex-row gap-4">
               <span>
                 {Object.keys(tools).length} filter{Object.keys(tools).length !== 1 ? 's' : ''} active
               </span>
                <span>
                  {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} shown
                </span>
              </span>
              <button
                onClick={clearFilters}
                className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
              >
                Clear All
              </button>
            </div>
          )}

            
        </div>
        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <li key={index}>
              <h3 className="font-semibold">{skill.category}</h3>
              <ul className="flex flex-wrap w-full gap-2">
                {skill.skills.map((item, index) => (
                  <li key={index} onClick={(e) => clickedTool(item)}>
                    <Badge content={item} color={tools[item.toLowerCase()]} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

         <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Click on skills below to filter projects. Selected skills will be highlighted.
          </p>
      </div>
    </div>
  );
};

export default Projects;