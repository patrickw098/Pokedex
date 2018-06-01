import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon_index_container'
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import ItemDetailContainer from './item_detail_container'

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <Route path="/" component={PokemonIndexContainer} />
        <Route path="/pokemon/:pokemonId/items" component={ItemDetailContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
