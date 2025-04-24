function Navbar({ setView, currentView }) {
  const isCurrent = (page) =>
    currentView === page ? "nav-link current" : "nav-link";

  return (
    <div className="section-top">
      <h2 className="subtle-heading">Hugo Jakub Stetz</h2>
      <nav id="navbar">
        <span
          className={isCurrent("HomePage")}
          onClick={() => setView("HomePage")}
        >
          Home
        </span>
        <span
          className={isCurrent("AboutMe")}
          onClick={() => setView("AboutMe")}
        >
          About Me
        </span>
        <span
          className={isCurrent("Projects")}
          onClick={() => setView("Projects")}
        >
          Projects
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
