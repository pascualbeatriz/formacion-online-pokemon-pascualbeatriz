const getUrl= "https://pokeapi.co/api/v2/pokemon?limit=25";

const getDataApi = () => {
    return(
        fetch(getUrl)
          .then(response => response.json())
    );
};

export {getDataApi};
