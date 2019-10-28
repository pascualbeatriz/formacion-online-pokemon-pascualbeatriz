import React from 'react';
import CardPokemon from './CardPokemon';
import {Link} from 'react-router-dom';


const ListPokemons = props => {
const {pokemons, pokemonEvolution, query} = props;
  return (
    <ul className="pokemon__list">
    {pokemons
      .filter(pokeName =>(pokeName.name.toUpperCase().includes(query.toUpperCase())))
      .map(pokemon =>(
        <li className="pokemon__item" key={pokemon.id}>
          <Link to={`/poke-detail/${pokemon.id}`} className="pokemon__List-link">
          <CardPokemon
          pokemonEvolution = {pokemonEvolution}
          name = {pokemon.name}
          image = {pokemon.image}
          types = {pokemon.types}
          />
          </Link>
        </li>
      ))
    } 
    </ul>
  )
}; 

export default ListPokemons;