import React from 'react';
import './Menu.css';

// Corrected paths to the images
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

// Food items with imported images
const foodItems = [
  { name: 'Pizza', description: 'Cheese and tomato pizza with a crispy base', price: 499, image: pizzaImage },
  { name: 'Burger', description: 'A juicy burger with lettuce, tomato, and cheese', price: 199, image: burgerImage },
  { name: 'Biryani', description: 'Aromatic rice cooked with spices and marinated chicken', price: 399, image: biryaniImage },
  { name: 'Butter Chicken', description: 'Tender chicken cooked in a rich, creamy tomato sauce', price: 350, image: butterChickenImage },
  { name: 'Masala Dosa', description: 'Crispy dosa filled with spiced potatoes and served with chutneys', price: 120, image: masalaDosaImage },
  { name: 'Paneer Tikka', description: 'Grilled paneer marinated in spices, served with mint chutney', price: 220, image: paneerTikkaImage },
  { name: 'Chole Bhature', description: 'Spicy chickpeas served with deep-fried bread', price: 180, image: choleBhatureImage },
  { name: 'Aloo Paratha', description: 'Stuffed flatbread with spiced mashed potatoes', price: 150, image: alooParathaImage },
  { name: 'Dal Tadka', description: 'Lentils cooked with aromatic spices and tempered with ghee', price: 100, image: dalTadkaImage },
  { name: 'Rogan Josh', description: 'Slow-cooked lamb in a spicy red gravy', price: 450, image: roganJoshImage },
  { name: 'Vada Pav', description: 'Spicy potato fritter served in a pav bun with chutneys', price: 50, image: vadaPavImage },
  { name: 'Samosa', description: 'Fried pastry filled with spiced potatoes and peas', price: 30, image: samosaImage },
  { name: 'Tandoori Chicken', description: 'Chicken marinated in yogurt and spices, grilled to perfection', price: 350, image: tandooriChickenImage },
  { name: 'Pav Bhaji', description: 'A spicy vegetable mash served with buttered bread', price: 120, image: pavBhajiImage },
  { name: 'Pani Puri', description: 'Crispy puris filled with spicy tamarind water and potatoes', price: 70, image: paniPuriImage },
];

const Menu = () => {
  return (
    <div className="menu-page">
      <h1>Menu - Sauvage</h1>
      <div className="menu-items">
        {foodItems.map((item, index) => (
          <div key={index} className="food-card">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
