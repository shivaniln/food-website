import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './Home.css';  // Import a custom CSS file for styling

const Home = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook

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
