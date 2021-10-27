import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { server } from "../apis/server";
import Sidebar from "../components/Sidebar";

export default function AddMovie(props) {
  const history = useHistory();
  const { movieId } = useParams();

  const [inputMovie, setInputMovie] = useState({
    title: "",
    slug: "",
    synopsis: "",
    trailerUrl: "",
    imgUrl: "",
    rating: 0,
    GenreId: 1,
    AuthorId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  useEffect(() => {
    fetch(`${server}/movie/${movieId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInputMovie(data);
      })
      .catch((err) => {
        console.log(err, "Errorrrrr");
      });
  }, [movieId]);

  const changeInputMovieHandler = (e) => {
    const { value, name } = e.target;

    setInputMovie({
      ...inputMovie,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let url;
    let method;
    if (movieId) {
      url = `${server}/movie/${movieId}`;
      method = "PUT";
    } else {
      url = `${server}/movie`;
      method = "POST";
    }

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputMovie),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("successss post or put movie");
        history.push("/movie");
      })
      .catch((err) => {
        console.log(err, "errorrrrrrr");
      });
  };

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
                  <h5 className="m-0 font-weight-bold text-danger">Add New Movie</h5>
                  <Link className="btn btn-sm btn-danger btn-icon-split" to="/movie">
                    <span className="icon">
                      <i className="fa fa-angle-left"></i>
                    </span>
                    <span className="text">Back</span>
                  </Link>
                </div>
                <div className="card-body" style={{ backgroundColor: "#212121" }}>
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input id="title" type="text" className="form-control border-0 rounded-pill" autoComplete="off" placeholder="Enter new movie title" name="title" value={inputMovie.title} onChange={changeInputMovieHandler} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="synopsis">Synopsis</label>
                      <textarea
                        cols="30"
                        rows="5"
                        className="form-control border-0"
                        placeholder="Enter new movie synopsis"
                        name="synopsis"
                        id="synopsis"
                        onChange={changeInputMovieHandler}
                        value={inputMovie.synopsis}
                        style={{ borderRadius: "20px" }}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="trailerUrl">Trailer Url</label>
                      <input
                        id="trailerUrl"
                        type="text"
                        className="form-control border-0 rounded-pill"
                        autoComplete="off"
                        placeholder="Enter new movie trailer url"
                        name="trailerUrl"
                        value={inputMovie.trailerUrl}
                        onChange={changeInputMovieHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="imgUrl">Image Url</label>
                      <input id="imgUrl" type="text" className="form-control border-0 rounded-pill" autoComplete="off" name="imgUrl" placeholder="Enter new movie image url" value={inputMovie.imgUrl} onChange={changeInputMovieHandler} />
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mr-2 rounded-pill">
                      Add
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
