import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      const newItems = merge({}, state, action.payload.items);
      return newItems;
    default:
      return state;
  }
};

export default itemsReducer;
