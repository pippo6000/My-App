import React, { useContext, useEffect } from 'react';

import DrinkContext from '../../context/drink/DrinkContext';
import CocktailItem from './CocktailItem';
import Spinner from '../layout/Spinner';

const Cocktails = () => {
  const drinkContext = useContext(DrinkContext);

  const { drinks, random, loading, getRandom } = drinkContext;

  useEffect(() => {
    getRandom();
    //eslint-disable-next-line
  }, []);

  if (random === null && loading) {
    return <Spinner />;
  }

  if (drinks === null && random === null) {
    return <h3>No search results...</h3>;
  }

  return (
    <div className='grid-2'>
      {random === null && !loading
        ? drinks.map((drink) => <CocktailItem drink={drink} />)
        : random.map((drink) => <CocktailItem drink={drink} />)}
    </div>
  );
};

export default Cocktails;
