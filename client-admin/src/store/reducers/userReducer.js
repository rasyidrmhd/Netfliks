import { SET_USERS, SET_ISERROR, SET_ISlOADING } from "../actionType";

const initialState = {
  users: [],
  isLoading: false,
  isError: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_ISlOADING:
      return { ...state, isLoading: action.payload };
    case SET_ISERROR:
      return { ...state, isError: action.payload };
    default:
      return state;
  }
}
