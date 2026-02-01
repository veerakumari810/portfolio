import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: 'fas fa-code',
      skills: ['Python'],
      color: '#3B82F6'
    },
    {
      title: 'Web Technologies',
      icon: 'fas fa-globe',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: '#10B981'
    },
    {
      title: 'Data Science',
      icon: 'fas fa-chart-line',
      skills: ['Numpy', 'Pandas', 'Machine Learning (Basics)'],
      color: '#8B5CF6'
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      skills: ['SQL (Basics)'],
      color: '#EF4444'
    },
    {
      title: 'UI/UX Tools',
      icon: 'fas fa-paint-brush',
      skills: ['Figma'],
      color: '#F59E0B'
    },
    {
      title: 'Tools',
      icon: 'fas fa-tools',
      skills: ['Git', 'GitHub', 'VS Code'],
      color: '#06B6D4'
    }
  ];

  return (
    <section className="skills dark-theme" id="skills">
      <div className="container">
        <h2 className="section-title">My <span className="highlight">Skills</span></h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <div 
                  className="skill-icon" 
                  style={{ backgroundColor: `${category.color}20`, borderColor: category.color }}
                >
                  <i 
                    className={category.icon} 
                    style={{ color: category.color }}
                  ></i>
                </div>
                <h3 style={{ color: category.color }}>{category.title}</h3>
              </div>
              
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <span className="skill-dot" style={{ backgroundColor: category.color }}></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;