import React from 'react';
import './FooterStyles.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Wanderlust</h3>
          <p className="footer-about">
            Discover the world with us. We create unforgettable travel experiences 
            and help you explore the most beautiful destinations around the globe.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Popular Destinations</h4>
          <ul className="footer-links">
            <li><Link to="/destination/bali">Bali, Indonesia</Link></li>
            <li><Link to="/destination/paris">Paris, France</Link></li>
            <li><Link to="/destination/santorini">Santorini, Greece</Link></li>
            <li><Link to="/destination/maldives">Maldives</Link></li>
            <li><Link to="/destination/dubai">Dubai, UAE</Link></li>
            <li><Link to="/destination/tokyo">Tokyo, Japan</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>
              <FaMapMarkerAlt className="contact-icon" />
              123 Travel Street, Tourism City, TC 12345
            </p>
            <p>
              <FaPhone className="contact-icon" />
              +1 234 567 8900
            </p>
            <p>
              <FaEnvelope className="contact-icon" />
              info@wanderlust.com
            </p>
          </div>
          <div className="newsletter-mini">
            <input type="email" placeholder="Subscribe to newsletter" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            © {new Date().getFullYear()} Wanderlust. All rights reserved. Made with <FaHeart className="heart-icon" /> by Travel Enthusiasts
          </p>
          <div className="footer-bottom-links">
            <a href="/faq">FAQ</a>
            <a href="/sitemap">Sitemap</a>
            <a href="/support">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;