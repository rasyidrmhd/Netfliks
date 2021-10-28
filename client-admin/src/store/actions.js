import { server } from "../apis/server";
import { SET_USER, SET_GENRE } from "./actionType";

export function setUser(payload) {
  return {
    type: SET_USER,
    payload,
  };
}

export function fetchUser() {
  return (dispatch, getState) => {
    fetch(`${server}/user`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUser(data));
      })
      .catch((err) => {
        console.log(err, "from actions fetchUser");
      });
  };
}

export function deleteUser(id) {
  return (dispatch, getState) => {
    fetch(`${server}/user/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(fetchUser());
        console.log("success delete user");
      })
      .catch((err) => {
        console.log(err, "from action deleteUser");
      });
  };
}

export function setGenre(payload) {
  return {
    type: SET_GENRE,
    payload,
  };
}

export function fetchGenre() {
  return (dispatch, getState) => {
    fetch(`${server}/genre`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setGenre(data));
      })
      .catch((err) => {
        console.log(err, "from action fetchGenre");
      });
  };
}
