import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { requestPokemon } from '../actions/pokemon_actions';
import { selectPokemonItems } from '../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
  items: selectPokemonItems(state, ownProps)
});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
