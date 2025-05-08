import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "General Sights",
      price: "$10",
      id: 255617,
    },
    {
      name: "The Underdog",
      price: "$10",
      id: 287930,
    },
  ]);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price}/>
      ))}
    </div>
  );
};

export default MovieList;
