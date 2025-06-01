import React from 'react';
import '../styles/LLMSection.css';
import img1 from '../assets/llm-1.png';
import img2 from '../assets/llm-2.png';
import img3 from '../assets/llm-3.png';

const LLMSection = () => {
  return (
    <div className="llm-wrapper">
      <div className="llm-left">
        <button className="llm-tag">Large Language Models</button>
        <h1 className="llm-heading">Unlock The Power Of AI With AI Squad LLM</h1>
        <p className="llm-description">
          Our LLM-based services leverage the latest advancements in AI to provide intelligent,
          context-aware responses, enabling more efficient and accurate communication.
        </p>
      </div>

      <div className="llm-right">
        <div className="llm-card">
          <img src={img1} alt="LLM Use Case 1" />
          <div className="llm-card-content">
            <div className="llm-number">01</div>
            <h3>Customize the AI LLM to build your own use cases</h3>
            <p>
              Customize AI Squad LLMs to align with your unique business requirements, creating
              personalized conversational models and tailored interactions for enhanced user experiences.
            </p>
            <ul>
              <li>✔ Tailor LLMs to fit your specific business requirements and workflows.</li>
              <li>✔ Create conversational models that align with your brand's voice.</li>
              <li>✔ Adapt LLM’s capabilities to handle unique tasks or industries.</li>
              <li>✔ Customize responses to improve customer satisfaction.</li>
            </ul>
          </div>
        </div>

        <div className="llm-card">
          <img src={img2} alt="LLM Use Case 2" />
          <div className="llm-card-content">
            <div className="llm-number">02</div>
            <h3>Empower Teams with AI Collaboration</h3>
            <p>
              Enable teams to harness AI for smarter workflows, predictive analytics, and faster
              decision-making by integrating custom AI agents tailored to departments.
            </p>
          </div>
        </div>

        <div className="llm-card">
          <img src={img3} alt="LLM Use Case 3" />
          <div className="llm-card-content">
            <div className="llm-number">03</div>
            <h3>Advanced AI Solutions</h3>
            <p>
              We offer a range of AI-driven services designed to streamline business operations and
              elevate customer experiences through innovative technology.
            </p>
            <ul>
              <li>✔ AI automation to optimize workflows and reduce manual tasks.</li>
              <li>✔ Data-driven insights for smarter decisions.</li>
              <li>✔ Custom AI models for specific business challenges.</li>
              <li>✔ Seamless integration with existing systems.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMSection;
