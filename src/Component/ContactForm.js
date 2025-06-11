import "./ContactFormStyles.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  return (
    <div className="contact-wrapper">
      <div className="contact-details">
        <h1>Get In Touch</h1>
        <p className="contact-intro">We'd love to hear from you! Reach out to us through any of these channels.</p>
        
        <div className="contact-info">
          <div className="info-box">
            <div className="icon-wrapper">
              <FaEnvelope className="info-icon" />
            </div>
            <div className="info-content">
              <h3>Email Us</h3>
              <p>trippy@travel.com</p>
              <p>support@trippy.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon-wrapper">
              <FaPhone className="info-icon" />
            </div>
            <div className="info-content">
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="info-icon" />
            </div>
            <div className="info-content">
              <h3>Visit Us</h3>
              <p>123 Adventure Road</p>
              <p>Travel City, TC 12345</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon-wrapper">
              <FaClock className="info-icon" />
            </div>
            <div className="info-content">
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h1>Send Us a Message</h1>
          <p>Fill out the form below and we'll get back to you soon!</p>
        </div>
        
        <form>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="text" placeholder="Your Name" required />
          </div>
          
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Your Email" required />
          </div>
          
          <div className="input-group">
            <FaPaperPlane className="input-icon" />
            <input type="text" placeholder="Subject" required />
          </div>
          
          <div className="input-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          
          <button className="submit-btn">
            Send Message
            <FaPaperPlane className="btn-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;