import React from "react";
import "./Experience.css";

const SimpleExperience = () => {
  return (
    <section className="experience" id="experience" style={{border: "5px solid yellow", minHeight: "300px"}}>
      <div className="container">
        <h2 className="section-title" style={{color: "red"}}>EXPERIENCE SECTION</h2>
        <p className="section-subtitle">This is a test section to check if it renders</p>
        <div style={{textAlign: "center", padding: "50px", background: "rgba(255,0,0,0.1)"}}>
          <h3>If you see this, Experience section is working!</h3>
          <p>Height: 500px - Scroll to see me</p>
          <div style={{height: "300px"}}></div>
        </div>
      </div>
    </section>
  );
};

export default SimpleExperience;
