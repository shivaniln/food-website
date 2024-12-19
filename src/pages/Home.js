import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './Home.css';  // Import a custom CSS file for styling

const Home = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook
  const [currentIndex, setCurrentIndex] = useState(0); // State to handle carousel slide
  const promotions = [
    { text: "20% off on your first order!" },
    { text: "Try our new Mango Lassi - Limited time offer" },
    { text: "Get a free appetizer with every main course!" }
  ]; // Sample promotion items

  // Carousel auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [promotions.length]);

  const handleExploreClick = () => {
    navigate('/menu');  // Navigate to the menu page when button is clicked
  };

  return (
    <div className="home-container">
      <header className="banner">
        <h1>Welcome to Sauvage!</h1>
        <p>Your favorite Indian restaurant serving a wide variety of delicious dishes!</p>
        <button className="cta-button" onClick={handleExploreClick}>
          Explore Menu
        </button>
      </header>

      {/* Promotions Carousel */}
      <section className="promotions">
        <h2>Seasonal Promotions</h2>
        <div className="carousel">
          <p>{promotions[currentIndex].text}</p>
        </div>
      </section>

      <section className="services">
        <div className="service">
          <h2>Quick Delivery</h2>
          <p>Fast and reliable food delivery of your favorite Indian delicacies at your doorstep.</p>
        </div>
        <div className="service">
          <h2>Fresh Ingredients</h2>
          <p>We use only the freshest, hand-picked ingredients for authentic Indian flavors.</p>
        </div>
        <div className="service">
          <h2>Great Prices</h2>
          <p>Enjoy delicious Indian food at prices that won't break the bank.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
