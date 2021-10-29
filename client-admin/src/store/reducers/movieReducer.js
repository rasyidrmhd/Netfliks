import { SET_MOVIES, SET_MOVIE_BY_ID } from "../actionType";

const initialState = {
  movies: [],
  movieById: {},
  isLoading: false,
  isError: false,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_MOVIE_BY_ID:
      return { ...state, moviesById: action.payload };
    default:
      return state;
  }
}
