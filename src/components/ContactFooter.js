import React from 'react';
import '../styles/contactFooter.css';
import logo from '../assets/logo.png';

const ContactFooter = () => {
  return (
    <>
      <section className="contact-section">
        {/* Top Contact Us Button */}
        <div className="contact-top-button">
          <button className="contact-us-btn">Contact Us</button>
        </div>

        {/* Contact Form and Info */}
        <div className="contact-content">
          <div className="contact-left">
            <input type="text" placeholder="Full Name" />
            <div className="contact-row">
              <input type="text" placeholder="Mobile Number" />
              <input type="email" placeholder="Email Address" />
            </div>
            <textarea placeholder="Message" rows={4}></textarea>
            <button className="send-button">Send Message</button>
          </div>

          <div className="contact-right">
            <h2>
              Get Started With <span>My AI Squad.</span>
            </h2>
            <p>
              Answer a couple of questions to make sure your business is a good fit.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="AI Squad" />
          </div>

          <div className="newsletter">
            <h4>Subscribe for our newsletter</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Useful Information’s</h4>
            <ul>
              <li>Blogs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="socials">
            <span>Follow Us on</span>
            <div className="icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
          <p>© 2024. AI Squad. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
