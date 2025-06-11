import React from "react";
import "./SignUpStyles.css";
import { FaTimes, FaUser, FaEnvelope, FaLock, FaGlobe, FaPlane, FaMapMarkerAlt } from "react-icons/fa";

function SignUp({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="signup-container">
          <div className="signup-left">
            <div className="signup-left-content">
              <h2>Welcome to Trippy</h2>
              <p>Start your journey with us!</p>
              
              <div className="features">
                <div className="feature-item">
                  <FaGlobe className="feature-icon" />
                  <div>
                    <h3>Explore the World</h3>
                    <p>Access exclusive travel deals</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <FaPlane className="feature-icon" />
                  <div>
                    <h3>Travel Smart</h3>
                    <p>Get personalized trip planning</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <FaMapMarkerAlt className="feature-icon" />
                  <div>
                    <h3>Adventure Awaits</h3>
                    <p>Join our travel community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="signup-right">
            <div className="signup-header">
              <h2>Create Account</h2>
              <p>Join us for amazing travel experiences!</p>
            </div>

            <form className="signup-form">
              <div className="input-group">
                <FaUser className="input-icon" />
                <input type="text" placeholder="Full Name" required />
                <div className="input-border"></div>
              </div>

              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Email Address" required />
                <div className="input-border"></div>
              </div>

              <div className="input-group">
                <FaLock className="input-icon" />
                <input type="password" placeholder="Password" required />
                <div className="input-border"></div>
              </div>

              <div className="input-group">
                <FaLock className="input-icon" />
                <input type="password" placeholder="Confirm Password" required />
                <div className="input-border"></div>
              </div>

              <div className="terms">
                <label className="checkbox-container">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  <span>I agree to the Terms & Conditions</span>
                </label>
              </div>

              <button type="submit" className="signup-btn">
                Create Account
              </button>
            </form>

            <div className="signup-footer">
              <p>Already have an account? <button className="text-btn">Log In</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp; 