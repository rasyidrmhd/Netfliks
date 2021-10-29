import { combineReducers } from "redux";
import userReducer from "./userReducer";
import genreReducer from "./genreReducer";
import movieReducer from "./movieReducer";

const reducers = combineReducers({
  userReducer,
  genreReducer,
  movieReducer,
});

export default reducers;
