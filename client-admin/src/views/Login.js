import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/loginAction";
import { swalLoading, Swal, swalError } from "../apis/sweetalert";

export default function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [err, setErr] = useState([]);
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const changeInputLoginHandler = (e) => {
    const { value, name } = e.target;

    setInputLogin({
      ...inputLogin,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    swalLoading();
    dispatch(login(inputLogin))
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        Swal.close();
        history.push("/home");
      })
      .catch((err) => {
        Swal.close();
        setErr(err);
      });
  };

  return (
    <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", width: "100vw" }}>
      <div className="col-lg-5 col-sm-8">
        <div className="card o-hidden border-0 shadow-lg" style={{ backgroundColor: "#212121", borderRadius: "20px" }}>
          <div className="card-body p-0">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h2 text-danger font-weight-bolder">Netfliks Admin</h1>
              </div>
              <p className="text-danger text-center">{err.message}</p>
              <form className="mt-4 user" onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="email">Username / Email</label>
                  <input type="text" className="form-control border-0 rounded-pill" autoComplete="off" placeholder="Enter your unique username or email" name="email" id="email" value={inputLogin.email} onChange={changeInputLoginHandler} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control border-0 rounded-pill"
                    autoComplete="off"
                    placeholder="Enter you strong password"
                    name="password"
                    id="password"
                    value={inputLogin.password}
                    onChange={changeInputLoginHandler}
                  />
                </div>
                <button type="submit" className="btn btn-danger btn-block rounded-pill">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
