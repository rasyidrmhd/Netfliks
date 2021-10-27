import { COUNTER_INCREMENT } from "./actionType";

const initialState = {
  message: "Hello",
  counter: 0,
};

export default function reducer(state = initialState, action) {
  if (action.type === COUNTER_INCREMENT) {
    let newState = { ...state };
    newState.counter += action.payload;
    return newState;
  }
  return state;
}
