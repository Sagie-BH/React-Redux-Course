import React, { useContext } from "react";
import MovieContext from "./MovieContext";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <h3>Movie List</h3>
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} rating={movie.rating} />
      ))}
    </div>
  );
};

export default MovieList;
