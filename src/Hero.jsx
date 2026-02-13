import React from 'react';
import './Hero.css'; // Keep your styles

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        {/* Left content */}
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">
            <span className="gradient-text"> Achanta Veera Kumari</span>
          </h1>
          <h2 className="hero-title">
            AI & Data Science Student | Web Developer
          </h2>

          <p className="hero-description">
            Passionate about building responsive web applications and applying data-driven solutions.
            Currently pursuing B.Tech in AI & Data Science.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-briefcase" aria-hidden="true"></i> View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <i className="fas fa-envelope" aria-hidden="true"></i> Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github" aria-hidden="true"></i>
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* Add other social links similarly */}
          </div>
        </div>

        {/* Right image */}
        <div className="hero-image">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Veera Kumari"
              className="profile-pic"
            />
            <div className="image-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;