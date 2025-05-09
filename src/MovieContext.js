import React, { useState, createContext } from "react";

//inittiating the context,
export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
    //MovieProvider's job is to hold information and pass it down to the different components below {children} <Nav/> <MovieList/>
    <MovieContext.Provider value={'Hello'}>{props.children}</MovieContext.Provider>
  );
};


