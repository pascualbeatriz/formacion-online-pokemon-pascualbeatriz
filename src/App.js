import React from 'react';
import {getDataApi, getDataEvolution} from './services/Fetch';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons:[],
      pokemonEvolution:[],
      query:''
    };
    this.getUserquery =  this.getUserquery.bind(this);
  }

  componentDidMount(){
    this.getPokemons();
    this.getEvol();
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
          // console.log(pokemonData);
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

        })  
    });
  }

  getEvol (){
    getDataEvolution()
    .then(dataEvolutionPoke => {
      for(let evolution of dataEvolutionPoke.results)
      fetch(evolution.url)
        .then(responseEvolPoke => responseEvolPoke.json())
          .then(evolData =>{

            const pokemonEvolutionData = {
              id: evolData.id,
              name: evolData.chain.species.name,
              evolutionOne: evolData.chain.evolves_to[0].species.name,
              // evolutionTwo: evolData.chain.evolves_to[0].evolves_to[0].species.name
            };
            // const newId = evolData.map((item,index) => {
            //   return {...item, id:index};
            // });

            this.setState({
              pokemonEvolution: pokemonEvolutionData
            });   
          })
    })
  }
 


  render() {
    const {pokemons,query, pokemonEvolution} = this.state;
    console.log(pokemonEvolution);
      return (
        <div className="App">
          <header className="header">
            <h1 className="app__title">Título app Pokemon</h1>
          </header>
          <Switch>
            <Route exact path="/" render = { () => {
              return (
                <Home 
                  getUserquery = {this.getUserquery}
                  query = {query}
                  pokemons = {pokemons}
                  pokemonEvolution = {pokemonEvolution}
                />
                );
              }}
            />
            <Route path="/poke-detail/:id" render = {(routerProps) => {
              return (
                <PokeDetail
             
                routerProps = {routerProps}
                pokemons = {pokemons}
                pokemonEvolution = {pokemonEvolution}
                />
              );
            }}
            />
          </Switch>
        </div>
      );
    }
}

export default App;
