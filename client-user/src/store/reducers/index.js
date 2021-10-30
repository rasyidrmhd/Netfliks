import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import genreReducer from "./genreReducer";

const reducers = combineReducers({
  movieReducer,
  genreReducer,
});

export default reducers;
