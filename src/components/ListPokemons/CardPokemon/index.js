import React from 'react';

const CardPokemon = props => {
const {name,image,types, pokemonEvolution} = props; 
  return(
    <div className="container__pokemon">
      <p className="poke__name">{name}</p>
      <img src={image} alt={name} className="poke__img"/>
      <p className="poke__name">{`${types[0]} ${types[1]}`}</p>
    </div>
);
};


export default CardPokemon;