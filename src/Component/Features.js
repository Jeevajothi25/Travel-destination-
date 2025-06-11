import React from 'react';
import './FeaturesStyles.css';
import { FaCompass, FaHotel, FaRoute, FaTicketAlt, FaHeadset, FaShieldAlt, FaGift, FaHandshake } from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: <FaCompass />,
      title: "Expert Guidance",
      description: "Our experienced travel experts craft perfect itineraries tailored to your preferences.",
      benefits: ["24/7 travel support", "Local expertise", "Personalized planning"],
      highlight: "10+ years of experience"
    },
    {
      icon: <FaHotel />,
      title: "Premium Accommodations",
      description: "Hand-picked luxury hotels and resorts that offer comfort and authentic experiences.",
      benefits: ["Verified properties", "Best price guarantee", "VIP perks included"],
      highlight: "1000+ premium partners"
    },
    {
      icon: <FaRoute />,
      title: "Custom Itineraries",
      description: "Flexible and personalized travel plans that match your unique travel style.",
      benefits: ["Customizable plans", "Local experiences", "Hidden gems access"],
      highlight: "100% tailored to you"
    },
    {
      icon: <FaTicketAlt />,
      title: "Exclusive Deals",
      description: "Special discounts and offers on flights, hotels, and activities worldwide.",
      benefits: ["Member discounts", "Early bird offers", "Package deals"],
      highlight: "Save up to 40%"
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for any travel-related queries or emergencies.",
      benefits: ["Instant response", "Emergency help", "Multi-lingual support"],
      highlight: "Always here for you"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Booking",
      description: "Safe and secure payment processing with best price guarantee.",
      benefits: ["Encrypted payments", "Free cancellation", "Price matching"],
      highlight: "100% secure payments"
    }
  ];

  return (
    <div className="features-container">
      <div className="features-header">
        <h2>Why Choose Us</h2>
        <p className="features-subtitle">Experience the difference with our premium travel services</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="feature-benefits">
              {feature.benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-item">
                  <FaGift className="benefit-icon" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <div className="feature-highlight">
              <FaHandshake className="highlight-icon" />
              <span>{feature.highlight}</span>
            </div>
            <button className="learn-more">Explore More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features; 