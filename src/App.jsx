import HomePage from "./Components/HomePage/HomePage";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import Navbar from "./Components/NavBar";

import { useState } from "react";

function App() {
  const [view, setView] = useState("HomePage");

  return (
    <>
      {view !== "HomePage" && <Navbar setView={setView} currentView={view} />}
      {view === "HomePage" && <HomePage setView={setView} />}
      {view === "AboutMe" && <AboutSection setView={setView} />}
      {view === "Projects" && <ProjectSection setView={setView} />}
    </>
  );
}

export default App;
