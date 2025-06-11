import React, { useState, useEffect } from 'react';
import './TestimonialsStyles.css';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "The trip to Bali was absolutely magical! Every detail was perfectly planned, from the luxury accommodations to the private tours. The local experiences and cultural immersion made this journey truly unforgettable. I can't wait to book my next adventure!",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    title: "Travel Enthusiast",
    trip: "Bali Cultural Explorer",
    linkedin: "sarah-johnson"
  },
  {
    name: "David Chen",
    location: "Singapore",
    text: "Our family vacation to Japan was beyond expectations! The cherry blossom season was perfectly timed, and the mix of modern cities and traditional temples was incredible. The local guides were knowledgeable and friendly, making our experience truly authentic.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    title: "Family Traveler",
    trip: "Japanese Cherry Blossom Tour",
    linkedin: "david-chen"
  },
  {
    name: "Emma Thompson",
    location: "London, UK",
    text: "The African safari experience was breathtaking! From the luxurious eco-lodges to the thrilling game drives, every moment was filled with wonder. Watching the sunset over the Serengeti while sipping champagne was a dream come true.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    title: "Adventure Seeker",
    trip: "African Safari Expedition",
    linkedin: "emma-thompson"
  },
  {
    name: "Marco Rossi",
    location: "Milan, Italy",
    text: "The Maldives luxury package exceeded all expectations! The overwater villa was stunning, and the private snorkeling tours revealed an underwater paradise. The staff's attention to detail made this honeymoon absolutely perfect.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    title: "Luxury Travel Enthusiast",
    trip: "Maldives Paradise Escape",
    linkedin: "marco-rossi"
  },
  {
    name: "Sophia Lee",
    location: "Seoul, South Korea",
    text: "The Northern Lights tour in Iceland was magical! Staying in the glass igloo and watching the aurora dance across the sky was surreal. The hot springs, ice caves, and volcanic landscapes made this trip an incredible adventure.",
    rating: 5,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
    title: "Nature Explorer",
    trip: "Northern Lights Explorer",
    linkedin: "sophia-lee"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Travelers Say</h2>
      <p className="testimonials-subtitle">Real stories from real adventurers</p>
      
      <div className="testimonials-wrapper">
        <button className="nav-button prev" onClick={() => paginate(-1)}>
          <FaChevronLeft />
        </button>
        
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="testimonial-card"
          >
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <div className="testimonial-trip">{testimonials[current].trip}</div>
              <p className="testimonial-text">{testimonials[current].text}</p>
              <div className="testimonial-rating">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  className="author-image" 
                />
                <div className="author-info">
                  <h4>{testimonials[current].name}</h4>
                  <p className="author-title">{testimonials[current].title}</p>
                  <p className="author-location">{testimonials[current].location}</p>
                  <a 
                    href={`https://linkedin.com/in/${testimonials[current].linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <FaLinkedin /> Connect
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="nav-button next" onClick={() => paginate(1)}>
          <FaChevronRight />
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${current === index ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 