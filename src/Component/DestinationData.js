import React, { Component } from "react";
import "./DestinationStyles.css";
import { FaMapMarkerAlt, FaStar, FaPlane, FaHeart } from 'react-icons/fa';

class DestinationData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img1Error: false,
      img2Error: false,
      isLiked: false,
      isHovered: false
    };
  }

  handleImageError = (imageNum) => {
    this.setState({ [imageNum]: true });
  }

  toggleLike = () => {
    this.setState(prevState => ({ isLiked: !prevState.isLiked }));
  }

  render() {
    const { className, heading, text, img1, img2, rating, reviews, price } = this.props;
    const fallbackImage = "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg";

    return (
      <div 
        className={className}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <div className="des-text">
          <h2>{heading}</h2>
          <div className="destination-meta">
            <div className="rating">
              <FaStar className="star-icon" />
              <span>{rating}</span>
              <span className="reviews">({reviews} reviews)</span>
            </div>
            <div className="price">
              <span className="amount">{price}</span>
              <span className="period">/ person</span>
            </div>
          </div>
          <p>{text}</p>
          <div className="destination-footer">
            <div className="location">
              <FaMapMarkerAlt className="location-icon" />
              <span>{heading}</span>
            </div>
            <button className="explore-btn">
              <FaPlane className="plane-icon" />
              Explore Now
            </button>
          </div>
        </div>

        <div className="image">
          <img
            alt={heading}
            src={this.state.img1Error ? fallbackImage : img1}
            onError={() => this.handleImageError('img1Error')}
          />
          <img
            alt={heading}
            src={this.state.img2Error ? fallbackImage : img2}
            onError={() => this.handleImageError('img2Error')}
          />
          <button 
            className={`like-btn ${this.state.isLiked ? 'liked' : ''}`}
            onClick={this.toggleLike}
            aria-label={`Like ${heading}`}
          >
            <FaHeart />
          </button>
          {this.state.isHovered && (
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>Highlights</h3>
                <ul>
                  <li>✓ Guided Tours</li>
                  <li>✓ Luxury Accommodations</li>
                  <li>✓ Local Experiences</li>
                  <li>✓ 24/7 Support</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DestinationData;