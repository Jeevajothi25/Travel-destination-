import React, { useState } from 'react';
import './NewsletterStyles.css';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically handle the newsletter subscription
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2>Get Exclusive Travel Deals</h2>
          <p>Subscribe to our newsletter and receive special offers, travel tips, and insider destinations straight to your inbox!</p>
        </div>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            <button type="submit">
              <FaPaperPlane className="send-icon" />
              <span>Subscribe</span>
            </button>
          </div>
          {status === 'success' && (
            <p className="success-message">Thank you for subscribing!</p>
          )}
        </form>
        <div className="newsletter-features">
          <div className="feature">
            <span>✓</span> Exclusive Deals
          </div>
          <div className="feature">
            <span>✓</span> Travel Tips
          </div>
          <div className="feature">
            <span>✓</span> Destination Guides
          </div>
        </div>
      </div>
      <div className="newsletter-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
};

export default Newsletter; 