import ProjectsCard from "./ProjectsCard"

const Projects = ({text}) => {
  return (
    <div className="project-section" id="projects">
      <div className="project-heading">{text}</div>
      <hr />

      <div className="projects-container">
        <ProjectsCard/>
      </div>

    </div>
  )
}

export default Projects
