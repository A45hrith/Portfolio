import React from "react";
import "../styles/styles.css";

const experienceData = [
  {
    company: "Deltaclass Technology Solutions Limited",
    role: "Software Engineer II",
    duration: "Oct 2024 - Present",
    description: [
      "Developed and optimized backend services using Java and Spring Boot, ensuring high scalability and performance.",
      "Designed and implemented RESTful APIs to streamline system integrations and enhance functionality.",
      "Led efforts in CI/CD automation, reducing deployment time by 40% using Jenkins and Docker.",
      "Utilised Kubernetes for container orchestration, improving application availability and resource efficiency.",
      "Collaborated with front-end teams using React and Angular for seamless UX."
    ]
  },
  {
    company: "Tata Consultancy Services",
    role: "Full Stack Java Developer",
    duration: "Jul 2022 - Oct 2024",
    description: [
      "Engineered Java-based backend solutions, ensuring security and scalability.",
      "Automated CI/CD pipelines, improving deployment speed and system reliability.",
      "Worked closely with DevOps teams to integrate cloud-based infrastructure on AWS."
    ]
  },
  {
    company: "Royal Holloway University of London",
    role: "Software Engineering Intern",
    duration: "Jul 2021 - Oct 2021",
    description: [
      "Built and enhanced Java-based backend services to support web applications.",
      "Developed UI components and tested software using React and Jest.",
      "Conducted API testing and debugging to improve system efficiency."
    ]
  },
  {
    company: "Netcomm IT Solutions",
    role: "Developer Analyst",
    duration: "Nov 2020 - Jul 2021", // Corrected date range
    description: [
      "Collaborated in Agile development cycles to improve software delivery efficiency.",
      "Focused on C++ backend development, optimising database queries for performance.",
      "Developed system monitoring tools for analysing application performance."
    ]
  }
];

export default function Experience() {
  return (
    <div className="experience-container">
      <h2 className="experience-heading">Experience</h2>
      {experienceData.map((job, index) => (
        <div key={index} className="card">
          <h3>{job.role}</h3>
          <p className="text-gray">{job.company} || {job.duration}</p>
          
          {/* Check if description is an array for bullet points */}
          {Array.isArray(job.description) ? (
            <ul className="description-list">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{job.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
