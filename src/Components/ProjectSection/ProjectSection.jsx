import "./ProjectSection.css";
import ProjectTile from "./ProjectTile";

function ProjectSection() {
  return (
    <div className="section">
      <div className="section-header">
        <h1>Projects</h1>
        <div className="section-divider"></div>
      </div>
      <div id="project-section">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </div>
  );
}

export default ProjectSection;
