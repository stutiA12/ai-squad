import React from 'react';
import '../styles/blogsEvents.css';
import futureAI from '../assets/future-ai.jpg';
import chatbotImg from '../assets/custom-chatbot.jpg';
import voiceImg from '../assets/Voice.jpg';


const blogs = [
  {
    title: 'The Future of AI Chatbots.',
    description:
      'AI chatbots are transforming how businesses communicate with customers. They offer real support, automate responses, and enhance user satisfaction effortlessly.',
    image: futureAI, 
  },
  {
    title: 'Benefits of Custom Chatbots for Your Business.',
    description:
      'Custom chatbots allow businesses to offer personalized interactions. With tailored responses and intelligent workflows, they deliver unique experiences that suit your brand.',
    image: chatbotImg,
  },
  {
    title: 'How Voice Chatbots Are Changing Customer Service.',
    description:
      'Voice chatbots enable hands-free interactions, making customer service faster and more efficient. As voice technology evolves, businesses can provide instant, conversational support.',
    image: voiceImg,
  },
];

const BlogsEvents = () => {
  return (
    <section className="blogs-section">
      <div className="blogs-header">
        <button className="blogs-tag">Blog & Events</button>
        <h2>Watch Our Latest Blogs & Events</h2>
        <p>
          Insights, ideas, and inspiration for curious minds navigating today's world.
        </p>
      </div>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <h4>{blog.title}</h4>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsEvents;
