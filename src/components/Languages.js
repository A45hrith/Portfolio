import React from "react";
import "../styles/styles.css";

const languages = ["English", "Hindi", "Telugu", "Tamil"];

export default function Languages() {
  return (
    <div>
    <h2 className="languages-heading">Languages</h2>
    <div className="languages-container">
      <div className="languages-grid">
        {languages.map((language, index) => (
          <span key={index} className="language-badge">{language}</span>
        ))}
      </div>
    </div>
    </div>
  );
}
