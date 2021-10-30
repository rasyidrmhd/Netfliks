import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchUser, deleteUser } from "../store/actions/userAction";
import Sidebar from "../components/Sidebar";
import TableRowAdmin from "../components/TableRowAdmin";
import { swalSuccess, swalError, swalLoading } from "../apis/sweetalert";

export default function Home(props) {
  const dispatch = useDispatch();
  const { users, isLoading, isError } = useSelector((state) => state.userReducer);

  const deleteUserById = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  if (isLoading) {
    swalLoading();
  } else {
    Swal.close();
  }

  if (isError.length !== 0) {
    swalError("", isError.message);
  }

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
                        return <TableRowAdmin key={user.id} user={user} idx={idx} deleteUserById={deleteUserById} />;
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
