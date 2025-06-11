import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight } from "react-icons/fa";

function ServicesData({ image, heading, text, icon, features, price, link }) {
  return (
    <div className="s-card">
      <div className="s-image">
        <img src={image} alt={heading} />
        <div className="service-icon">{icon}</div>
        <div className="price-tag">{price}</div>
      </div>
      <div className="s-content">
        <h4>{heading}</h4>
        <p>{text}</p>
        
        <ul className="service-features">
          {features && features.map((feature, index) => (
            <li key={index} className="feature-item">
              <FaCheck className="feature-icon" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Link to={link} className="learn-more-btn">
          Learn More <FaArrowRight style={{ marginLeft: '8px' }} />
        </Link>
      </div>
    </div>
  );
}

export default ServicesData;