import React from 'react';

const Movie = ({name, rating}) => {
  return <div className='container'>
      <h3>Movie Name: {name}</h3>
      <h3>Movie Rating: {rating}</h3>
  </div>;
};

export default Movie;
