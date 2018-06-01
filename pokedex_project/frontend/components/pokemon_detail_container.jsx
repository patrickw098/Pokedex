import React from 'react';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
  currentId: ownProps.match.params.pokemonId

});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (pokemon) => dispatch(requestPokemon(pokemon))
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
