import { motion } from "motion/react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <>
      <motion.h2
        className="section-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1.4,
          ease: "easeOut",
        }}
      >
        About Me
      </motion.h2>
      <div id="about-section">
        <p>About me...</p>
      </div>
    </>
  );
}

export default AboutSection;
