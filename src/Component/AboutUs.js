import "./AboutUsStyles.css";
import { FaGlobe, FaUsers, FaStar, FaPlane } from 'react-icons/fa';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1 className="neon-text">Our Vision</h1>
        <p>
          At Wanderlust, we envision a world where travel transcends mere tourism—it's about creating meaningful connections, 
          embracing diverse cultures, and fostering unforgettable experiences. Our passion lies in transforming your travel 
          dreams into reality, one destination at a time.
        </p>
        
        <div className="about-stats">
          <div className="stat-item">
            <FaGlobe size={30} color="#4ecdc4" />
            <div className="stat-number">100+</div>
            <div className="stat-label">Destinations</div>
          </div>
          <div className="stat-item">
            <FaUsers size={30} color="#ff6b6b" />
            <div className="stat-number">50k+</div>
            <div className="stat-label">Happy Travelers</div>
          </div>
          <div className="stat-item">
            <FaStar size={30} color="#ffd93d" />
            <div className="stat-number">4.9</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <FaPlane size={30} color="#6c5ce7" />
            <div className="stat-number">10k+</div>
            <div className="stat-label">Tours Completed</div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h1 className="neon-text">Our Mission</h1>
        <p>
          We're dedicated to crafting exceptional travel experiences that go beyond the ordinary. Our mission is to:
        </p>
        <p>
          • Curate unique, immersive journeys that connect travelers with local cultures<br />
          • Provide personalized service that caters to your individual travel style<br />
          • Ensure sustainable and responsible tourism practices<br />
          • Make luxury travel accessible without compromising quality
        </p>
      </div>

      <div className="about-section">
        <h1 className="neon-text">Our Journey</h1>
        <p>
          Founded in 2015, Wanderlust began as a small team of passionate travelers with a big dream. Today, 
          we've grown into a leading travel platform, helping thousands of adventurers explore the world's most 
          breathtaking destinations. Our journey has been marked by continuous innovation, unwavering commitment 
          to excellence, and the joy of making travel dreams come true.
        </p>
      </div>

      <div className="about-section team-section">
        <h1 className="neon-text">Meet Our Team</h1>
        <div className="team-grid">
          <div className="team-member">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Sarah Johnson"
              className="member-image"
            />
            <h3 className="member-name">Sarah Johnson</h3>
            <p className="member-role">Founder & CEO</p>
          </div>
          <div className="team-member">
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Michael Chen"
              className="member-image"
            />
            <h3 className="member-name">Michael Chen</h3>
            <p className="member-role">Travel Director</p>
          </div>
          <div className="team-member">
            <img 
              src="https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Emma Rodriguez"
              className="member-image"
            />
            <h3 className="member-name">Emma Rodriguez</h3>
            <p className="member-role">Experience Curator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
