import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateType, setCertificateType] = useState(""); // "internship" or "other"

  const experiences = [
    {
      title: "Developer Intern",
      company: "RCTS Lab",
      location: "International Institute of Information Technology, Hyderabad (IIIT-H)",
      period: "1st Dec 2025 – 31st Dec 2025",
      points: [
        "Contributed to project development and problem-solving tasks",
        "Gained exposure to research-oriented development methodologies",
        "Worked collaboratively in a technical environment",
        "Developed practical skills in software development workflows"
      ],
      certificatePath: "/IIIT-H_Certificate.jpeg",
      certificateName: "IIIT-H Internship Completion Certificate"
    }
  ];

  const handleViewCertificate = (certType) => {
    setCertificateType(certType);
    setShowCertificate(true);
  };

  return (
    <section className="experience dark-theme" id="experience">
      <div className="container">
        <h2 className="section-title">My <span className="highlight">Experience</span></h2>
        <p className="section-subtitle">Professional journey and contributions</p>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3>{exp.title}</h3>
                  <div className="experience-company">
                    <i className="fas fa-building"></i>
                    <span>{exp.company}</span>
                  </div>
                </div>
                
                <div className="experience-period">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <div className="experience-location">
                <i className="fas fa-map-marker-alt"></i>
                <span>{exp.location}</span>
              </div>
              
              <div className="experience-points">
                {exp.points.map((point, pointIndex) => (
                  <div className="point-item" key={pointIndex}>
                    <div className="point-icon">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                    <p>{point}</p>
                  </div>
                ))}
              </div>

              {/* Certificate Section */}
              <div className="certificate-section">
                <div className="certificate-buttons">
                  <button 
                    className="btn btn-certificate"
                    onClick={() => handleViewCertificate("internship")}
                  >
                    <i className="fas fa-certificate"></i> View Internship Certificate
                  </button>
                  
                  {/* You can add more certificate buttons here if needed */}
                  {/* <button className="btn btn-certificate-secondary">
                    <i className="fas fa-award"></i> View Achievement Certificate
                  </button> */}
                </div>
                
                <div className="certificate-info">
                  <i className="fas fa-info-circle"></i>
                  <span>Click to view your IIIT-H internship completion certificate</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="certificate-modal-overlay" onClick={() => setShowCertificate(false)}>
          <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {certificateType === "internship" 
                  ? experiences[0].certificateName 
                  : "Certificate"
                }
              </h3>
              <button 
                className="modal-close-btn"
                onClick={() => setShowCertificate(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-content">
              {/* Display the image certificate */}
              <img 
                src={experiences[0].certificatePath} 
                alt={experiences[0].certificateName}
                className="certificate-image"
                onError={(e) => {
                  console.error("Failed to load certificate image");
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="certificate-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      <p>Certificate image not found. Please ensure the file is in the public folder.</p>
                      <p>File path: ${experiences[0].certificatePath}</p>
                    </div>
                  `;
                }}
              />
            </div>
            <div className="modal-footer">
              <div className="modal-actions">
                <a 
                  href={experiences[0].certificatePath} 
                  className="btn btn-primary"
                  target="_blank" 
                  rel="noopener noreferrer"
                  download={`${experiences[0].company}_Certificate.jpeg`}
                >
                  <i className="fas fa-download"></i> Download Certificate
                </a>
                <button 
                  className="btn btn-outline"
                  onClick={() => setShowCertificate(false)}
                >
                  <i className="fas fa-times"></i> Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;