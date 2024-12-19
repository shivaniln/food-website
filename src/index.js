import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // or './App.css', depending on your project structure
import App from './App'; // Main component for your app

// Render the app inside the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
