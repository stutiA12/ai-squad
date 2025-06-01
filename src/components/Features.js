import React from 'react';
import '../styles/Features.css';

const features = [
  {
    title: 'Uncompromised Data Security',
    desc: 'AI Squad securely stores your documents in AWS S3, ensuring high availability and reliability...',
    number: '01'
  },
  {
    title: 'Advanced Vector Embedding with GPT API',
    desc: 'AI Squad leverages GPT APIs for state-of-the-art vector embedding and output correction...',
    number: '02'
  },
  {
    title: 'API-First Integration for Easy Deployment',
    desc: 'Our platform offers a robust API that integrates effortlessly into any environment...',
    number: '03'
  },
  {
    title: 'Seamless Integration with Leading LLMs',
    desc: 'AI Squad supports integration with GPT, Gemini, Claude, and others...',
    number: '04'
  },
  {
    title: 'Protection Against Data Poisoning and Leakage',
    desc: 'With RBAC and filtering, AI Squad prevents unauthorized access and safeguards AI models...',
    number: '05'
  },
  {
    title: 'Real-Time Monitoring and Security',
    desc: 'Offers monitoring and anomaly detection across dashboards for fast alerting...',
    number: '06'
  }
];

const Features = () => {
  return (
    <div className="features-section">
      <div className="features-header">
        <button className="section-tag">Features</button>
        <h1 className="section-title">Key Features</h1>
        <p className="section-subtitle">Our AI services come with advanced features to ensure the best results for your business.</p>
      </div>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            <span className="feature-number">{feature.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
