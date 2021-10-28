import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "../store/actions";

export default function Login(props) {
  const history = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
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
    props.changeIsLoggedIn(true);
    localStorage.setItem("access_token", "dummy_access_token");
    history.push("/home");
    console.log(inputLogin.email, ">>>>>>email");
    console.log(inputLogin.password, ">>>>>password");
  };

  return (
    <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", width: "100vw" }}>
      <div className="col-lg-5 col-sm-8">
        <div className="card o-hidden border-0 shadow-lg" style={{ backgroundColor: "#212121", borderRadius: "20px" }}>
          <div className="card-body p-0">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h2 text-danger font-weight-bolder">Netfliks Admin {state.counter}</h1>
              </div>
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
                <button
                  type="button"
                  className="btn btn-success btn-block rounded-pill"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(incrementCounter(10));
                  }}
                >
                  Test State
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
