import "./ProjectSection.css";
import Button from "../Button";

function ProjectTile({ repo_link, demo_link }) {
  return (
    <div className="project-tile">
      <h2>Project Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl
        ipsum, faucibus at imperdiet lobortis.
      </p>
      <img />
      <div className="button-row">
        <Button
          text={"GitHub"}
          clickHandler={() => (window.location.href = repo_link)}
        />
        <Button
          text={"Demo"}
          clickHandler={() => (window.location.href = demo_link)}
        />
      </div>
    </div>
  );
}

export default ProjectTile;
