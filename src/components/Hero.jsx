import React from "react";
import "./Hero.css";

const Hero = () => {
  const profileImage = "https://res.cloudinary.com/dn46dysld/image/upload/v1769923974/profile2_vuri8n.jpg";
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        {/* Content on LEFT */}
        <div className="hero-content">
          <h4>Hi, I'm</h4>
          <h1><span className="gradient-text">Veera Kumari</span></h1>
          <h3>AI & Data Science Student | Web Developer</h3>
          
          <p className="hero-description">
            Passionate about building responsive web applications and applying data-driven solutions. 
            Currently pursuing B.Tech in AI & Data Science.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              <i className="fas fa-briefcase"></i> View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              <i className="fas fa-envelope"></i> Contact Me
            </button>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/veerakumari810" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/veera-kumari" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
           <a href="mailto:vkachanta9346@gmail.com" className="social-link">
    <i className="fas fa-envelope"></i>
  </a>
          </div>
        </div>
        
        {/* Clean Circle Image on RIGHT */}
        <div className="hero-image">
          <div className="profile-container">
            <img 
              src={profileImage} 
              alt="Veera Kumari" 
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'image-fallback';
                fallback.innerHTML = 'VK';
                fallback.style.cssText = `
                  width: 350px;
                  height: 350px;
                  border-radius: 50%;
                  background: linear-gradient(135deg, #0ef, #8b5cf6);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 3rem;
                  font-weight: bold;
                  border: 5px solid #0ef;
                  box-shadow: 0 10px 30px rgba(14, 239, 255, 0.3);
                `;
                e.target.parentElement.appendChild(fallback);
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;