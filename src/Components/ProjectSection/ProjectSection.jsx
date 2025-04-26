import { motion } from "motion/react";
import "./ProjectSection.css";
import ProjectTile from "./ProjectTile";
import projects from "../../data/projectData";

function ProjectSection({
  projectsOrchestration: {
    singleTileFadeDuration,
    tileFadeStagger,
    totalTileExitTime,
  },
}) {
  // motion.div configs
  const fadeContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.7, // ✨ small delay after section mounts
        staggerChildren: tileFadeStagger, // ✨ more time between tiles
      },
    },
    exit: {
      transition: {
        staggerDirection: 1, // ➡️ fade out left to right
        staggerChildren: tileFadeStagger - 0.05,
      },
    },
  };

  const fadeItem = {
    initial: { opacity: 0, y: 14 }, // 🎈 slight rise
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: singleTileFadeDuration, // 🪶 gentle fade
        ease: [0.25, 0.1, 0.25, 1], // 🌊 soft landing
      },
    },
    exit: {
      opacity: 0,
      y: -16,
      transition: {
        duration: singleTileFadeDuration,
        ease: "easeIn",
      },
    },
  };

  const headerExit = {
    opacity: 0,
    transition: {
      duration: 0.7,
      delay: totalTileExitTime - singleTileFadeDuration - 0.2,
      ease: "easeIn",
    },
  };

  return (
    <>
      <motion.h2
        className="section-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={headerExit}
        transition={{
          delay: 0.65,
          duration: 1.4,
          ease: "easeOut",
        }}
      >
        Projects
      </motion.h2>

      <motion.div
        id="project-section"
        variants={fadeContainer}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={fadeItem}>
            <ProjectTile {...project} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default ProjectSection;
