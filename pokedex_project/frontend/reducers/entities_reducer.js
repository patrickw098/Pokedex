import React from 'react';
import pokemonReducer from './pokemon_reducer';
import { combineReducers } from 'redux';
import itemsReducer from './items_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  item: itemsReducer
});


export default entitiesReducer;
