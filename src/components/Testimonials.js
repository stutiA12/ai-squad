import React from 'react';
import '../styles/testimonials.css';
import men1 from '../assets/men1.jpg';
import men2 from '../assets/men2.jpg';

const testimonials = [
  {
    name: 'Jos Davies',
    image: men1, 
    feedback:
      'These AI chatbots transformed our customer support, making it more efficient and aligned with our brand. Highly recommended!',
  },
  {
    name: 'David Lang',
    image: men2, 
    feedback:
      'Tailored LLM chatbots have greatly enhanced our customer engagement. Impressive results and excellent support!',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <button className="testimonials-tag">Testimonials</button>
        <h2>Kind Words From Our Clients</h2>
        <p>
          Success stories of different clients in various industries.
        </p>
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === 0 ? 'active' : ''}`}
          >
            <h4>Testimonials</h4>
            <p className="testimonial-text">"{testimonial.feedback}"</p>
            <div className="testimonial-footer">
              <img src={testimonial.image} alt={testimonial.name} />
              <span>{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
