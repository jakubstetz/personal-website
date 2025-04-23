import "./ProjectSection.css";
import ProjectTile from "./ProjectTile";
import projects from "../../data/projectData";

function ProjectSection() {
  return (
    <div id="project-section">
      {projects.map((project, idx) => (
        <ProjectTile key={idx} {...project} />
      ))}
    </div>
  );
}

export default ProjectSection;
