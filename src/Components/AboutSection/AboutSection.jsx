import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedin,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import "./AboutSection.css";
import portraitLarge from "../../assets/images/portrait-large.jpeg";

function AboutSection() {
  const aboutContainer = {
    initial: { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.4, // 🌱 slight delay before child elements
        staggerChildren: 0.3, // 🌿 stagger child fade-ins
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1], // 🪶 smooth
      },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <motion.h2
        className="section-header"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 1.4, // 🌿 slow, luxurious entrance
            ease: "easeOut",
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.7, // 🚀 quicker, more efficient exit
            ease: "easeIn",
          },
        }}
      >
        About Me
      </motion.h2>

      <motion.div
        id="about-section"
        variants={aboutContainer}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div id="about-block-1">
          <div className="about-text">
            <p>Polish immigrant.</p>
            <p>US Navy veteran.</p>
            <p>Former monk.</p>
            <p>Transformational facilitator.</p>
            <p>Software engineer.</p>
            <div className="paragraph-empty-line"></div>
            <p id="identities-conclusion">
              These are the identities that form the person I am today.
            </p>
          </div>
          <div className="about-image">
            <img src={portraitLarge} alt="Jakub portrait" />
          </div>
        </div>

        <div className="text-divider"></div>

        <div id="about-block-2">
          <div className="about-text">
            <p>I like to understand things — deeply.</p>
            <p>How they work. Why they matter. What they could become.</p>
            <p>
              My curiosity has led me down many paths: aerospace engineering,
              the nuclear Navy, a monastery, transformational seminars... In
              each context, I’ve immersed myself in the underlying principles —
              the structures, rhythms, and relationships that govern how things
              function and how people evolve.
            </p>
            <p>
              My passion lies at the intersection where vision meets leverage —
              where people with insight and ideas are equipped to bring them to
              life at scale. To that end, I pride myself in combining clear,
              grounded communication with serious engineering skill — a synergy
              that lets ideas travel farther, faster, and with more impact.
            </p>
            <p>
              As a developer, I work primarily with Python, FastAPI, PostgreSQL,
              Docker, and AWS — building backend systems with an eye toward
              data, scalability, and machine learning applications. I use React
              to extend the precision and clarity of my backend systems into the
              user interface — crafting thoughtful, elegant frontends like the
              one you're navigating now.
            </p>
            <p>
              I'm always interested to meet new people who have vision, depth,
              and nuance. Feel free to connect.
            </p>

            <div id="contact-links">
              <a className="contact-link" href="mailto:jakub@jakubstetz.dev">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <p>jakub@jakubstetz.dev</p>
              </a>
              <a
                className="contact-link"
                href="https://linkedin.com/in/jakub-stetz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                <p>linkedin.com/in/jakub-stetz</p>
              </a>
              <a
                className="contact-link"
                href="https://github.com/jakubstetz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                <p>github.com/jakubstetz</p>
              </a>
              <a
                className="contact-link"
                href="https://dev.to/jakubstetz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDev} className="contact-icon" />
                <p>dev.to/jakubstetz</p>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AboutSection;
