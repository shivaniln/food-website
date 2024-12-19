import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './Home.css';  // Import a custom CSS file for styling


import pizzaImage from '../image/pizza.jpg';
import burgerImage from '../image/burger.jpg';
import biryaniImage from '../image/biryani.jpg';
import butterChickenImage from '../image/butter_chicken.jpg';
import masalaDosaImage from '../image/masala_dosa.jpg';
import paneerTikkaImage from '../image/paneer_tikka.jpg';
import choleBhatureImage from '../image/chole_bhature.jpg';
import alooParathaImage from '../image/aloo_paratha.jpg';
import dalTadkaImage from '../image/dal_tadka.jpg';
import roganJoshImage from '../image/rogan_josh.jpg';
import vadaPavImage from '../image/vada_pav.jpg';
import samosaImage from '../image/samosa.jpg';
import tandooriChickenImage from '../image/tandoori_chicken.jpg';
import pavBhajiImage from '../image/pav_bhaji.jpg';
import paniPuriImage from '../image/pani_puri.jpg';


const Home = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook
  const [currentIndex, setCurrentIndex] = useState(0); // State to handle carousel slide
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // Sample menuItems array with images
  const menuItems = [
    { id: 1, name: 'Pizza', description: 'Cheese and tomato pizza with a crispy base', price: 499, image: pizzaImage },
  { id: 2, name: 'Burger', description: 'A juicy burger with lettuce, tomato, and cheese', price: 199, image: burgerImage },
  { id: 3, name: 'Biryani', description: 'Aromatic rice cooked with spices and marinated chicken', price: 399, image: biryaniImage },
  { id: 4, name: 'Butter Chicken', description: 'Tender chicken cooked in a rich, creamy tomato sauce', price: 350, image: butterChickenImage },
  { id: 5, name: 'Masala Dosa', description: 'Crispy dosa filled with spiced potatoes and served with chutneys', price: 120, image: masalaDosaImage },
  { id: 6, name: 'Paneer Tikka', description: 'Grilled paneer marinated in spices, served with mint chutney', price: 220, image: paneerTikkaImage },
  { id: 7, name: 'Chole Bhature', description: 'Spicy chickpeas served with deep-fried bread', price: 180, image: choleBhatureImage },
  { id: 8, name: 'Aloo Paratha', description: 'Stuffed flatbread with spiced mashed potatoes', price: 150, image: alooParathaImage },
  { id: 9, name: 'Dal Tadka', description: 'Lentils cooked with aromatic spices and tempered with ghee', price: 100, image: dalTadkaImage },
  { id: 10, name: 'Rogan Josh', description: 'Slow-cooked lamb in a spicy red gravy', price: 450, image: roganJoshImage },
  { id: 11, name: 'Vada Pav', description: 'Spicy potato fritter served in a pav bun with chutneys', price: 50, image: vadaPavImage },
  { id: 12, name: 'Samosa', description: 'Fried pastry filled with spiced potatoes and peas', price: 30, image: samosaImage },
  { id: 13, name: 'Tandoori Chicken', description: 'Chicken marinated in yogurt and spices, grilled to perfection', price: 350, image: tandooriChickenImage },
  { id: 14, name: 'Pav Bhaji', description: 'A spicy vegetable mash served with buttered bread', price: 120, image: pavBhajiImage },
  { id: 15, name: 'Pani Puri', description: 'Crispy puris filled with spicy tamarind water and potatoes', price: 70, image: paniPuriImage },
  ];
  const promotions = [
    { text: "20% off on your first order!" },
    { text: "Try our new Mango Lassi - Limited time offer" },
    { text: "Get a free appetizer with every main course!" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery)
  );

  const handleExploreClick = () => {
    navigate('/menu');
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

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>

      {/* Search Results */}
      {searchQuery && (
        <section className="search-results">
          <h2>Search Results</h2>
          <div className="search-results-list">
            {filteredMenuItems.length > 0 ? (
              filteredMenuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <img src={item.image} alt={item.name} className="menu-item-image" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p><strong>Price:</strong> ₹{item.price}</p>
                </div>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </section>
      )}

      {/* Promotions Carousel */}
      <section className="promotions">
        <h2>Seasonal Promotions</h2>
        <div className="carousel">
          <p>{promotions[currentIndex].text}</p>
        </div>
      </section>

      {/* Services */}
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
