import { server } from "../../apis/server";
import { SET_USERS, SET_ISlOADING, SET_ISERROR } from "../actionType";

export function setUser(payload) {
  return {
    type: SET_USERS,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SET_ISlOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SET_ISERROR,
    payload,
  };
}

export function fetchUser() {
  return (dispatch, getState) => {
    const access_token = localStorage.getItem("access_token");
    fetch(`${server}/users`, {
      headers: {
        access_token,
      },
    })
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
