import React, { useState, useEffect, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moviesJSON from '../public/movies.json';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import AddFavourites from '../components/AddFavourites';
import RemoveFavourites from '../components/RemoveFavourites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setMovies(moviesJSON);
  }, []);

  const recent20Movies = useMemo(() => 
    [...movies].slice(0, 20),
    [movies]
  );
  
  const top20Movies = useMemo(() =>
    [...movies].sort((a, b) => b.imdbRating - a.imdbRating).slice(0, 20),
    [movies]
  );

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const isDuplicate = favourites.some((favourite) => favourite.Title === movie.Title);
  
    if (isDuplicate) {
      return;
    }
  
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };


  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.Title !== movie.Title
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className={`container-fluid`}>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Recently added' />
      </div>
      <div className='row flex-nowrap overflow-auto'>
        <div className='d-flex'>
          <MovieList
            movies={recent20Movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourites}
          />
        </div>
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Popular movies' />
      </div>
      <div className='row flex-nowrap overflow-auto'>
        <div className='d-flex'>
          <MovieList
            movies={top20Movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourites}
          />
        </div>
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favourites' />
      </div>
      <div className='row flex-nowrap overflow-auto '>
        <div className='d-flex'>
          <MovieList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
