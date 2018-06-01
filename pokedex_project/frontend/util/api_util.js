export const getAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
};

export const getPokemon = (poke) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${poke}`
  });
};
