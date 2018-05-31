import React from 'react';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

    this.toggleClick = this.toggleClick.bind(this);
  }
  // const { pokemon } = this.props;

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  toggleClick(e) {
    e.preventDefault();

    if (e.currentTarget.classList.contains("unclicked")) {
      e.currentTarget.classList.remove("unclicked");
      e.currentTarget.classList.add("clicked");
    } else {
      e.currentTarget.classList.add("unclicked");
      e.currentTarget.classList.remove("clicked");
    }

    this.setState();
  }

  render() {
    const { pokemon } = this.props;

    return (
      <ul className="pokemon-index-list">
      {pokemon.map((poke) => {
        return <li key={poke.id} className="unclicked" onClick={this.toggleClick}><img src={poke.image_url}></img>{poke.name}</li>;
      })};
      </ul>
    )};
}
// props = { pokemon: [] }
//
// pokemon = []
export default PokemonIndex;
