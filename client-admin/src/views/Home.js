import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { server } from "../apis/server";
import Sidebar from "../components/Sidebar";
import defaultProfile from "../assets/profile/default.png";

function Home(props) {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(0);

  const deleteUserById = (id) => {
    setUserId(id);

    fetch(`${server}/user/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("success delete user");
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetch(`${server}/user`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {});
  });

  return (
    <div>
      <Sidebar></Sidebar>

      <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#252525", color: "white" }}>
        {/* Main content */}
        <div id="content" className="offset-2">
          <div className="container-fluid mt-3">
            <div className="card o-hidden shadow mb-4 border-0" style={{ backgroundColor: "#212121", borderRadius: "20px" }}>
              <div className="card-header py-3 d-flex flex-row justify-content-between align-items-center" style={{ backgroundColor: "#212121" }}>
                <h5 className="m-0 font-weight-bold text-danger">List Admins</h5>
                <Link className="btn btn-sm btn-danger btn-icon-split" to="/register">
                  <span className="icon">
                    <i className="fa fa-plus"></i>
                  </span>
                  <span className="text">Add New Admin</span>
                </Link>
              </div>
              <div className="card-body" style={{ backgroundColor: "#212121" }}>
                <div className="table-responsive">
                  <table className="table table-light table-hover" width="100%" cellSpacing="0">
                    <thead>
                      <tr className="text-center border-0 text-white" style={{ backgroundColor: "#252525" }}>
                        <th>No</th>
                        <th>Photo</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, idx) => {
                        return (
                          <tr key={user.id} className="text-white" style={{ backgroundColor: "#303030" }}>
                            <td className="text-center">{idx + 1}</td>
                            <td>
                              <img src={defaultProfile} alt="" style={{ width: "100px", borderRadius: "20px" }} />
                            </td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td className="text-center">{user.phoneNumber}</td>
                            <td>{user.address}</td>
                            <td>
                              <a href="#" className="btn btn-success btn-circle m-1">
                                <i className="fa fa-pencil-alt"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-danger btn-circle m-1"
                                onClick={(e) => {
                                  e.preventDefault();
                                  deleteUserById(user.id);
                                }}
                              >
                                <i className="fa fa-trash"></i>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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

export default Home;
