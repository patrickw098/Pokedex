import React from 'react';
import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON:
      const newState = merge({}, state, action.payload.pokemon);

      return newState;
    default:
      return state;
  }
};


export default pokemonReducer;
