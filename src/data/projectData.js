const projects = [
  {
    title: "AI Résumé Scanner",
    description:
      "Analyzes résumés against job descriptions using natural language processing. Built with Hugging Face models and FastAPI, deployed with Dockerized backend on AWS.",
    screenshotFilename: "resume-scanner.jpeg",
    repoLink: "https://github.com/jakubstetz/resume-scanner",
    demoLink: "https://resume-scanner.jakubstetz.dev",
    tech: ["FastAPI", "Python", "Hugging Face", "Docker", "AWS", "CI/CD"],
  },
  {
    title: "Portfolio Insights",
    description:
      "Stock price monitoring and alert management platform built with PostgreSQL, Go, FastAPI, and React, containerized with Docker, deployed on AWS.",
    screenshotFilename: "portfolio-insights.jpeg",
    repoLink: "https://github.com/jakubstetz/portfolio-insights",
    demoLink: "https://portfolio-insights.jakubstetz.dev",
    tech: ["FastAPI", "PostgreSQL", "Docker", "AWS", "CI/CD"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Portfolio site for showcasing projects, background, and contact information. Built with React, styled with vanilla CSS, and animated with Motion.",
    screenshotFilename: "jakubstetz-dev.jpeg",
    repoLink: "https://github.com/jakubstetz/personal-website",
    demoLink: "https://jakubstetz.dev",
    tech: ["React", "JavaScript", "CSS", "Motion", "Netlify"],
  },
];

export default projects;
