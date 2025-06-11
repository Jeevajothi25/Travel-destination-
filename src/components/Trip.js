import React from 'react';
import './TripStyles.css';

const Trip = () => {
  const trips = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Cherry Blossoms in Japan",
      description: "Experience the magical spring season in Japan with stunning cherry blossoms in full bloom. Visit ancient temples, modern cities, and picturesque gardens.",
      duration: "10 days",
      price: "$2,499"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Northern Lights Adventure",
      description: "Chase the aurora borealis in Iceland's pristine wilderness. Stay in glass igloos, explore ice caves, and relax in geothermal springs.",
      duration: "7 days",
      price: "$3,299"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Santorini Sunset Escape",
      description: "Discover the romantic charm of Santorini with its white-washed buildings, blue domes, and breathtaking sunsets over the Aegean Sea.",
      duration: "8 days",
      price: "$1,999"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Amazon Rainforest Explorer",
      description: "Journey into the heart of the Amazon rainforest. Experience unique wildlife, indigenous cultures, and the mighty Amazon River.",
      duration: "12 days",
      price: "$2,899"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3320529/pexels-photo-3320529.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Moroccan Desert Safari",
      description: "Explore the magical Sahara Desert, stay in luxury desert camps, visit ancient medinas, and experience traditional Moroccan culture.",
      duration: "9 days",
      price: "$1,799"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Swiss Alps Adventure",
      description: "Experience the majestic Swiss Alps with scenic train rides, hiking trails, charming villages, and world-class skiing resorts.",
      duration: "11 days",
      price: "$3,499"
    }
  ];

  return (
    <div className="trip">
      <h1 className="section-title">Recent <span className="gradient-text">Trips</span></h1>
      <p className="section-subtitle">Discover our latest curated travel experiences</p>
      
      <div className="tripcard">
        {trips.map((trip) => (
          <div className="t-card" key={trip.id}>
            <div className="t-image">
              <img src={trip.image} alt={trip.title} />
              <div className="duration-badge">
                <span>{trip.duration}</span>
              </div>
            </div>
            
            <div className="t-content">
              <div className="card-top">
                <h4>{trip.title}</h4>
                <span className="trip-price">{trip.price}</span>
              </div>
              <p>{trip.description}</p>
              
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
                <button className="btn btn-outline">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trip; 