const getUrl= "https://pokeapi.co/api/v2/pokemon?limit=25";
const getEvolution = "http://pokeapi.salestock.net/api/v2/evolution-chain/";

const getDataApi = () => {
  return(
    fetch(getUrl)
      .then(response => response.json())
  );
};

const getDataEvolution = () => {
  return(
    fetch(getEvolution)
      .then(responseEvol => responseEvol.json())
  );
};

export {getDataApi, getDataEvolution};
