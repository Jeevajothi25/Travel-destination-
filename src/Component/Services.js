import "./ServicesStyles.css";
import ServicesData from "./ServicesData";
import { FaPlane, FaHotel, FaRoute, FaPassport, FaCar, FaUmbrella } from 'react-icons/fa';

function Services() {
  const services = [
    {
      image: "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg",
      heading: "Luxury Travel Packages",
      text: "Experience world-class luxury with our carefully curated travel packages. From private jets to exclusive resorts, we handle every detail.",
      icon: <FaPlane />,
      features: [
        "Private jet arrangements",
        "Luxury accommodation",
        "Personal concierge",
        "VIP airport services"
      ],
      price: "From $5,000",
      link: "/luxury-travel"
    },
    {
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      heading: "Premium Hotels & Resorts",
      text: "Stay at the world's finest hotels and resorts. We partner with top-rated properties to ensure an unforgettable experience.",
      icon: <FaHotel />,
      features: [
        "5-star accommodations",
        "Exclusive amenities",
        "Spa & wellness packages",
        "Gourmet dining"
      ],
      price: "From $300/night",
      link: "/hotels"
    },
    {
      image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg",
      heading: "Adventure Expeditions",
      text: "Embark on thrilling adventures across the globe. Our expert guides ensure safe and exciting experiences in the world's most remarkable locations.",
      icon: <FaRoute />,
      features: [
        "Expert local guides",
        "Safety equipment",
        "Custom itineraries",
        "Photography sessions"
      ],
      price: "From $2,500",
      link: "/adventures"
    },
    {
      image: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg",
      heading: "Visa & Documentation",
      text: "Hassle-free visa and travel documentation services. We handle all the paperwork while you plan your dream vacation.",
      icon: <FaPassport />,
      features: [
        "Visa processing",
        "Document preparation",
        "Express services",
        "Legal assistance"
      ],
      price: "From $200",
      link: "/visa-services"
    },
    {
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg",
      heading: "Luxury Transportation",
      text: "Travel in style with our premium transportation services. From luxury cars to private helicopters, we've got you covered.",
      icon: <FaCar />,
      features: [
        "Luxury vehicles",
        "Professional drivers",
        "24/7 availability",
        "Custom routes"
      ],
      price: "From $150/day",
      link: "/transportation"
    },
    {
      image: "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg",
      heading: "Travel Insurance",
      text: "Comprehensive travel insurance packages for worry-free adventures. Stay protected throughout your journey.",
      icon: <FaUmbrella />,
      features: [
        "Medical coverage",
        "Trip cancellation",
        "Lost baggage",
        "24/7 assistance"
      ],
      price: "From $50",
      link: "/insurance"
    }
  ];

  return (
    <div className="service">
      <h1>Our Premium Services</h1>
      <p>Discover our range of exclusive travel services designed to create unforgettable experiences</p>
      <div className="servicecard">
        {services.map((service, index) => (
          <ServicesData
            key={index}
            image={service.image}
            heading={service.heading}
            text={service.text}
            icon={service.icon}
            features={service.features}
            price={service.price}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;