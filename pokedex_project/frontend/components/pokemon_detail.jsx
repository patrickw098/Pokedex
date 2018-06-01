import React from 'react';
import { Link } from 'react-router-dom';

class PokemonDetail extends React.Component {


  componentDidMount () {
    this.props.requestPokemon(this.props.currentId);
  }

  componentWillReceiveProps (newProps) {
    const newId = newProps.match.params.pokemonId;

    if (newId !== this.props.currentId) {
      this.props.requestPokemon(newId);
      }
      // this.setState({
      //   id: newId,
      //   name: newProps.pokemon[newId].name,
      //   attack: newProps.pokemon[newId].attack
      // });
  }


  render () {

    if (this.props.pokemon === undefined) {
      return (<h1>Loading now!</h1>);
    }

    const { pokemon } = this.props;


    return (
      <div className="pokemon-container"><span><Link to="/">&times;</Link></span>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image_url}></img>
        <ul>
           <li>Attack: {pokemon.attack}</li>
           <li>Defense: {pokemon.defense}</li>
           <li>Type: {pokemon.poke_type}</li>
           <Link to={`/pokemon/${pokemon.id}/items`}>Show Items</Link>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
