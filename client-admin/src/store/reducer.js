import { SET_IS_LOGGED_IN, SET_USERS, SET_GENRES, SET_GENRE_BY_ID, SET_MOVIES, SET_MOVIE_BY_ID } from "./actionType";

const initialState = {
  isLoggedIn: false,
  users: [],
  genres: [],
  genreById: {},
  movies: [],
  movieById: {},
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_USERS) {
    return { ...state, users: action.payload };
  } else if (action.type === SET_GENRES) {
    return { ...state, genres: action.payload };
  } else if (action.type === SET_GENRE_BY_ID) {
    return { ...state, genreById: action.payload };
  } else if (action.type === SET_MOVIES) {
    return { ...state, movies: action.payload };
  } else if (action.type === SET_IS_LOGGED_IN) {
    return { ...state, isLoggedIn: action.payload };
  }

  return state;
}
