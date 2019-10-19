import React from 'react';

const Filters = props => {
const {getUserquery, query} = props;  
  return (
  <label htmlFor="intro__name" className="filter_name"> 
    <input id= "intro__name" type="text" className="intro__name" onChange={getUserquery} value={query}/>
  </label>  

  );
};

export default Filters;