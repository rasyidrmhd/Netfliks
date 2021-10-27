import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { server } from "../apis/server";
import Sidebar from "../components/Sidebar";
import TableRowMovie from "../components/TableRowMovie";

export default function Movie(props) {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(0);

  const deleteMovieById = (id) => {
    setMovieId(id);

    fetch(`${server}/movie/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("success delete movie");
      })
      .catch((err) => {
        console.log(err, "errorr delete movie");
      });
  };

  useEffect(() => {
    fetch(`${server}/movie`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        // console.log(movies);
      })
      .catch((err) => {});
  }, [movieId]);

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
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {movies.map((movie, idx) => {
                        return <TableRowMovie key={movie.id} movie={movie} idx={idx} deleteMovieById={deleteMovieById} />;
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
