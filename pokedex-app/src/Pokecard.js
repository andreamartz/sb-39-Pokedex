import React from 'react';
// import 'Pokecard.css';

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = ({ name, id, type, exp }) => {
  const imgSrc = `${POKE_API}${id}.png`;
  return (
    <div className="Pokecard">
      <h5 className="Pokecard-title">{name}</h5>
      <img className="Pokecard-img" src={imgSrc} alt=""></img>
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  )
}
export default Pokecard;