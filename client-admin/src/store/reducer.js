import { COUNTER_INCREMENT, SET_USER, DELETE_USER } from "./actionType";

const initialState = {
  message: "Hello",
  counter: 0,
  users: [],
};

/*

case COUNTER_INCREMENT:
  let newState = {...state}
  newState.counter += action.payload
  return newState
 
// pendek
case COUNTER_INCREMENT:
  return { ...state, counter: state.counter + action.payload }

*/

export default function reducer(state = initialState, action) {
  if (action.type === COUNTER_INCREMENT) {
    let newState = { ...state };
    newState.counter += action.payload;
    return newState;
  } else if (action.type === SET_USER) {
    return { ...state, users: action.payload };
  }

  return state;
}
