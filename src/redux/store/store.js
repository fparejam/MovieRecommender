import { createStore, applyMiddleware, compose } from 'redux';
import { movieReducer } from '../reducers/movieReducer';

const initialState = {};
const middleware = [];

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  movieReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
