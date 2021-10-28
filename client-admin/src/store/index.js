/**
 * 1. npm install redux-thunk
 * 2. import applyMiddleware dari redux
 * 3. import thunk dari redux-thunk
 * 4. masukkin applyMiddleware(thunk) ke store
 */

import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
