// Cart.js
import React, { useState } from 'react';
import './Cart.css'; // Import Cart CSS file

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="item">
        <p>Item Name: Roasted Vegetable Quiche Ingredient Kit</p>
        <p>Quantity: {quantity} serving</p>
        <button onClick={increaseQuantity}>+</button>
        <button onClick={decreaseQuantity}>-</button>
      </div>
      <button className="buy-now-btn">Buy Now</button>
    </div>
  );
};

export default Cart;
