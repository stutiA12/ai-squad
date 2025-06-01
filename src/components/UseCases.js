import React from 'react';
import '../styles/usecases.css';
import { FaHeadset } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';

const UseCases = () => {
  const useCases = [
    {
      icon: <FaHeadset className="icon" />,
      title: 'Customer Support and Automation',
      desc: 'AI Squad’s advanced NLP and LLM integration enable powerful, secure customer service solutions, providing fast, accurate, and secure responses while ensuring user data is protected.'
    },
    {
      icon: <FaChartLine className="icon" />,
      title: 'Knowledge Management and Optimization',
      desc: 'Enterprises can optimize their knowledge bases using AI Squad automated content curation and real-time updates, enhancing the delivery and relevance of AI-generated insights.'
    },
    {
      icon: <FaCogs className="icon" />,
      title: 'Process Automation Across Operations',
      desc: 'Real-time data processing and workflow automation streamline enterprise operations, allowing for more efficient decision-making and resource management.'
    }
  ];

  return (
    <div className="usecases-section">
      <button className="section-tag">Features</button>
      <h1 className="section-title">Use Cases And Benefits</h1>
      <p className="section-subtitle">
        Unlock practical solutions with tailored AI Squad use cases that drive growth and operational efficiency.
      </p>

      <div className="usecases-grid">
        {useCases.map((item, index) => (
          <div className="usecase-card" key={index}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCases;
