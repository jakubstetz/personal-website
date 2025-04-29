import "./ProjectSection.css";
import Button from "../Button";

function ProjectTile({
  title,
  description,
  screenshotFilename,
  repoLink,
  demoLink,
}) {
  const imageSource = `/images/project-screenshots/${screenshotFilename}`;

  return (
    <div className="project-tile">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageSource} />
      <div className="button-row">
        <Button text={"GitHub"} href={repoLink} />
        <Button text={"Demo"} href={demoLink} />
      </div>
    </div>
  );
}

export default ProjectTile;
