import { createStore } from "redux";
import reducer from "./reducer";

/*

case COUNTER_INCREMENT:
  let newState = {...state}
  newState.counter += action.payload
  return newState
 
// pendek
case COUNTER_INCREMENT:
  return { ...state, counter: state,.counter + action.payload }

*/

let store = createStore(reducer);

export default store;
