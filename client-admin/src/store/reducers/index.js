import { combineReducers } from "redux";
import userReducer from "./userReducer";
import genreReducer from "./genreReducer";
import movieReducer from "./movieReducer";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
  loginReducer,
  userReducer,
  genreReducer,
  movieReducer,
});

export default reducers;
