import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  let result = values(state.entities.pokemon);
  return result;
};
