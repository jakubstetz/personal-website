import Button from "./Button";

function ButtonContainer({ setView }) {
  return (
    <div id="button-container">
      <div className="button-row">
        <Button text={"About Me"} clickHandler={() => setView("AboutMe")} />
        <Button text={"Projects"} clickHandler={() => setView("Projects")} />
      </div>
      <div className="button-row">
        <Button
          text={"GitHub"}
          clickHandler={() =>
            (window.location.href = "https://github.com/jakubstetz")
          }
        />
        <Button
          text={"LinkedIn"}
          clickHandler={() =>
            (window.location.href = "https://www.linkedin.com/in/jakub-stetz/")
          }
        />
      </div>
    </div>
  );
}

export default ButtonContainer;
