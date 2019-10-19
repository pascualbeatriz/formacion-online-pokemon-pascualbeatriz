import React from 'react';
import CardPokemon from './CardPokemon';


const ListPokemons = props => {
const {pokemons, query} = props;
  return (
    <ul className="pokemon__list">
    {pokemons
      .filter(pokeName =>(pokeName.name.toUpperCase().includes(query.toUpperCase())))
      .map(pokemon =>(
        <li className="pokemon__item" key={pokemon.id}>
          <CardPokemon
          name = {pokemon.name}
          image = {pokemon.image}
          types = {pokemon.types}
          />
        </li>
      ))
    } 
    </ul>
  )
}; 

export default ListPokemons;