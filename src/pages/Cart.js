import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { name: 'Butter Chicken', price: 300, quantity: 1 },
    { name: 'Paneer Tikka', price: 200, quantity: 2 },
    { name: 'Biryani', price: 350, quantity: 1 },
    { name: 'Chole Bhature', price: 150, quantity: 1 },
    { name: 'Masala Dosa', price: 120, quantity: 2 },
    { name: 'Pav Bhaji', price: 100, quantity: 1 },
    { name: 'Aloo Tikki', price: 80, quantity: 3 },
    { name: 'Samosa', price: 50, quantity: 4 },
  ]);

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to handle item quantity changes
  const handleQuantityChange = (index, change) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += change;
    if (newCartItems[index].quantity < 1) {
      newCartItems[index].quantity = 1; // Prevent quantity from going below 1
    }
    setCartItems(newCartItems);
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(index, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(index, 1)}>+</button>
            </div>
            <div className="item-total">
              <p>Total: ₹{item.price * item.quantity}</p>
            </div>
            <button className="remove-item" onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Price: ₹{totalPrice}</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
