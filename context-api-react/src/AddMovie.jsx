import React, { useContext, useState } from "react";
import MovieContext from "./MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

const updateName = e => {
    setName(e.target.value);
}
const updateRating = e => {
    setRating(e.target.value)
}

const addMovie = e =>{
    e.preventDefault();
    setMovies(prevMovies =>[
        ...prevMovies,
        {
            name: name,
            rating: rating,
            id: Math.floor(Math.random() * 100000)
        }
    ])
}

  return (
    <div>
        <h2>Add Movie</h2>
      <form onSubmit={addMovie}>
        <div className="container">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Add name.."
            onChange={updateName}/>
          <input
            type="text"
            name="rating"
            value={rating}
            placeholder="Add rating.."
            onChange={updateRating}/>
        </div>
        <button style={{margin: '30px'}}>Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
