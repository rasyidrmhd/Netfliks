import { server } from "../../apis/server";
import { SET_GENRES, SET_GENRE_BY_ID } from "../actionType";

export function setGenres(payload) {
  return {
    type: SET_GENRES,
    payload,
  };
}

export function fetchGenres() {
  return async (dispatch, getState) => {
    const result = await fetch(`${server}/genres`);
    return result;
  };
}
