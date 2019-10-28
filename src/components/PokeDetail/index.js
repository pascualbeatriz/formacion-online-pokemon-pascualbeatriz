import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const PokeDetail = props => {
  const {routerProps, pokemons, pokemonEvolution} = props;
  const getId = parseInt(routerProps.match.params.id);
  // let pokemonDetail = pokemonEvolution.filter(pokemonDetail => pokemonDetail.id === getId);
  

    return(
      <Fragment>
        <Link to="/" className="listpokemons-Home-link"> Volver </Link>
        <ul className="detail__pokemon">
          <li className="detail__pokemon-name">
            <p className="name">Hola</p>
            <p className="detail-status">{`name: ${pokemonEvolution.id}`}</p>
            {/* <p className="detail-species">{`Species: ${species}`}</p>
            <p className="detail-origen">{`Origin: ${origin.name}`}</p>
            <p className="detail-episode">{`Episodes: ${episode.length}`}</p>
            <div className="container__detail-img">
              <img src={image} alt={`Imagen de ${name}`} className="detail_img"/> 
           </div> */}
          </li>
        </ul>
      </Fragment>
    );
  
};




export default PokeDetail;