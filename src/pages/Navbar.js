import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ menuItems }) => {
  const [searchQuery, setSearchQuery] = useState('');  // State to store search query

  // Filter menu items based on search query
  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Sauvage</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>

      {/* Search Bar */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search Menu"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
        />
      </div>

      {/* Display filtered menu items dynamically */}
      {searchQuery && (
        <div className="filtered-results">
          {filteredMenuItems.length > 0 ? (
            filteredMenuItems.map((item) => (
              <div key={item.id} className="menu-item">
                <Link to={`/menu/${item.id}`}>{item.name}</Link>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
