import React, { useContext, useState } from 'react';

import DrinkContext from '../../context/drink/DrinkContext';

const Navbar = () => {
  const drinkContext = useContext(DrinkContext);

  const { getRandom, getDrinks } = drinkContext;

  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const search = () => {
    getDrinks(value);
  };

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className='fas fa-cocktail' /> My-Cocktail
      </h1>
      <ul>
        <li>
          <form onChange={search}>
            <input
              type='text'
              placeholder='Name'
              name='name'
              onChange={handleChange}
              value={value}
            />
          </form>
        </li>
        <li
          className='button'
          onClick={() => {
            getRandom();
            setValue('');
          }}
        >
          Random Coktail
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
