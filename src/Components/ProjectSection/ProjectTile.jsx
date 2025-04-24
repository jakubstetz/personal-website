import "./ProjectSection.css";
import Button from "../Button";

function ProjectTile({
  title,
  description,
  screenshotFilename,
  repoLink,
  demoLink,
}) {
  const imageSource = new URL(
    `../../assets/images/project-screenshots/${screenshotFilename}`,
    import.meta.url,
  ).href;

  return (
    <div className="project-tile">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageSource} />
      <div className="button-row">
        <Button
          text={"GitHub"}
          clickHandler={() => (window.location.href = repoLink)}
        />
        <Button
          text={"Demo"}
          clickHandler={() => (window.location.href = demoLink)}
        />
      </div>
    </div>
  );
}

export default ProjectTile;
