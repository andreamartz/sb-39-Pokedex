import React from 'react';
import Pokedex from './Pokedex';
// import Pokecard from './Pokecard';
import pokemon from './pokemon';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
