import { SET_ISlOADING, SET_ISERROR } from "../actionType";

const initialState = {
  isLoading: false,
  isError: [],
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ISlOADING:
      return { ...state, isLoading: action.payload };
    case SET_ISERROR:
      return { ...state, isError: action.payload };
    default:
      return state;
  }
}
