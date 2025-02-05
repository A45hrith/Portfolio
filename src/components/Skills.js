import React from "react";
import "../styles/styles.css";

const skills = [
  "Java", "Python", "C", "C++", "JavaScript", "HTML5", "CSS3", "ReactJS", "NodeJS", "Spring Boot", "RESTful APIs", ".Net", "MySQL", "PostgreSQL", "MongoDB", "AWS", "Google Cloud Platform", "Azure", "Git", "Jenkins", "Docker", "Kubernetes", "Bitbucket", "CI/CD pipelines", "Terraform", "Ansible", "Agile", "Test-Driven Development (TDD)", "Linux"
];

export default function Skills() {
  return (
    <div>
      <h2 className="skill-heading">Skills</h2>
      <div className="card">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
}
