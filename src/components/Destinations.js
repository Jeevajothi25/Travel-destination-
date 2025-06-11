import React, { useState } from 'react';
import './Destinations.css';
import { FaMapMarkerAlt, FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1920',
    rating: 4.8,
    reviews: 1458,
    price: 1299,
    description: 'Experience the magical sunsets and white-washed buildings of Santorini.',
    category: 'Europe'
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1920',
    rating: 4.7,
    reviews: 2154,
    price: 899,
    description: 'Discover tropical paradise with ancient temples and pristine beaches.',
    category: 'Asia'
  },
  {
    id: 3,
    name: 'Machu Picchu, Peru',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920',
    rating: 4.9,
    reviews: 1876,
    price: 1599,
    description: 'Explore the ancient Incan citadel in the Andes Mountains.',
    category: 'South America'
  },
  {
    id: 4,
    name: 'Maldives',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    rating: 4.9,
    reviews: 2453,
    price: 2199,
    description: 'Relax in overwater bungalows in crystal clear waters.',
    category: 'Asia'
  },
  {
    id: 5,
    name: 'Dubai, UAE',
    image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1920',
    rating: 4.7,
    reviews: 3211,
    price: 1799,
    description: 'Experience luxury and modernity in the heart of the desert.',
    category: 'Middle East'
  },
  {
    id: 6,
    name: 'Amalfi Coast, Italy',
    image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1920',
    rating: 4.8,
    reviews: 1987,
    price: 1499,
    description: 'Explore the stunning Mediterranean coastline and charming villages.',
    category: 'Europe'
  }
];

const categories = ['All', 'Europe', 'Asia', 'South America', 'Middle East'];

const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredDestinations = destinations.filter(dest => 
    activeCategory === 'All' || dest.category === activeCategory
  );

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="destinations-section">
      <div className="container">
        <h2 className="section-title">
          Popular <span className="gradient-text">Destinations</span>
        </h2>
        <p className="section-subtitle">
          Discover the world's most amazing places and create lasting memories
        </p>

        <div className="categories-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="destinations-grid">
          {filteredDestinations.map(destination => (
            <div
              key={destination.id}
              className="destination-card"
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="destination-image">
                <img src={destination.image} alt={destination.name} />
                <button
                  className="favorite-btn"
                  onClick={() => toggleFavorite(destination.id)}
                  aria-label={`Add ${destination.name} to favorites`}
                >
                  {favorites.includes(destination.id) ? (
                    <FaHeart className="heart-icon filled" />
                  ) : (
                    <FaRegHeart className="heart-icon" />
                  )}
                </button>
                {hoveredCard === destination.id && (
                  <div className="card-overlay">
                    <p className="overlay-description">{destination.description}</p>
                    <button className="btn btn-primary">Explore Now</button>
                  </div>
                )}
              </div>
              <div className="destination-info">
                <div className="destination-header">
                  <h3>{destination.name}</h3>
                  <div className="rating">
                    <FaStar className="star-icon" />
                    <span>{destination.rating}</span>
                    <span className="reviews">({destination.reviews})</span>
                  </div>
                </div>
                <div className="destination-footer">
                  <div className="location">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{destination.category}</span>
                  </div>
                  <div className="price">
                    <span className="amount">${destination.price}</span>
                    <span className="period">/ person</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="btn btn-outline">View All Destinations</button>
        </div>
      </div>

      <div className="section-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Destinations; 