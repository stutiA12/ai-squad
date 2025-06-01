import React from 'react';
import '../styles/aboutus.css';
import aboutImage from '../assets/futurestic.jpg';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <button className="aboutus-button">About Us</button>
        <h1 className="aboutus-heading">AI Squad, LLC</h1>
        <p className="aboutus-description">
          WhiteFish, LLC is a Boston based women and minority owned AI service company. Our AI Squad agent platform provides 
          uncompromised AI security, and easy-to-use AI agent services that are under total user control.
        </p>
        <div className="aboutus-mission">
          <div className="mission-icon">🎯</div>
          <h2 className="mission-title">Our Mission</h2>
        </div>
        <p className="mission-text">
          Transform learning and working with AI Squad personalized assistants.
        </p>
      </div>
      <div className="aboutus-image">
        <img src={aboutImage} alt="Human and Robot Touching" />
      </div>
    </div>
  );
};

export default AboutUs;
