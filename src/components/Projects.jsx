import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Map My Culture",
      description: "Collaborative project where I worked as Frontend Developer. A cultural mapping application that showcases heritage sites with interactive features and user engagement tools.",
      tags: ["React", "JavaScript", "CSS3", "Frontend Development", "Team Collaboration"],
      github: "https://github.com/RCTS-K-Hub/2025YearlyProject-Team6.git",
      role: "Frontend Developer"
    },
    {
      title: "Smart Fertilizer Recommendation System",
      description: "AI-powered system to recommend optimal fertilizers for crops based on soil conditions, weather data, and crop type. Uses machine learning algorithms to improve agricultural productivity.",
      tags: ["Python", "Machine Learning", "Flask", "Scikit-learn"],
      github: "https://github.com/veerakumari810/smart-fertilizer.git"
    },
    {
      title: "To-Do Application",
      description: "Modern task management application with features like drag & drop, priority tagging, and deadline reminders. Built with React for frontend and local storage for data persistence.",
      tags: ["React", "JavaScript", "CSS3", "Local Storage"],
      github: "https://github.com/veerakumari810/To-do-app.git"
    }
  ];

  return (
    <section className="projects dark-theme" id="projects">
      <div className="container">
        <h2 className="section-title">My <span className="highlight">Projects</span></h2>
        <p className="section-subtitle">Real-world applications I've built and contributed to</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-header">
                <div className="project-title-wrapper">
                  <h3>{project.title}</h3>
                  {project.github && project.github !== "#" && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-github-link"
                      title="View on GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
                {project.role && (
                  <div className="project-role-badge">
                    <i className="fas fa-user-tie"></i> {project.role}
                  </div>
                )}
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              
              <div className="project-actions">
                <button className="btn btn-outline">
                  <i className="fas fa-eye"></i> View Details
                </button>
                
                {project.github && project.github !== "#" && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary github-btn"
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;