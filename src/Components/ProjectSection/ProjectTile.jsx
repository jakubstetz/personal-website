import "./ProjectSection.css";

function ProjectTile() {
  return (
    <div className="project-tile">
      <h2>Project Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl
        ipsum, faucibus at imperdiet lobortis.
      </p>
      <img />
      <div className="project-tile-buttons">
        <button>GitHub</button>
        <button>Demo</button>
      </div>
    </div>
  );
}

export default ProjectTile;
