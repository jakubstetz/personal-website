import { motion, AnimatePresence } from "motion/react";
import HomePage from "./Components/HomePage/HomePage";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import Navbar from "./Components/NavBar";
import projects from "./data/projectData";

import { useState, useEffect } from "react";

function App() {
  const [view, setView] = useState("HomePage");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  // Configs used for motion orchestration
  const fadeDuration = 0.7; // In seconds

  const projectsOrchestration = {
    singleTileFadeDuration: 0.9,
    tileFadeStagger: 0.3, // Stagger time between starting tile animations
    tileCount: projects.length,
  };
  projectsOrchestration.totalTileExitTime =
    (projectsOrchestration.tileCount - 1) *
      projectsOrchestration.tileFadeStagger +
    projectsOrchestration.singleTileFadeDuration;

  const aboutExitTime = 0.3; // About section's exit duration (match AboutSection.jsx)

  const navbarExitDelay =
    view === "Projects"
      ? projectsOrchestration.totalTileExitTime -
        projectsOrchestration.singleTileFadeDuration +
        0.4
      : aboutExitTime; // About section + small grace period

  return (
    <AnimatePresence mode="wait">
      {view !== "HomePage" && (
        <motion.div
          key="navbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.0,
            delay: 0.1, // ✅ starts first
            ease: "easeOut",
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
              delay: navbarExitDelay, // ⏳ exits after tiles and header
              ease: "easeIn",
            },
          }}
        >
          <Navbar setView={setView} currentView={view} />
        </motion.div>
      )}
      {view === "HomePage" && ready && (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration }}
        >
          <HomePage setView={setView} />
        </motion.div>
      )}
      {view === "AboutMe" && (
        <motion.div
          key="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration }}
        >
          <AboutSection />
        </motion.div>
      )}
      {view === "Projects" && (
        <motion.div key="projects">
          <ProjectSection projectsOrchestration={projectsOrchestration} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
