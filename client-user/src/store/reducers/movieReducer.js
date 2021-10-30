import { SET_MOVIES, SET_MOVIE_BY_SLUG } from "../actionType";

const initialState = {
  movies: [],
  movieBySlug: {},
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_MOVIE_BY_SLUG:
      return { ...state, movieBySlug: action.payload };
    default:
      return state;
  }
}
