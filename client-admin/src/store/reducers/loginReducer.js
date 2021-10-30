import { SET_ISlOADING, SET_ISERROR, SET_USERDATA } from "../actionType";

const initialState = {
  isLoading: false,
  isError: [],
  userdata: {},
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ISlOADING:
      return { ...state, isLoading: action.payload };
    case SET_ISERROR:
      return { ...state, isError: action.payload };
    case SET_USERDATA:
      return { ...state, userdata: action.payload };
    default:
      return state;
  }
}
