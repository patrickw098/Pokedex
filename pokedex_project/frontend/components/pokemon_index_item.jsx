import React from 'react';
import { NavLink } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <NavLink activeClassName="active" to={`/pokemon/${this.props.pokemon.id}`}>
        <li>
          <img src={this.props.pokemon.image_url} />
          {this.props.pokemon.name}
        </li>
      </NavLink>
    );
  }
}


export default PokemonIndexItem;
