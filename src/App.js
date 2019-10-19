import React from 'react';
import {getDataApi} from './services/Fetch';
import ListPokemons from './components/ListPokemons';
import Filters from './components/Filters';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons:[],
      query:''
    };
    this.getUserquery =  this.getUserquery.bind(this);
  }

  componentDidMount(){
    this.getPokemons();
  }

  getUserquery(event){
    const gapText = event.currentTarget.value;

    this.setState({
      query:gapText
    })
  }

  getPokemons(){
    getDataApi()
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
    const {pokemons,query} = this.state;
      return (
        <div className="App">
          <header className="header">
            <h1 className="app__title">Título app Pokemon</h1>
          </header>
          <Filters
          getUserquery = {this.getUserquery}
          query = {query}
          />
             
          <ListPokemons
          pokemons = {pokemons}
          query = {query}
          />
      
        </div>
      );
    }
}

export default App;
