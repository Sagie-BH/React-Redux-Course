import React, { useContext } from 'react';
import MovieContext from './MovieContext';

const NavBar = () => {
    const [movies, setMovies] = useContext(MovieContext)
  return <div className='topnav'>
    <li>Menu</li>
    <li>Home Page</li>
    <li>Movies Amount: {movies.length}</li>
  </div>;
};

export default NavBar;
