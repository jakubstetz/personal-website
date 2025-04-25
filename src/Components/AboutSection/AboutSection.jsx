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
        <p>Polish immigrant.</p>
        <p>US Navy veteran.</p>
        <p>Former monk.</p>
        <p>Transformational facilitator.</p>
        <p>Software engineer.</p>
        <p>These are the identities that form the person I am today.</p>
        <div className="text-divider"></div>
        <p>I like to understand things — deeply.</p>
        <p>How they work. Why they matter. What they could become.</p>
        <p>
          My curiosity has led me down many paths: aerospace engineering, the
          nuclear Navy, a monastery, transformational seminars... In each
          context, I’ve immersed myself in the underlying principles — the
          structures, rhythms, and relationships that govern how things function
          and how people evolve.
        </p>
        <p>
          My passion lies at the intersection where vision meets leverage —
          where people with insight and ideas are equipped to bring them to life
          at scale. To that end, I pride myself in combining clear, grounded
          communication with serious engineering skill — a synergy that lets
          ideas travel farther, faster, and with more impact.
        </p>
        <p>
          As a developer, I work primarily with Python, FastAPI, PostgreSQL,
          Docker, and AWS — building backend systems with an eye toward data,
          scalability, and machine learning applications. I use React to extend
          the precision and clarity of my backend systems into the user
          interface — crafting thoughtful, elegant frontends like the one you're
          navigating now.
        </p>
        <p>
          I'm always interested to meet new people who have vision, depth, and
          nuance. Feel free to connect.
        </p>
      </div>
    </>
  );
}

export default AboutSection;
