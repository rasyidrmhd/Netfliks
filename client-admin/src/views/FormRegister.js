import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { postUser, setLoading } from "../store/actions/userAction";
import Sidebar from "../components/Sidebar";
import { swalSuccess, swalError, swalLoading } from "../apis/sweetalert";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading } = useSelector((state) => state.userReducer);
  const [err, setErr] = useState([]);
  const [inputRegister, setInputRegister] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const changeInputRegisterHandler = (e) => {
    const { value, name } = e.target;

    setInputRegister({
      ...inputRegister,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setLoading(true));
    dispatch(postUser(inputRegister))
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        swalSuccess("", `${data.username} successfully registered`);
        history.push("/home");
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  if (isLoading) {
    swalLoading();
  } else {
    Swal.close();
  }

  let showError = "";
  if (err.length !== 0) {
    showError = (
      <div className="text-center mb-2">
        {err.message.map((err, idx) => {
          return (
            <span key={idx} className="badge badge-danger mr-1">
              {err}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <Sidebar></Sidebar>

      <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#252525", color: "white" }}>
        {/* Main content */}
        <div id="content" className="d-flex offset-2 justify-content-center">
          <div className="col-8">
            <div className="mt-3">
              <div className="card o-hidden shadow mb-4 border-0" style={{ backgroundColor: "#212121", borderRadius: "20px" }}>
                <div className="card-header py-3 d-flex flex-row justify-content-between align-items-center" style={{ backgroundColor: "#212121" }}>
                  <h5 className="m-0 font-weight-bold text-danger">Register New Admin</h5>
                  <Link className="btn btn-sm btn-danger btn-icon-split" to="/home">
                    <span className="icon">
                      <i className="fa fa-angle-left"></i>
                    </span>
                    <span className="text">Back</span>
                  </Link>
                </div>
                <div className="card-body" style={{ backgroundColor: "#212121" }}>
                  {showError}
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        id="username"
                        type="text"
                        className="form-control border-0 rounded-pill"
                        autoComplete="off"
                        name="username"
                        placeholder="Enter new admin username"
                        value={inputRegister.username}
                        onChange={changeInputRegisterHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="text" className="form-control border-0 rounded-pill" autoComplete="off" name="email" placeholder="Enter new admin email" value={inputRegister.email} onChange={changeInputRegisterHandler} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control border-0 rounded-pill"
                        autoComplete="off"
                        name="password"
                        placeholder="Enter new admin password"
                        value={inputRegister.password}
                        onChange={changeInputRegisterHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        id="phoneNumber"
                        type="number"
                        className="form-control border-0 rounded-pill"
                        autoComplete="off"
                        name="phoneNumber"
                        placeholder="Enter new admin phone number"
                        value={inputRegister.phoneNumber}
                        onChange={changeInputRegisterHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        id="address"
                        type="text"
                        className="form-control border-0 rounded-pill"
                        autoComplete="off"
                        name="address"
                        placeholder="Enter new admin address"
                        value={inputRegister.address}
                        onChange={changeInputRegisterHandler}
                      />
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
