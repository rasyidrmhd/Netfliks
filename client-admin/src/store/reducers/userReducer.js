import { SET_USERS } from "../actionType";

const initialState = {
  users: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
