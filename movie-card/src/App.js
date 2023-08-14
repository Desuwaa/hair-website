import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Jason Bourne',
      description: 'Skilled amnesiac operative Jason Bourne seeks truth, evades CIA, unravels past in intense action saga.',
      posterURL: 'https://i.ebayimg.com/images/g/2oQAAOSw7GVfyif3/s-l1600.jpg',
      rating: 8.5,
    },
    {
      title: 'Mission Impossible',
      description: 'Dead Reckoning" plot involves Ethan Hunt navigating intricate web of espionage, danger, and intrigue.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg',
      rating: 9.0,
    },
    {
      title: 'Knight and Day',
      description: 'This features whirlwind romance, unpredictable action, as couple eludes danger during global adventures.',
      posterURL: 'https://metadata-static.plex.tv/3/gracenote/3faffbeff06169fbd1382d4750bf82c6.jpg',
      rating: 8.0,
    },
    {
      title: 'The Mummy',
      description: 'This movie follows adventurers facing ancient curse, supernatural threats, and unraveling mysteries in action-packed archaeological horror.',
      posterURL: 'https://m.media-amazon.com/images/I/51IKzpRx16L.jpg',
      rating: 7.0,
    },
    // Add more movies as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (field, value) => {
    const filtered = movies.filter((movie) =>
      movie[field].toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;