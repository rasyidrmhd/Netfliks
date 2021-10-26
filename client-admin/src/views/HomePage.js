import React, { useState, useEffect } from "react";
import { server } from "../apis/server";
import Sidebar from "../components/Sidebar";

function HomePage(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${server}/movie`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        console.log(movies);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <Sidebar changePage={props.changePage}></Sidebar>

      <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#252525", color: "white" }}>
        {/* Main content */}
        <div id="content" className="offset-2">
          <div className="container-fluid mt-3">
            <div className="card o-hidden shadow mb-4 border-0" style={{ backgroundColor: "#212121", borderRadius: "20px" }}>
              <div className="card-header py-3 d-flex flex-row justify-content-between align-items-center" style={{ backgroundColor: "#212121" }}>
                <h5 className="m-0 font-weight-bold text-danger">List Movies</h5>
                <a
                  href="#"
                  className="btn btn-sm btn-danger btn-icon-split"
                  onClick={(e) => {
                    e.preventDefault();
                    props.changePage("addMovie");
                  }}
                >
                  <span className="icon">
                    <i className="fa fa-plus"></i>
                  </span>
                  <span className="text">Add New Movie</span>
                </a>
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
                        return (
                          <tr key={movie.id} className="text-white text-center" style={{ backgroundColor: "#303030" }}>
                            <td>{idx + 1}</td>
                            <td>
                              <img src={movie.imgUrl} alt="" style={{ width: "200px", borderRadius: "20px" }} />
                            </td>
                            <td className="text-left">{movie.title}</td>
                            <td>2</td>
                            <td>{movie.GenreId}</td>
                            <td className="text-left">{movie.synopsis}</td>
                            <td>{movie.rating}</td>
                            <td>
                              <a href={movie.trailerUrl} className="btn btn-danger btn-circle" target="_blank">
                                <i className="fas fa-play"></i>
                              </a>
                            </td>
                            <td>
                              <a href="#" className="btn btn-success btn-circle m-1">
                                <i className="fa fa-pencil-alt"></i>
                              </a>
                              <a href="#" className="btn btn-danger btn-circle m-1">
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

export default HomePage;
