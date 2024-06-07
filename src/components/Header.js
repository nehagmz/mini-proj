// Header.js

import React from 'react';
import logo from '../logo.png'; // Import the logo file
import './Header.css'; // Import CSS file for styling

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">Effortless Eats!</h1>
    </header>
  );
}

export default Header;
