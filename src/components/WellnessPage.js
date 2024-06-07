// WellnessPage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './WellnessPage.css'; // Import your CSS file for WellnessPage

function WellnessPage() {
  return (
    <div className="wellness-page">
      <h2>NOURISH AND FLOURISH</h2>
      <div className="dish-grid">
        {/* Wrap each dish with Link component */}
        <Link to="/acai-bowl" className="dish">Acai Bowl</Link>
        <Link to="/roasted-vegetable-quiche" className="dish">Roasted Vegetable Quiche</Link>
        <Link to="/greek-salad" className="dish">Greek Salad</Link>
        <Link to="/lentil-soup" className="dish">Lentil Soup</Link>
        {/* Add more dish elements as needed */}
      </div>
    </div>
  );
}

export default WellnessPage;

