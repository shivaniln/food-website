import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './pages/Footer';

// Initial food items (same as in Menu.js)
import pizzaImage from './image/pizza.jpg';
import burgerImage from './image/burger.jpg';
import biryaniImage from './image/biryani.jpg';
import butterChickenImage from './image/butter_chicken.jpg';
import masalaDosaImage from './image/masala_dosa.jpg';
import paneerTikkaImage from './image/paneer_tikka.jpg';
import choleBhatureImage from './image/chole_bhature.jpg';
import alooParathaImage from './image/aloo_paratha.jpg';
import dalTadkaImage from './image/dal_tadka.jpg';
import roganJoshImage from './image/rogan_josh.jpg';
import vadaPavImage from './image/vada_pav.jpg';
import samosaImage from './image/samosa.jpg';
import tandooriChickenImage from './image/tandoori_chicken.jpg';
import pavBhajiImage from './image/pav_bhaji.jpg';
import paniPuriImage from './image/pani_puri.jpg';

// Initial food items
const initialFoodItems = [
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

const App = () => {
  const [foodItems, setFoodItems] = useState(initialFoodItems);

  // Create - Add a new food item
  const addFoodItem = () => {
    const newFoodItem = {
      id: foodItems.length + 1,
      name: 'New Dish',
      description: 'A new delicious dish!',
      price: 200,
      image: pizzaImage, // You can add a default image
    };
    setFoodItems([...foodItems, newFoodItem]);
  };

  // Update - Edit a food item
  const updateFoodItem = (id) => {
    const updatedItems = foodItems.map(item =>
      item.id === id ? { ...item, price: item.price + 10 } : item
    );
    setFoodItems(updatedItems);
  };

  // Delete - Remove a food item
  const deleteFoodItem = (id) => {
    const filteredItems = foodItems.filter(item => item.id !== id);
    setFoodItems(filteredItems);
  };

  return (
    <Router>
      <Navbar menuItems={foodItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/menu" 
          element={<Menu 
            foodItems={foodItems}
            addFoodItem={addFoodItem}
            updateFoodItem={updateFoodItem}
            deleteFoodItem={deleteFoodItem} 
          />} 
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
