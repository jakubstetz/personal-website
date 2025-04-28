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
  const projectsOrchestration = {
    singleTileFadeDuration: 0.8,
    tileFadeStagger: 0.25, // Stagger time between starting tile animations
    tileCount: projects.length,
  };
  projectsOrchestration.totalTileExitTime =
    (projectsOrchestration.tileCount - 1) *
      projectsOrchestration.tileFadeStagger +
    projectsOrchestration.singleTileFadeDuration;

  const aboutExitTime = 0.25;

  const navbarExitDelay =
    view === "Projects"
      ? projectsOrchestration.totalTileExitTime -
        projectsOrchestration.singleTileFadeDuration
      : aboutExitTime;

  return (
    <AnimatePresence mode="wait">
      {view !== "HomePage" && (
        <motion.div
          key="navbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.0,
            delay: 0.3, // ✅ starts first
            ease: [0.45, 0, 0.55, 1],
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
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
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5, // ✨ faster exit
              ease: "easeOut", // ✨ swift ease
            },
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <HomePage setView={setView} />
        </motion.div>
      )}
      {view === "AboutMe" && (
        <motion.div key="about">
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
