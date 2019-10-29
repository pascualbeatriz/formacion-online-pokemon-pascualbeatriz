import React, {Fragment} from 'react';
import ListPokemons from '../ListPokemons';
import Filters from '../Filters';

const Home = props => {
  const {pokemons,query,getUserquery} = props;
    return (
      <Fragment>
     
        <Filters
          getUserquery = {getUserquery}
          query = {query}
          />
             
          <ListPokemons
          pokemons = {pokemons}
          query = {query}
          /> 
      </Fragment>
    );
};



export default Home;