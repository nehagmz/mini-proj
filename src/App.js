// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import WellnessPage from './components/WellnessPage';
import VegetarianPage from './components/VegetarianPage';
import FastAndEasyPage from './components/FastAndEasyPage';
import DessertsPage from './components/DessertsPage';
import RegularPage from './components/RegularPage';
import BreakfastPage from './components/BreakfastPage';
import AcaiBowlPage from './components/AcaiBowlPage';
import RoastedVegetableQuichePage from './components/RoastedVegetableQuichePage';
import GreekSaladPage from './components/GreekSaladPage';
import LentilSoupPage from './components/LentilSoupPage';
import Cart from './components/Cart';
import Orders from './components/Orders';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li> 
            <li>
              <Link to="/wellness">Wellness</Link>
            </li>
            <li>
              <Link to="/vegetarian">Vegetarian</Link>
            </li>
            <li>
              <Link to="/fastandeasy">Fast & Easy</Link>
            </li>
            <li>
              <Link to="/desserts">Desserts</Link>
            </li>
            <li>
              <Link to="/regular">Regular</Link>
            </li>
            <li>
              <Link to="/breakfast">Breakfast</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/home" exact component={HomePage} />
            <Route path="/wellness" component={WellnessPage} />
            <Route path="/vegetarian" component={VegetarianPage} />
            <Route path="/fastandeasy" component={FastAndEasyPage} />
            <Route path="/desserts" component={DessertsPage} />
            <Route path="/regular" component={RegularPage} />
            <Route path="/acai-bowl" component={AcaiBowlPage} />
            <Route path="/roasted-vegetable-quiche" component={RoastedVegetableQuichePage} />
            <Route path="/greek-salad" component={GreekSaladPage} />
            <Route path="/lentil-soup" component={LentilSoupPage} />
            <Route path="/breakfast" component={BreakfastPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/orders" component={Orders} /> 
            <Redirect to="/" />
          </Switch>
        </div>
        <div className="big-image"></div>
      </div>
    </Router>
  );
}

export default App;

