import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, deleteMovie } from "../store/actions/movieAction";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TableRowMovie from "../components/TableRowMovie";

export default function Movie(props) {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movieReducer);

  const deleteMovieById = (id) => {
    dispatch(deleteMovie(id));
  };

  useEffect(() => {
    dispatch(fetchMovie());
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
                <h5 className="m-0 font-weight-bold text-danger">List Movies</h5>
                <Link className="btn btn-sm btn-danger btn-icon-split" to="/addMovie">
                  <span className="icon">
                    <i className="fa fa-plus"></i>
                  </span>
                  <span className="text">Add New Movie</span>
                </Link>
              </div>
              <div className="card-body" style={{ backgroundColor: "#212121" }}>
                <div className="table-responsive">
                  <table className="table table-light table-hover" width="100%" cellSpacing="0">
                    <thead>
                      <tr className="text-center border-0 text-white" style={{ backgroundColor: "#252525" }}>
                        <th>No</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Genre</th>
                        <th>Synopsis</th>
                        <th>Rating</th>
                        <th>Trailer</th>
                        <th>Cast</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {movies.map((movie, idx) => {
                        return <TableRowMovie key={movie.id} movie={movie} idx={idx} deleteMovieById={deleteMovieById} />;
                      })}
                    </tbody>
                  </table>
                  {movies.map((movie, idx) => {
                    return (
                      <div className="modal fade border-0" id={`castsModal${movie.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" key={movie.id}>
                        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                          <div className="modal-content text-white" style={{ backgroundColor: "#212121", borderRadius: "20px" }}>
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">
                                {movie.title}'s Casts
                              </h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body d-flex justify-content-center">
                              {movie.Casts.map((cast) => {
                                return (
                                  <div className="text-center mx-3" key={cast.id}>
                                    <img className="rounded-circle border-0 mb-3" src={cast.profilePict} alt="can't load the image" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                    <br />
                                    <span className="badge badge-info" style={{ fontSize: "14px" }}>
                                      {cast.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary rounded-pill" data-dismiss="modal">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
