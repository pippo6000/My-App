import React from 'react';
import './css/style.css';

import Cocktails from './components/drinks/Cocktails';
import Navbar from './components/layout/Navbar';

import DrinkState from './context/drink/DrinkState';

function App() {
  return (
    <DrinkState>
      <Navbar />
      <div className='container'>
        <Cocktails />
      </div>
    </DrinkState>
  );
}

export default App;
