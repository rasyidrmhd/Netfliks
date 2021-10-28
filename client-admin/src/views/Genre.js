import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenre, deleteGenre } from "../store/actions";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TableRowGenre from "../components/TableRowGenre";

export default function Genre(props) {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state);

  const deleteGenreById = (id) => {
    dispatch(deleteGenre(id));
  };

  useEffect(() => {
    dispatch(fetchGenre());
  }, []);

  return (
    <div>
      <Sidebar></Sidebar>

      <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#252525", color: "white" }}>
        {/* Main content */}
        <div id="content" className="offset-2">
          <div className="container-fluid mt-3">
            <div className="card o-hidden shadow mb-4 border-0" style={{ backgroundColor: "#212121", borderRadius: "20px" }}>
              <div className="card-header py-3 d-flex flex-row justify-content-between align-items-center" style={{ backgroundColor: "#212121" }}>
                <h5 className="m-0 font-weight-bold text-danger">List Genres</h5>
                <Link href="#" className="btn btn-sm btn-danger btn-icon-split" to="/addGenre">
                  <span className="icon">
                    <i className="fa fa-plus"></i>
                  </span>
                  <span className="text">Add New Genre</span>
                </Link>
              </div>
              <div className="card-body" style={{ backgroundColor: "#212121" }}>
                <div className="table-responsive">
                  <table className="table table-light table-hover" width="100%" cellSpacing="0">
                    <thead>
                      <tr className="text-center border-0 text-white" style={{ backgroundColor: "#252525" }}>
                        <th>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {genres.map((genre, idx) => {
                        return <TableRowGenre key={genre.id} genre={genre} idx={idx} deleteGenreById={deleteGenreById} />;
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
