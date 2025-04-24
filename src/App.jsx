import { motion, AnimatePresence } from "motion/react";
import HomePage from "./Components/HomePage/HomePage";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import Navbar from "./Components/NavBar";

import { useState } from "react";

function App() {
  const [view, setView] = useState("HomePage");

  const fadeDuration = 0.7; // In seconds

  return (
    <>
      {view !== "HomePage" && (
        <AnimatePresence>
          <motion.div
            key="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration }}
          >
            <Navbar setView={setView} currentView={view} />
          </motion.div>
        </AnimatePresence>
      )}
      {view === "HomePage" && (
        <AnimatePresence>
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration }}
          >
            <HomePage setView={setView} />
          </motion.div>
        </AnimatePresence>
      )}
      {view === "AboutMe" && (
        <AnimatePresence>
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration }}
          >
            <AboutSection setView={setView} />
          </motion.div>
        </AnimatePresence>
      )}
      {view === "Projects" && (
        <AnimatePresence>
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration }}
          >
            <ProjectSection setView={setView} />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
