import { server } from "../apis/server";
import { COUNTER_INCREMENT, SET_USER, DELETE_USER } from "./actionType";

export function incrementCounter(payload) {
  return {
    type: COUNTER_INCREMENT,
    payload,
  };
}

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
        console.log(data, "FROM ACTIONSS");
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
