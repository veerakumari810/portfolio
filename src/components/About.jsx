import React from 'react';
import profileImage from "../assets/profile.jpg";
import './About.css';

const About = () => {
  const aboutData = [
    { icon: 'fas fa-graduation-cap', title: 'Education', value: 'B.Tech 3rd year AI & Data Science' },
    { icon: 'fas fa-check-circle', title: 'Projects', value: '3 Completed' },
    { icon: 'fas fa-award', title: 'Certifications', value: '5 Achieved' }
  ];

  // Resume download function
  const downloadResume = () => {
    try {
      // Create download link
      const link = document.createElement('a');
      link.href = '/Veera_Kumari_Resume.pdf';
      link.download = 'Veera_Kumari_Resume.pdf';
      link.target = '_blank';
      
      // Add to document and click
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      
      // Optional: Show success message
      console.log('Resume download started');
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Error downloading resume. Please try again.');
    }
  };

  // Open resume in new tab
  const viewResume = () => {
    window.open('/Veera_Kumari_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="about dark-theme" id="about">
      <div className="container">
        <h2 className="section-title">About <span className="highlight">Me</span></h2>
        <p className="section-subtitle">Get to know more about my journey and expertise</p>
        
        <div className="about-content">
          <div className="about-image">
            <div className="profile-image-container">
              
            </div>
          </div>
          
          <div className="about-text">
            <h3>AI & Data Science Student</h3>
            <p>
              I'm Veera Kumari Achanta, a 3rd-year B.Tech student specializing in Artificial Intelligence & Data Science.
            </p>
            <p>
              I have a strong interest in web development and data science, constantly exploring how technology can solve real-world problems. I enjoy building responsive, user-friendly web applications using React and modern web technologies.
            </p>
            <p>
              I'm motivated to learn, build real-world applications, and grow as a developer. Currently seeking internship and entry-level opportunities where I can contribute while expanding my skills.
            </p>
            
            <div className="about-stats">
              {aboutData.map((item, index) => (
                <div className="stat-item" key={index}>
                  <div className="stat-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="stat-info">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="resume-buttons">
              <button className="btn btn-primary" onClick={downloadResume}>
                <i className="fas fa-download"></i> Download Resume
              </button>
              <button className="btn btn-outline" onClick={viewResume}>
                <i className="fas fa-eye"></i> View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;