import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  let result = values(state.entities.pokemon);
  return result;
};

export const selectPokemonItems = (state, ownProps) => {
  let itemsArr = state.entities.pokemon[ownProps.match.params.pokemonId].item_id;
  console.log(state.entities.pokemon[ownProps.match.params.pokemonId].item_id);
  let items = itemsArr.map( (el) => state.entities.item[el] );
  return items;
};
