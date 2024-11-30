import React from 'react';
import './AboutUs.css';

// Correct path for importing images
import chef1Image from '../image/chef1.jpg';
import chef2Image from '../image/chef2.jpg';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Sauvage</h1>
      <p>At Sauvage, we bring you the finest Indian cuisine, crafted with love and passion. Our team of expert chefs ensures every dish is prepared using the freshest ingredients and authentic Indian flavors.</p>
      
      <div className="team">
        <div className="team-member">
          <img src={chef1Image} alt="Chef Sanjeev Kapoor" />
          <h3>Sanjeev Kapoor</h3>
          <p>Head Chef - Known for his mastery in Indian cuisine, Chef Kapoor has been a pioneer in bringing Indian flavors to the global stage.</p>
        </div>
        <div className="team-member">
          <img src={chef2Image} alt="Chef Vikas Khanna" />
          <h3>Vikas Khanna</h3>
          <p>Sous Chef - Chef Khanna is renowned for his modern take on traditional Indian dishes, offering both innovation and authenticity.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
