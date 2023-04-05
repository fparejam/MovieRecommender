import { FETCH_MOVIES, SELECT_MOVIE, CLOSE_MODAL, LIKE_MOVIE } from '../types/types';

const initialState = {
  movies: [],
  selectedMovie: null,
  likedMovies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload };
    case SELECT_MOVIE:
      return { ...state, selectedMovie: action.payload };
    case CLOSE_MODAL:
      return { ...state, selectedMovie: null };
    case LIKE_MOVIE:
      return { ...state, likedMovies: [...state.likedMovies, action.payload] };
    default:
      return state;
  }
};
