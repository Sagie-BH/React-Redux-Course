import AddMovie from './AddMovie';
import './App.css';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import NavBar from './NavBar';

const App = () => {
  return (
      <MovieProvider>
      <div className="App">
        <NavBar />
        <AddMovie />
        <MovieList />
      </div>
      </MovieProvider>
  );
}

export default App;
