import { GET_DRINKS, SET_RANDOM, DRINK_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_DRINKS:
      return {
        ...state,
        random: null,
        drinks: action.payload,
        loading: false
      };
    case SET_RANDOM:
      return {
        ...state,
        drinks: null,
        random: action.payload,
        loading: false
      };
    case DRINK_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
