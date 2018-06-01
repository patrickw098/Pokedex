import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import { requestPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { getPokemon, getAllPokemon } from './util/api_util';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.requestPokemon = requestPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.getPokemon = getPokemon;
  window.getAllPokemon = getAllPokemon;
  ReactDOM.render(<Root store={store} />, rootEl);
});
