import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons:[]
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
        .then(pokemonData =>{
          
        })  
    });
  }


  render() {
    console.log('me estoy pintando');
    const {pokemons} = this.state;
      return (
        <div className="App">
        <ul className="pokemon__list">
          
          
        </ul>
        </div>
      );
    }
}

export default App;
