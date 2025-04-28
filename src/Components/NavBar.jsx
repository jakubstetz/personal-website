import { motion } from "motion/react";

function Navbar({ setView, currentView }) {
  const isCurrent = (page) =>
    currentView === page ? "nav-link current" : "nav-link";

  return (
    <div className="section-top">
      <h2 className="subtle-heading">Hugo Jakub Stetz</h2>
      <nav id="navbar">
        <motion.span
          layout
          className={isCurrent("HomePage")}
          onClick={() => setView("HomePage")}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Home
        </motion.span>
        <motion.span
          layout
          className={isCurrent("AboutMe")}
          onClick={() => setView("AboutMe")}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          About Me
        </motion.span>
        <motion.span
          layout
          className={isCurrent("Projects")}
          onClick={() => setView("Projects")}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Projects
        </motion.span>
      </nav>
    </div>
  );
}

export default Navbar;
