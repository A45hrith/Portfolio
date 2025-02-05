import React from "react";
import "../styles/styles.css";

const educationData = [
  {
    institution: "Royal Holloway University of London",
    degree: "BSc Computer Science (AI)",
    duration: "Sept 2019 - Jul 2022",
    description: [
      "Learnt Object Oriented Programming from scratch to be able to solve algorithms in Java and Python.",
      "Gained knowledge on Software Design, Software Development, IT Project Management alongside security aspects such as Security management, Digital Forensics, Cyber Security, Information Security, and Internet services.",
      "Focused on problem solving by working on modules like Algorithms & Complexity, Multi-Dimensional Data Processing alongside the Artificial Intelligence modules such as Machine Learning, and Natural Language Processing."
    ]
  }
];

export default function Education() {
  return (
    <div className="education-section">
      <h2 className="education-heading">Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="education-container">
          <h3 className="degree">{edu.degree}</h3>
          <p className="institution-details">{edu.institution} | {edu.duration}</p>
          <ul className="description-list">
            {edu.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
