import "./TripStyles.css";
import { FaRegClock, FaStar, FaMapMarkerAlt, FaUsers, FaUtensils, FaHotel, FaWifi, FaSwimmer, FaCamera, FaHiking, FaUmbrellaBeach, FaPlane } from 'react-icons/fa';
import { useState } from 'react';

function Trip() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const trips = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg",
      tag: "Best Seller",
      duration: "10 Days",
      heading: "Japanese Cherry Blossom Tour",
      text: "Experience the magical spring season in Japan. Visit ancient temples in Kyoto, explore modern Tokyo, and witness the stunning cherry blossoms in full bloom.",
      price: "$2,999",
      rating: 4.9,
      reviews: 128,
      features: [
        { icon: <FaMapMarkerAlt />, text: "Tokyo, Kyoto, Osaka" },
        { icon: <FaUsers />, text: "Max 12 people" },
        { icon: <FaHotel />, text: "4-5 Star Hotels" }
      ],
      amenities: [
        { icon: <FaWifi />, text: "Free Wi-Fi" },
        { icon: <FaUtensils />, text: "Gourmet Dining" },
        { icon: <FaCamera />, text: "Photo Tour" }
      ]
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg",
      tag: "Adventure",
      duration: "7 Days",
      heading: "Northern Lights Explorer",
      text: "Chase the aurora borealis in Iceland's pristine wilderness. Stay in glass igloos, explore ice caves, and relax in geothermal springs.",
      price: "$3,499",
      rating: 4.8,
      reviews: 96,
      features: [
        { icon: <FaMapMarkerAlt />, text: "Reykjavik & South Coast" },
        { icon: <FaUsers />, text: "Max 8 people" },
        { icon: <FaHotel />, text: "Unique Accommodations" }
      ],
      amenities: [
        { icon: <FaHiking />, text: "Guided Hikes" },
        { icon: <FaCamera />, text: "Photography Tips" },
        { icon: <FaWifi />, text: "Free Wi-Fi" }
      ]
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
      tag: "Luxury",
      duration: "8 Days",
      heading: "Maldives Paradise Escape",
      text: "Indulge in ultimate luxury in the Maldives. Stay in overwater villas, enjoy world-class spa treatments, and experience stunning marine life.",
      price: "$4,999",
      rating: 5.0,
      reviews: 84,
      features: [
        { icon: <FaMapMarkerAlt />, text: "Male Atoll" },
        { icon: <FaUtensils />, text: "All-Inclusive" },
        { icon: <FaHotel />, text: "5-Star Resort" }
      ],
      amenities: [
        { icon: <FaSwimmer />, text: "Water Sports" },
        { icon: <FaUmbrellaBeach />, text: "Private Beach" },
        { icon: <FaWifi />, text: "Free Wi-Fi" }
      ]
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
      tag: "Cultural",
      duration: "12 Days",
      heading: "Ancient Wonders of Egypt",
      text: "Journey through time in Egypt. Explore the pyramids, cruise down the Nile River, and discover ancient temples and tombs.",
      price: "$3,299",
      rating: 4.7,
      reviews: 156,
      features: [
        { icon: <FaMapMarkerAlt />, text: "Cairo, Luxor, Aswan" },
        { icon: <FaUsers />, text: "Max 16 people" },
        { icon: <FaHotel />, text: "Luxury Nile Cruise" }
      ],
      amenities: [
        { icon: <FaCamera />, text: "Photo Stops" },
        { icon: <FaUtensils />, text: "Local Cuisine" },
        { icon: <FaWifi />, text: "Free Wi-Fi" }
      ]
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg",
      tag: "Nature",
      duration: "9 Days",
      heading: "Costa Rica Wildlife Adventure",
      text: "Discover the rich biodiversity of Costa Rica. Explore rainforests, volcanoes, and beaches while encountering exotic wildlife.",
      price: "$2,499",
      rating: 4.8,
      reviews: 112,
      features: [
        { icon: <FaMapMarkerAlt />, text: "Arenal, Manuel Antonio" },
        { icon: <FaUsers />, text: "Max 10 people" },
        { icon: <FaHotel />, text: "Eco-Lodges" }
      ],
      amenities: [
        { icon: <FaHiking />, text: "Nature Trails" },
        { icon: <FaCamera />, text: "Wildlife Tours" },
        { icon: <FaWifi />, text: "Free Wi-Fi" }
      ]
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3320529/pexels-photo-3320529.jpeg",
      tag: "Cultural",
      duration: "10 Days",
      heading: "Moroccan Desert Magic",
      text: "Experience the magic of Morocco. Stay in luxury desert camps, explore ancient medinas, and immerse in local culture.",
      price: "$2,799",
      rating: 4.9,
      reviews: 94,
      features: [
        { icon: <FaMapMarkerAlt />, text: "Marrakech, Sahara" },
        { icon: <FaUsers />, text: "Max 12 people" },
        { icon: <FaHotel />, text: "Riads & Luxury Camp" }
      ],
      amenities: [
        { icon: <FaPlane />, text: "Airport Transfer" },
        { icon: <FaUtensils />, text: "Traditional Dining" },
        { icon: <FaWifi />, text: "Free Wi-Fi" }
      ]
    }
  ];

  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Discover our latest curated travel experiences around the world</p>
      
      <div className="tripcard">
        {trips.map((trip) => (
          <div 
            className="t-card" 
            key={trip.id}
            onMouseEnter={() => setHoveredCard(trip.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="t-image">
              <img src={trip.image} alt={trip.heading} />
              <div className="trip-details">
                <span className="trip-tag">{trip.tag}</span>
                <span className="trip-duration">
                  <FaRegClock /> {trip.duration}
                </span>
              </div>
            </div>
            
            <div className="t-content">
              <h4>{trip.heading}</h4>
              <p>{trip.text}</p>
              
              <div className="trip-features">
                {trip.features.map((feature, index) => (
                  <div key={index} className="feature">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {hoveredCard === trip.id && (
                <div className="trip-amenities">
                  <h5>Included Amenities</h5>
                  <div className="amenities-grid">
                    {trip.amenities.map((amenity, index) => (
                      <div key={index} className="amenity">
                        {amenity.icon}
                        <span>{amenity.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="trip-info">
                <div className="trip-price">
                  {trip.price}
                  <span> /person</span>
                </div>
                <div className="trip-rating">
                  <FaStar />
                  <span className="rating-value">{trip.rating}</span>
                  <span>({trip.reviews})</span>
                </div>
              </div>
              
              <div className="trip-actions">
                <button className="btn-book btn-primary">Book Now</button>
                <button className="btn-book btn-outline">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trip;