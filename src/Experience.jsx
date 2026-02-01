import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "AI & Data Science Student",
      company: "B.Tech Program",
      description: "Pursuing specialization in Artificial Intelligence and Data Science, focusing on machine learning algorithms, data analysis, and web technologies."
    },
    {
      year: "2022 - 2023",
      title: "Web Development Intern",
      company: "IIIT Hyderabad",
      description: "Worked on front-end development using React.js, implemented responsive designs, and collaborated on team projects. Contributed to the development of client websites."
    },
    {
      year: "2021 - 2022",
      title: "Freelance Web Developer",
      company: "Self-Employed",
      description: "Developed websites and web applications for various clients, focusing on user experience and modern design principles. Managed projects from conception to deployment."
    }
  ];

  const certifications = [
    { name: "Google Data Analytics Professional Certificate", issuer: "Google", year: "2023" },
    { name: "Machine Learning Specialization", issuer: "Stanford University", year: "2023" },
    { name: "Full Stack Web Development", issuer: "Coursera", year: "2022" },
    { name: "React Developer Certificate", issuer: "Meta", year: "2022" }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">My <span className="highlight">Journey</span></h2>
        <p className="section-subtitle">Education, internships and certifications</p>
        
        <div className="experience-content">
          <div className="experience-section">
            <h3 className="experience-heading">
              <i className="fas fa-briefcase"></i> Experience & Education
            </h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-year">{exp.year}</div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="experience-section">
            <h3 className="experience-heading">
              <i className="fas fa-certificate"></i> Certifications
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div className="certification-card" key={index}>
                  <div className="cert-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p><strong>{cert.issuer}</strong> • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
