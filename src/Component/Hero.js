import { useState, useEffect } from 'react';
import "./HeroStyles.css";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaChevronDown } from 'react-icons/fa';
//import tour from '../assets/Journey.jpg';

function Hero(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('destinations');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  const isHomePage = props.cName === "hero";

  return (
    <div className={props.cName}>
      <div className="hero-background">
        <img alt="HeroImg" src={props.heroImg} className="hero-img" />
        <div className="overlay"></div>
        
        {/* Animated Shapes */}
        <div className="animated-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
      </div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-text">
          <h1>
            {isHomePage ? (
              <>
                <span className="gradient-text">Explore</span> The World
                <span className="highlight"> Together</span>
              </>
            ) : (
              props.title
            )}
          </h1>
          {isHomePage && <p>{props.text}</p>}

          {/* Search Box - Only show on home page */}
          {isHomePage && (
            <form onSubmit={handleSearch} className="search-box">
              <div className="search-tabs">
                <button 
                  className={`tab ${activeTab === 'destinations' ? 'active' : ''}`}
                  onClick={() => setActiveTab('destinations')}
                >
                  Destinations
                </button>
                <button 
                  className={`tab ${activeTab === 'tours' ? 'active' : ''}`}
                  onClick={() => setActiveTab('tours')}
                >
                  Tours
                </button>
                <button 
                  className={`tab ${activeTab === 'hotels' ? 'active' : ''}`}
                  onClick={() => setActiveTab('hotels')}
                >
                  Hotels
                </button>
              </div>

              <div className="search-input-group">
                <FaMapMarkerAlt className="input-icon" />
                <input 
                  type="text"
                  placeholder="Where do you want to go?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="search-input-group">
                <FaCalendarAlt className="input-icon" />
                <input 
                  type="text"
                  placeholder="When?"
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => e.target.type = 'text'}
                />
              </div>

              <div className="search-input-group">
                <FaUserFriends className="input-icon" />
                <select defaultValue="">
                  <option value="" disabled>Travelers</option>
                  <option value="1">1 Traveler</option>
                  <option value="2">2 Travelers</option>
                  <option value="3">3 Travelers</option>
                  <option value="4">4+ Travelers</option>
                </select>
              </div>

              <button type="submit" className="search-button">
                <FaSearch />
                Search
              </button>
            </form>
          )}

          {/* Quick Links - Only show on home page */}
          {isHomePage && (
            <div className="quick-links">
              <span>Popular:</span>
              <a href="/destination/bali">Bali</a>
              <a href="/destination/paris">Paris</a>
              <a href="/destination/maldives">Maldives</a>
              <a href="/destination/santorini">Santorini</a>
            </div>
          )}
        </div>

        {/* Scroll Indicator - Only show on home page */}
        {isHomePage && (
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <FaChevronDown className="scroll-arrow" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;