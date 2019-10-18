import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons:[],
      pokemonInf:[]
    };
  }

  componentDidMount(){
    this.getPokemons();
  }

  getPokemons(){
    const getUrl= "https://pokeapi.co/api/v2/pokemon?limit=25";

    fetch(getUrl)
      .then(response => response.json())
        .then(data => {
           for(let pokemonList of data.results)
    fetch(pokemonList.url)
      .then(response => response.json())
        .then(pokemonData => { 
          console.log(pokemonData);
          const arrTypes = [];
            for(let pokemonType of pokemonData.types){
              arrTypes.push(pokemonType.type.name)
            }
            
          const pokemonInf = {
            name:pokemonData.name,
            image:pokemonData.sprites.front_default,
            id:pokemonData.id,
            types:arrTypes
          };

          this.setState({
            pokemons: [...this.state.pokemons, pokemonInf]
          });            
            //   function getName(pokemonType, name){
            //     let getPokemonType= pokemonData.types;
            //     if (pokemonType.indexOf(name)===-1){
            //       arrTypes.push(name);
            //       console.log('El pokemon es: ' + name);
            //     } else if (pokemonType.indexOf(name) > -1){
            //       console.log(name + ' ya existe este pokemon');
            //     }
            //   };
            // let pokemonType = [];
            // getName(pokemonType,'name');
            // getName(pokemonType,'name');


        })  
    });
  }
 


  render() {
    console.log('me estoy pintando');
    const {pokemons} = this.state;
      return (
        <div className="App">
        <ul className="pokemon__list">
        {pokemons
          .map(pokemon =>(
            <li className="pokemon__item" key={pokemon.id}>
              <p className="poke__name">{pokemon.name}</p>
              <img src={pokemon.image} alt={pokemon.name} className="poke__img"/>
              <p className="poke__name">{`${pokemon.types[0]} ${pokemon.types[1]}`}</p>
            </li>
          ))
        }
          
          
        </ul>
        </div>
      );
    }
}

export default App;
