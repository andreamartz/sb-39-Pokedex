import React from 'react';
import Pokecard from './Pokecard';
import pokemon from './pokemon';
import './Pokedex.css';

console.log("POKEMON: ", pokemon);
const Pokedex = ({ data=pokemon }) => {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {data.map(p => (
          <Pokecard 
            id={p.id} 
            name={p.name} 
            type={p.type} 
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  )
}

export default Pokedex;