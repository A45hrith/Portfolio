import React from "react";
import "../styles/styles.css";

const experienceData = [
  {
    company: "Deltaclass Technology Solutions Limited",
    role: "Software Engineer II",
    duration: "Oct 2024 - Present",
    description: [
      "Developed and optimised backend services using Java and Spring Boot, ensuring high scalability and performance.",
      "Designed and implemented RESTful APIs to streamline system integrations and enhance functionality.",
      "Led CI/CD pipeline automation resulting in reduced deployment time by 40% and eliminating manual errors through Jenkins and Docker.",
      "Utilised Kubernetes for container orchestration, improving application availability and resource efficiency.",
      "Developed and implemented robust testing strategies using JUnit, PyTest, and Selenium, ensuring high reliability and reducing post-deployment defects by 30%."

    ]
  },
  {
    company: "Tata Consultancy Services",
    role: "Full Stack Java Developer",
    duration: "Jul 2022 - Oct 2024",
    description: [
      "Engineered scalable and high-performance Java-based backend solutions for banking applications.",
      "Upgraded DataStage 9.1 to 11.7, ensuring seamless data pipeline transitions and optimising ETL workflows for improved data processing efficiency.",
      "Migrated data warehouses to Google Cloud Platform (GCP), leveraging SQL, XML, and JSON to enable scalable data storage, retrieval, and analytics.",
      "Designed and implemented CI/CD pipelines using Jenkins, Docker, and Kubernetes, automating deployment workflows to eliminate manual interventions.",
      "Improved deployment frequency by 30 – 40% and significantly reduced build errors, ensuring a more reliable and efficient release process.",
      "Participated in the redesigning and development of wrap-around GUI screens using Node, React and TypeScript to replace and modernise legacy mainframe interfaces for increasing user experience, adoption, and interaction."
    ]
  },
  {
    company: "Royal Holloway University of London",
    role: "Software Engineering Intern",
    duration: "Jul 2021 - Oct 2021",
    description: [
      "Built and enhanced Java-based backend services to support web applications.",
      "Utilized UI/UX technologies including Figma, React, Node.js, HTML5, CSS, and JavaScript for both front-end and backend development.",
      "Designed user interfaces with React, Node.js, and JavaScript to enhance engagement.",
      "Collaborated with front-end teams using React and Angular to deliver seamless user experiences, ensuring backend services integrated smoothly with modern UI.",
      "Conducted robust testing strategies using JUnit improving application reliability."

    ]
  },
  {
    company: "Netcomm IT Solutions",
    role: "Developer Analyst",
    duration: "Nov 2020 - Jul 2021", // Corrected date range
    description: [
      "Collaborated in Agile development cycles to improve software delivery efficiency, focusing on C++ backend development.",
      "Developed and maintained scalable applications using C++ for backend logic, ensuring high performance and memory efficiency.",
      "Worked on mobile development, contributing to Android/iOS applications using C++ (NDK) for performance-critical components.",
      "Implemented RESTful APIs in C++ and integrated third-party services to enhance functionality, ensuring seamless data exchange.",
      "Developed robust and scalable backend systems using C++, optimising algorithms for efficiency in real-time processing."
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
