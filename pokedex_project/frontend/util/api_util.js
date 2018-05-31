export const getAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
};
