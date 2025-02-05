import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/styles.css";

const contactInfo = {
  email: "aashrithsaikarise@gmail.com",
  linkedin: "https://www.linkedin.com/in/aashrith-sai-karise-270bbb199/",
  github: "https://github.com/A45hrith",
};

export default function Contact() {
  return (
    <div className="button-group">
      <a href={contactInfo.linkedin} className="button">
        <FaLinkedin /> LinkedIn
      </a>
      <a href={contactInfo.github} className="button">
        <FaGithub /> GitHub
      </a>
      <a href={`mailto:${contactInfo.email}`} className="button">
        <FaEnvelope /> Email
      </a>
    </div>
  );
}
