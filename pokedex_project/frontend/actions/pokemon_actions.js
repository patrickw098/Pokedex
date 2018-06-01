export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
import * as APIUtil from '../util/api_util';


export const receiveAllPokemon = (pokemon) => {
  console.log(pokemon);
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.getAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);


export const receivePokemon = (payload) => {
  return {
    type: RECEIVE_POKEMON,
    payload
  };
};

export const requestPokemon = (poke) => (dispatch) => {
  console.log('request made', poke);
  return  (
    APIUtil.getPokemon(poke)
    .then(payload => dispatch(receivePokemon(payload)))
  );
};
