const projects = [
  {
    title: "AI Resume Scanner",
    description:
      "Uses NLP to analyze job descriptions and resumes for alignment. Built with Hugging Face models and FastAPI.",
    screenshot: "resume-scanner.png",
    repo_link: "https://github.com/jakubstetz/resume-scanner",
    demo_link: "https://resume-scanner.jakubstetz.dev",
    tech: ["FastAPI", "Python", "Hugging Face", "Docker", "AWS", "CI/CD"],
  },
  {
    title: "Portfolio Insights",
    description:
      "Monitors stock prices and alerts users via thresholds and triggers. Designed with a focus on backend deployment and automation.",
    screenshot: "portfolio-insights.png",
    repo_link: "https://github.com/jakubstetz/portfolio-insights",
    demo_link: "https://portfolioinsights.jakubstetz.dev",
    tech: ["FastAPI", "PostgreSQL", "Docker", "AWS", "CI/CD"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A minimal, animated single-page portfolio built with React and custom CSS to showcase projects and career background.",
    screenshot: "jakubstetz-dev.png",
    repo_link: "https://github.com/jakubstetz/personal-website",
    demo_link: "https://jakubstetz.dev",
    tech: ["React", "JavaScript", "CSS", "Framer Motion", "Netlify"],
  },
];

export default projects;
