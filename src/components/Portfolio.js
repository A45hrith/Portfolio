import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Languages from "./Languages";
import "../styles/styles.css";

const portfolioData = {
  name: "Aashrith Sai Karise",
  title: "Full Stack Software Engineer || DevOps & Cloud Engineer",
};

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>{portfolioData.name}</h1>
        <p className="subtitle">{portfolioData.title}</p>
      </header>

      <main>
        <Contact />
        <Skills />
        <Experience />
        <Education />
        <Languages />
      </main>
    </div>
  );
}
