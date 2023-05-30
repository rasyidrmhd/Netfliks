import { SET_GENRES, SET_GENRE_BY_ID } from "../actionType";

const initialState = {
  genres: [],
  genreById: {},
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GENRES:
      return { ...state, genres: action.payload };
    case SET_GENRE_BY_ID:
      return { ...state, genreById: action.payload };
    default:
      return state;
  }
}
