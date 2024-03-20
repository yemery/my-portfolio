import ProjectCard from "../components/ProjectCard";
import { projects, skills } from "../assets/data/sitedata";
import Badge from "../components/commons/Badge";
const Projects = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2   md:grid-flow-col-dense gap-3">
      <div className="grid grid-cols-1  md:col-span-2  md:grid-cols-3 w-full h-full gap-9 ">
        {projects.map((e) => (
          <ProjectCard key={e.id} {...e} />
        ))}
      </div>
      <div className="">
        <ul className="md:px-9 space-y-3">
          {skills.map((skill, index) => (
            <li key={index}>
              <h3 className="font-semibold">{skill.category}</h3>
              <ul className="flex flex-wrap w-full gap-2">
                {skill.skills.map((item, index) => (
                  <li
                    key={index}
                  >
                    <Badge content={item} />
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
