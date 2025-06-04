
import React from 'react';
import '../styles/MainContent.css';

const MainComponent = () => {
  return (
    <div className="main-container">
      <div className="platform-tag">An All-In-One Platform</div>
      <h1 className="main-heading">
        AI Squad A Leading AI <br /> Agent Platform
      </h1>
      <p className="main-description">
        AI Squad is a next-generation AI platform, delivering secure, customizable, and easy-to-use AI solutions for enterprises.
        Combining comprehensive security features with intuitive user control, AI Squad ensures that businesses can leverage cutting edge AI without compromising data integrity, regulatory compliance, or operational simplicity.
      </p>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
};

export default MainComponent;
