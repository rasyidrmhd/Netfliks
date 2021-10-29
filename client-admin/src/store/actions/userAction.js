import { server } from "../../apis/server";
import { SET_USERS } from "../actionType";

export function setUser(payload) {
  return {
    type: SET_USERS,
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
