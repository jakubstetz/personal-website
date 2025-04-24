import "./ProjectSection.css";
import ProjectTile from "./ProjectTile";
import projects from "../../data/projectData";

function ProjectSection() {
  return (
    <>
      <h2 className="section-header">Projects</h2>
      <div id="project-section">
        {projects.map((project, idx) => (
          <ProjectTile key={idx} {...project} />
        ))}
      </div>
    </>
  );
}

export default ProjectSection;
