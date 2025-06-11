import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch, FaPlane, FaHotel, FaCar } from 'react-icons/fa';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchType, setSearchType] = useState('flights');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Show search box with animation after initial load
    setTimeout(() => setIsSearchVisible(true), 500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.5}px)`,
  };

  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="parallax-overlay" style={parallaxStyle}></div>
        <div className="animated-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Discover</span> Your Dream
          <span className="hero-title-accent"> Destination</span>
        </h1>
        <p className="hero-subtitle">
          Explore the world's most beautiful places and create unforgettable memories
        </p>

        <div className={`search-container glass ${isSearchVisible ? 'slide-up' : ''}`}>
          <div className="search-types">
            <button 
              className={`search-type-btn ${searchType === 'flights' ? 'active' : ''}`}
              onClick={() => setSearchType('flights')}
            >
              <FaPlane /> Flights
            </button>
            <button 
              className={`search-type-btn ${searchType === 'hotels' ? 'active' : ''}`}
              onClick={() => setSearchType('hotels')}
            >
              <FaHotel /> Hotels
            </button>
            <button 
              className={`search-type-btn ${searchType === 'cars' ? 'active' : ''}`}
              onClick={() => setSearchType('cars')}
            >
              <FaCar /> Cars
            </button>
          </div>

          <div className="search-form">
            <div className="search-input-group">
              <FaMapMarkerAlt className="search-icon" />
              <input 
                type="text" 
                placeholder={searchType === 'flights' ? 'Where to?' : 'Enter destination'}
                className="search-input"
              />
            </div>

            <div className="search-input-group">
              <FaCalendarAlt className="search-icon" />
              <input 
                type="text" 
                placeholder="Check in - Check out"
                className="search-input"
              />
            </div>

            <button className="search-button">
              <FaSearch className="search-button-icon" />
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="hero-features">
          <div className="feature fade-in" style={{animationDelay: '0.3s'}}>
            <div className="feature-icon">🌟</div>
            <h3>Best Deals</h3>
            <p>Exclusive offers and discounts</p>
          </div>
          <div className="feature fade-in" style={{animationDelay: '0.6s'}}>
            <div className="feature-icon">🎯</div>
            <h3>Handpicked</h3>
            <p>Quality destinations</p>
          </div>
          <div className="feature fade-in" style={{animationDelay: '0.9s'}}>
            <div className="feature-icon">💎</div>
            <h3>Luxury</h3>
            <p>Premium experiences</p>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow-down"></div>
        </div>
      </div>

      <div className="hero-bottom-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero; 