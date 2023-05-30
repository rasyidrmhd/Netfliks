import { SET_GENRES, SET_GENRE_BY_ID, SET_ISlOADING, SET_ISERROR } from "../actionType";

const initialState = {
  genres: [],
  genreById: {},
  isLoading: false,
  isError: false,
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GENRES:
      return { ...state, genres: action.payload };
    case SET_GENRE_BY_ID:
      return { ...state, genreById: action.payload };
    case SET_ISlOADING:
      return { ...state, isLoading: action.payload };
    case SET_ISERROR:
      return { ...state, isError: action.payload };
    default:
      return state;
  }
}
