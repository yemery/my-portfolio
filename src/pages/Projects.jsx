import ProjectCard from "../components/ProjectCard"
import { projects } from "../assets/data/sitedata"
const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full gap-4 ">
    {projects.map((e) => (
      <ProjectCard key={e.id} {...e} />
    ))}
  </div>
  
  )
}

export default Projects