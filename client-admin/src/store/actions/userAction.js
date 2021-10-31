import { server } from "../../apis/server";
import { swalError, swalLoading, Swal } from "../../apis/sweetalert";
import { SET_USERS } from "../actionType";

export function setUser(payload) {
  return {
    type: SET_USERS,
    payload,
  };
}

export function fetchUser() {
  return async (dispatch, getState) => {
    const access_token = localStorage.getItem("access_token");
    const result = await fetch(`${server}/users`, {
      headers: {
        access_token,
      },
    });

    return result;
  };
}

export function deleteUser(id) {
  return (dispatch, getState) => {
    const access_token = localStorage.getItem("access_token");
    swalLoading();
    fetch(`${server}/users/${10}`, {
      method: "DELETE",
      headers: {
        access_token,
      },
    })
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        const newUser = getState().userReducer.users.filter((user) => user.id != id);
        dispatch(setUser(newUser));
        Swal.close();
      })
      .catch((err) => {
        Swal.close();
        swalError("", `${err.message}`);
      });
  };
}

export function postUser(data) {
  return async (dispatch, getState) => {
    const access_token = localStorage.getItem("access_token");
    const result = await fetch(`${server}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token,
      },
      body: JSON.stringify(data),
    });

    return result;
  };
}
