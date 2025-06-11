import React, { useState, useEffect } from 'react';
import './StatisticsStyles.css';
import { FaGlobeAmericas, FaSmile, FaAward, FaPlane } from 'react-icons/fa';

function Statistics() {
  const [counts, setCounts] = useState({
    destinations: 0,
    customers: 0,
    awards: 0,
    trips: 0
  });

  useEffect(() => {
    const targetCounts = {
      destinations: 100,
      customers: 5000,
      awards: 50,
      trips: 1000
    };

    const duration = 2000; // 2 seconds
    const frameRate = 50; // updates per second
    const totalFrames = duration / (1000 / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      if (frame <= totalFrames) {
        setCounts({
          destinations: Math.floor(targetCounts.destinations * progress),
          customers: Math.floor(targetCounts.customers * progress),
          awards: Math.floor(targetCounts.awards * progress),
          trips: Math.floor(targetCounts.trips * progress)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="statistics-container">
      <div className="stat-grid">
        <div className="stat-card">
          <FaGlobeAmericas className="stat-icon" />
          <h3>{counts.destinations}+</h3>
          <p>Destinations</p>
        </div>

        <div className="stat-card">
          <FaSmile className="stat-icon" />
          <h3>{counts.customers}+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <FaAward className="stat-icon" />
          <h3>{counts.awards}+</h3>
          <p>Travel Awards</p>
        </div>

        <div className="stat-card">
          <FaPlane className="stat-icon" />
          <h3>{counts.trips}+</h3>
          <p>Trips Organized</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics; 