import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h4>Hi, I'm</h4>
          <h1><span className="gradient-text">Veera Kumari</span></h1>
          <h3>AI & Data Science Student | Web Developer</h3>
          
          <p className="hero-description">
            Passionate about building responsive web applications and applying data-driven solutions. 
            Currently pursuing B.Tech in AI & Data Science.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">
              <i className="fas fa-briefcase"></i> View Projects
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-envelope"></i> Contact Me
            </button>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-github"></i></a>
            <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        
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
