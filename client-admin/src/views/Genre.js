import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { server } from "../apis/server";
import Sidebar from "../components/Sidebar";

export default function Genre(props) {
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState(0);

  const deleteGenreById = (id) => {
    setGenreId(id);

    fetch(`${server}/genre/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("success delete genre");
      })
      .catch((err) => {
        console.log(err, "error delete genre");
      });
  };

  useEffect(() => {
    fetch(`${server}/genre`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGenres(data);
      })
      .catch((err) => {});
  }, [genreId]);

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
                        return (
                          <tr key={genre.id} className="text-white text-center" style={{ backgroundColor: "#303030" }}>
                            <td width="5%">{idx + 1}</td>
                            <td width="20%">
                              <img src={genre.imgUrl} alt="" style={{ width: "200px", borderRadius: "20px" }} />
                            </td>
                            <td className="text-left">{genre.name}</td>
                            <td>
                              <a href="#" className="btn btn-success btn-circle m-1">
                                <i className="fa fa-pencil-alt"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-danger btn-circle m-1"
                                onClick={(e) => {
                                  e.preventDefault();
                                  deleteGenreById(genre.id);
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
