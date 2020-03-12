import React, { useReducer } from 'react';
import axios from 'axios';
import DrinkContext from './DrinkContext';
import DrinkReducer from './DrinkReducer';

import { GET_DRINKS, SET_RANDOM, DRINK_ERROR } from '../types';

const DrinkState = props => {
  const initialState = {
    drinks: null,
    random: null,
    error: null,
    loading: true
  };

  const [state, dispatch] = useReducer(DrinkReducer, initialState);

  // GET DRINKS
  const getDrinks = async name => {
    try {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      );
      dispatch({ type: GET_DRINKS, payload: res.data.drinks });
    } catch (err) {
      dispatch({
        type: DRINK_ERROR,
        payload: err.message
      });
    }
  };

  // GET RANDOM
  const getRandom = async () => {
    try {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );

      dispatch({ type: SET_RANDOM, payload: res.data.drinks });
    } catch (err) {
      dispatch({
        type: DRINK_ERROR,
        payload: err.message
      });
    }
  };

  return (
    <DrinkContext.Provider
      value={{
        drinks: state.drinks,
        random: state.random,
        error: state.error,
        loading: state.loading,
        getRandom,
        getDrinks
      }}
    >
      {props.children}
    </DrinkContext.Provider>
  );
};

export default DrinkState;
