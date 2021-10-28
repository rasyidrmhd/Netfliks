import { SET_USER, SET_GENRE } from "./actionType";

const initialState = {
  users: [],
  genres: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_USER) {
    return { ...state, users: action.payload };
  } else if (action.type === SET_GENRE) {
    return { ...state, genres: action.payload };
  }

  return state;
}
