import React from 'react';

const CocktailItem = ({ drink }) => {
  return (
    <div className='Card'>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <h1>{drink.strDrink}</h1>
      <p className='type'>{drink.strAlcoholic}</p>
      <p>{drink.strIngredient1}</p>
      <p>{drink.strIngredient2}</p>
      <p>{drink.strIngredient3}</p>
      <p>{drink.strIngredient4}</p>
      <p>{drink.strIngredient5}</p>
    </div>
  );
};

export default CocktailItem;
