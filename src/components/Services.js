import React from 'react';
import '../styles/Services.css';
import chatbotImg from '../assets/AI-chatbot.jpg';      
import customBotImg from '../assets/AI-tab.jpg';  
import voiceBotImg from '../assets/Voice-chatbot.jpg';   

const Services = () => {
  return (
    <div className="services-section">
      <button className="section-tag">Services</button>
      <h1 className="section-title">Revolutionize Customer Interactions With Advanced AI Solutions</h1>
      <p className="section-subtitle">
        We provide cutting-edge AI solutions, including custom and AI-powered chatbots designed to revolutionize your customer interactions.
      </p>

      <div className="service-cards">
        <div className="service-card">
          <img src={voiceBotImg} alt="AI Chatbot" />
          <h3>AI Chatbots for automated, real-time responses</h3>
          <p>AI chatbots deliver automated, real-time responses for seamless customer interactions.</p>
        </div>
        <div className="service-card">
          <img src={customBotImg} alt="Custom Chatbot" />
          <h3>Custom-built chatbots tailored to your Business</h3>
          <p>Custom-built chatbots designed to meet your specific business needs.</p>
        </div>
        <div className="service-card">
          <img src={chatbotImg} alt="Voice Chatbot" />
          <h3>Voice Chatbots Service</h3>
          <p>Voice chatbots enable seamless, hands-free communication for effortless customer interactions.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
