import { server } from "../../apis/server";
import { swalError } from "../../apis/sweetalert";
import { SET_GENRES, SET_GENRE_BY_ID } from "../actionType";

export function setGenres(payload) {
  return {
    type: SET_GENRES,
    payload,
  };
}

export function setGenreById(payload) {
  return {
    type: SET_GENRE_BY_ID,
    payload,
  };
}

export function fetchGenres() {
  return async (dispatch, getState) => {
    const result = await fetch(`${server}/genres`);
    return result;
  };
}

export function fetchGenreById(id) {
  return (dispatch) => {
    fetch(`${server}/genres/${id}`)
      .then((response) => {
        return response.json().then((json) => {
          if (response.ok) {
            return json;
          } else {
            return Promise.reject(json);
          }
        });
      })
      .then((data) => {
        dispatch(setGenreById(data));
      })
      .catch((err) => {
        swalError("", `${err.message}`);
      });
  };
}
