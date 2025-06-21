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
        <div className="button-container">
          {/* Only display GitHub button if a repo link is provided */}
          {!!repoLink && <Button text={"GitHub"} href={repoLink} />}
        </div>
        <div className="button-container">
          {/* Only display Demo button if a demo link is provided */}
          {!!demoLink && <Button text={"Demo"} href={demoLink} />}
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
