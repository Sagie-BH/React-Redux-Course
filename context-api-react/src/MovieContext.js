import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            id: Math.floor(Math.random() * 1000000),
            name: 'Shrek',
            rating: 100
        },
        {
            id: Math.floor(Math.random() * 1000000),
            name: 'Matrix 4',
            rating: 10
        },
        {
            id: Math.floor(Math.random() * 1000000),
            name: 'Inception',
            rating: 99
        },
        {
            id: Math.floor(Math.random() * 1000000),
            name: 'James Bond',
            rating: 70
        },
        {
            id: Math.floor(Math.random() * 1000000),
            name: 'Spider-Man',
            rating: 110
        },
        {
            id: Math.floor(Math.random() * 1000000),
            name: 'Jack Ass',
            rating: 1000
        }
    ]);
    return <div>
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    </div>;
};

export default MovieContext;
