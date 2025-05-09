import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';
import {MovieProvider} from './MovieContext';

function App() {
  return (

    //Here, the Movie provider is providing information to the components below. The information it has access to is that which is in the value component of  <MovieContext.Provider value={'Hello'}> like so
    <MovieProvider>
    <div className="App">
      <Nav />
      <MovieList />
    </div>
    </MovieProvider>
  );
}

export default App;