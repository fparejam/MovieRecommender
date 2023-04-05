import { FETCH_MOVIES, SELECT_MOVIE, CLOSE_MODAL, LIKE_MOVIE } from '../types/types';
import moviesJSON from '../../public/movies.json';

export const fetchMovies = () => async (dispatch) => {
  dispatch({
    type: FETCH_MOVIES,
    payload: moviesJSON,
  });
};

export const selectMovie = (movie) => ({
  type: SELECT_MOVIE,
  payload: movie,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const likeMovie = (movie) => ({
  type: LIKE_MOVIE,
  payload: movie,
});
