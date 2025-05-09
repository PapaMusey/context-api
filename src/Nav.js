import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
  // We want to use the values from Movie context overhere
const [movies, setMovies] = useContext(MovieContext)

  return (
    <div>
      <h3>Dev Andy</h3>
      <p>List of Movies: </p>
      {/* {value} */}
      {movies.length} 
    </div>
  )
}

export default Nav
