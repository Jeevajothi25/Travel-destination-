import React, { useEffect, useRef } from 'react';

const UniverseBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create stars
    const createStars = () => {
      const count = 200;
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random properties
        star.style.setProperty('--random', Math.random());
        star.style.setProperty('--x', Math.random());
        star.style.setProperty('--y', Math.random());
        
        container.appendChild(star);
      }
    };

    // Create shooting stars
    const createShootingStars = () => {
      const count = 5;
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        // Random position and delay
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(star);
      }
    };

    // Create constellation lines
    const createConstellations = () => {
      const count = 8;
      const constellationsContainer = document.createElement('div');
      constellationsContainer.className = 'constellations';
      
      for (let i = 0; i < count; i++) {
        const line = document.createElement('div');
        line.className = 'constellation-line';
        
        // Random properties
        const length = 50 + Math.random() * 100;
        const angle = Math.random() * 360;
        
        line.style.width = `${length}px`;
        line.style.transform = `rotate(${angle}deg)`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.left = `${Math.random() * 100}%`;
        line.style.animationDelay = `${Math.random() * 4}s`;
        
        constellationsContainer.appendChild(line);
      }
      
      container.appendChild(constellationsContainer);
    };

    // Initialize all elements
    createStars();
    createShootingStars();
    createConstellations();

    // Cleanup function
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <>
      <div className="universe-background">
        <div className="nebula"></div>
        <div ref={containerRef} className="stars"></div>
      </div>
    </>
  );
};

export default UniverseBackground; 