import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import MovieModal from '../components/MovieModal';
import moviesJSON from '../public/movies.json';
import '../styles/Home.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setMovies(moviesJSON);
  }, []);

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
      <MovieModal show={!!selectedMovie} handleClose={handleCloseModal} movie={selectedMovie} />
    </div>
  );
};

export default App;
