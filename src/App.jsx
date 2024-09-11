// App.js
import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import Coin from './Components/superCoin';
import './App.css'
const App = () => {
  return (
 
      <div>
        <h1 className='app-heading'>E-Commerce Application</h1>
        <ProductList/>
        <ShoppingCart/>
        <Coin/>
      </div>

  );
};

export default App;
