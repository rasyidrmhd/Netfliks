import React, { useState, useEffect } from "react";
import { server } from "../apis/server";
import Sidebar from "../components/Sidebar";

function Register(props) {
  const [inputRegister, setInputRegister] = useState({
    username: "",
    email: "",
    password: "",
    role: "admin",
    phoneNumber: "",
    address: "",
  });

  const changeInputRegisterHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputRegister({
      ...inputRegister,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fetch(`${server}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputRegister),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, "successss");
      })
      .catch((err) => {
        console.log(err, "errorrrrrrr");
      });
  };

  return (
    <div>
      <Sidebar changePage={props.changePage}></Sidebar>

      <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#252525", color: "white" }}>
        {/* Main content */}
        <div id="content" className="d-flex offset-2 justify-content-center">
          <div className="col-8">
            <div className="mt-3">
              <div className="card o-hidden shadow mb-4 border-0" style={{ backgroundColor: "#212121", borderRadius: "20px" }}>
                <div className="card-header py-3 d-flex flex-row justify-content-between align-items-center" style={{ backgroundColor: "#212121" }}>
                  <h5 className="m-0 font-weight-bold text-danger">Register New Admin</h5>
                </div>
                <div className="card-body" style={{ backgroundColor: "#212121" }}>
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input id="username" type="text" className="form-control border-0 rounded-pill" autoComplete="off" name="username" value={inputRegister.username} onChange={changeInputRegisterHandler} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" className="form-control border-0 rounded-pill" autoComplete="off" name="email" value={inputRegister.email} onChange={changeInputRegisterHandler} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input id="password" type="text" className="form-control border-0 rounded-pill" autoComplete="off" name="password" value={inputRegister.password} onChange={changeInputRegisterHandler} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input id="phoneNumber" type="number" className="form-control border-0 rounded-pill" autoComplete="off" name="phoneNumber" value={inputRegister.phoneNumber} onChange={changeInputRegisterHandler} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input id="address" type="text" className="form-control border-0 rounded-pill" autoComplete="off" name="address" value={inputRegister.address} onChange={changeInputRegisterHandler} />
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mr-2 rounded-pill">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
      </div>
    </div>
  );
}

export default Register;
