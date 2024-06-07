import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import roastedVegImage from '../roastedveg.jpg'; 
import roastingImage from '../roasting.jpg'; 
import './RoastedVegetableQuichePage.css'; 

function RoastedVegetableQuichePage() {
  const [showPreparation, setShowPreparation] = useState(false);
  const history = useHistory(); 

  const togglePreparationPopup = () => {
    setShowPreparation(!showPreparation);
  };

  const addToCart = () => {
    history.push('/cart'); // Navigate to the cart component
  };

  return (
    <div className="quiche-page">
      <div className="quiche-image">
        <img src={roastedVegImage} alt="Roasted Vegetable" />
      </div>
      <h2 className="quiche-name">Roasted Vegetable Quiche</h2>
      <div className="quiche-content">
        <div className="quiche-recipe">
          <h3>Ingredients</h3>
          <p>2 (12-ounce) sheets frozen shortcrust pastry, or ready-rolled pie dough, partially thawed</p>
          <p>For the Vegetables:</p>
          <ul>
            <li>1.1 pounds (500 grams) butternut squash, peeled and cubed</li>
            <li>1 medium red onion, quartered</li>
            <li>1 medium red bell pepper, seeded and thickly sliced</li>
            <li>1 bunch asparagus, trimmed and cut into 2-inch pieces</li>
            <li>10 medium cherry tomatoes, halved</li>
            <li>1/4 cup olive oil</li>
            <li>Salt, to taste</li>
            <li>Freshly ground black pepper, to taste</li>
          </ul>
          <p>For the Quiche Mix:</p>
          <ul>
            <li>5 large eggs</li>
            <li>6 3/4 ounces (200 milliliters) whole milk</li>
            <li>3 1/2 ounces (100 milliliters) heavy cream (20 percent butterfat), or half-and-half</li>
            <li>1/3 cup grated Parmesan cheese</li>
            <li>1/4 cup grated Gruyère cheese</li>
            <li>1 tablespoon finely chopped flat-leaf parsley</li>
            <li>1/2 teaspoon sea salt</li>
          </ul>
        </div>
        <div className="quiche-image">
          <img src={roastingImage} alt="Roasting" />
        </div>
      </div>
      <button className="view-preparation-btn" onClick={togglePreparationPopup}>View Preparation</button>
      <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
      {showPreparation && (
        <div className="preparation-popup">
          <div className="preparation-popup-content">
            <h3>Prep: 20 mins</h3>
            <h3>Cook: 60 mins</h3>
            <h3>Total: 80 mins</h3>
            <h3>Servings: 6 servings</h3>
            <h3>Yield: 1 quiche</h3>
            <div className="preparation-steps">
              <h4>MAKE THE CRUST</h4>
              <ol>
                <li>Gather the ingredients.</li>
                <li>Preheat the oven to 350 F. Place a baking tray in the oven.</li>
                <li>Using the pastry, line the base and sides of a 10-inch tart pan with a removable bottom. Gently press the pastry up against the sides, making sure there are no air bubbles. Trim to fit and prick the base with a fork. Place in the freezer for 15 minutes or until firm.</li>
                <li>Line the pastry with foil and add baking beads or uncooked rice to blind bake.</li>
                <li>Place the tin on the preheated baking tray in the oven and bake for 10 to 15 minutes or until golden.</li>
                <li>Carefully remove the foil and baking beads and set the pastry shell aside to cool.</li>
              </ol>
              <h4>ROAST THE VEGETABLES</h4>
              <ol>
                <li>Spread out the butternut squash, red onion, red bell pepper, asparagus, and cherry tomatoes in a large baking dish. Coat well with oil and season with salt and pepper.</li>
                <li>Roast in the oven for about 25 to 30 minutes until very slightly charred. Set aside and cool slightly; separate the onion layers.</li>
              </ol>
              <h4>MAKE THE FILLING</h4>
              <ol>
                <li>In a large mixing bowl, whisk together the eggs with the milk and cream. Stir in the cheeses, parsley, and salt.</li>
                <li>Transfer the egg mixture to a liquid measuring cup with a spout.</li>
              </ol>
              <h4>ASSEMBLE & BAKE THE QUICHE</h4>
              <ol>
                <li>Spread the roasted vegetables over the bottom of the pastry shell (which should be on the baking tray to catch any drips during baking).</li>
                <li>Carefully pour the egg mixture over top. Bake for 30 to 35 minutes or until just set.</li>
                <li>Let cool for a few minutes and serve warm or at room temperature.</li>
              </ol>
            </div>
            <button className="close-btn" onClick={togglePreparationPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoastedVegetableQuichePage;


