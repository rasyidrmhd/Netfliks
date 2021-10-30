import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchMovieBySlug, postPutMovie } from "../store/actions/movieAction";
import { fetchGenre } from "../store/actions/genreAction";
import Sidebar from "../components/Sidebar";
import { swalSuccess, swalError, swalLoading } from "../apis/sweetalert";
import Swal from "sweetalert2";

export default function AddMovie(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { slug } = useParams();
  const { movieById } = useSelector((state) => state.movieReducer);
  const { genres } = useSelector((state) => state.genreReducer);
  const [err, setErr] = useState([]);

  const [inputMovie, setInputMovie] = useState({
    title: "",
    synopsis: "",
    trailerUrl: "",
    imgUrl: "",
    rating: "",
    category: "Movies",
    GenreId: 1,
  });

  const [inputCasts, setInputCasts] = useState([{ name: "", profilePict: "" }]);

  useEffect(() => {
    if (slug) {
      dispatch(fetchMovieBySlug(slug));
    }
    dispatch(fetchGenre());
  }, []);

  useEffect(() => {
    if (slug) {
      setInputMovie(movieById);
    }
  }, [movieById]);

  useEffect(() => {
    if (slug) {
      setInputCasts(movieById.Casts);
    }
  }, [movieById.Casts]);

  useEffect(() => {
    if (slug) {
      setInputMovie({
        ...inputMovie,
        ["casts"]: inputCasts,
      });
    }
  }, [inputCasts]);

  const changeInputMovieHandler = (e) => {
    const { value, name } = e.target;

    setInputMovie({
      ...inputMovie,
      [name]: value,
    });
  };

  const changeInputCastHandler = (idx, e) => {
    const values = [...inputCasts];
    values[idx][e.target.name] = e.target.value;
    setInputCasts(values);
    setInputMovie({
      ...inputMovie,
      ["casts"]: inputCasts,
    });
  };

  const addCast = () => {
    setInputCasts([...inputCasts, { name: "", profilePict: "" }]);
  };

  const removeCast = (idx) => {
    const values = [...inputCasts];
    values.splice(idx, 1);
    setInputCasts(values);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let method;
    let notif;
    if (slug) {
      method = "PUT";
      notif = "updated";
    } else {
      method = "POST";
      notif = "added";
    }

    swalLoading();
    dispatch(postPutMovie(method, slug, inputMovie))
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        Swal.close();
        swalSuccess("", `Movie ${data.result.title} successfully ${notif}`).then((result) => {
          if (result.isConfirmed) {
            history.push("/movie");
          }
        });
      })
      .catch((err) => {
        Swal.close();
        setErr(err);
      });
  };

  let formContent;
  if (slug) {
    formContent = { title: `Edit Movie ${movieById.title}`, button: "Edit" };
  } else {
    formContent = { title: "Add New Movie", button: "Add" };
  }

  let showError;
  if (err.length !== 0) {
    console.log(err);
    showError = (
      <div className="text-center mb-3">
        {err?.message.map((err, idx) => {
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
                  <h5 className="m-0 font-weight-bold text-danger">{formContent.title}</h5>
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
                      <label htmlFor="category">Category</label>
                      <select className="form-control border-0 rounded-pill" name="category" onChange={changeInputMovieHandler}>
                        <option value="Movies" selected={inputMovie.category === "Movies" ? "selected" : false}>
                          Movies
                        </option>
                        <option value="TV Series" selected={inputMovie.category === "TV Series" ? "selected" : false}>
                          TV Series
                        </option>
                        <option value="Animes" selected={inputMovie.category === "Animes" ? "selected" : false}>
                          Animes
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="genre">Genre</label>
                      <select className="form-control border-0 rounded-pill" name="GenreId" onChange={changeInputMovieHandler}>
                        {genres.map((genre, idx) => {
                          return (
                            <option value={genre.id} key={genre.id} selected={genre.id === inputMovie.GenreId ? "selected" : false}>
                              {genre.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input id="title" type="text" className="form-control border-0 rounded-pill" autoComplete="off" placeholder="Enter new movie title" name="title" defaultValue={inputMovie.title} onChange={changeInputMovieHandler} />
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
                        defaultValue={inputMovie.synopsis}
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
                        defaultValue={inputMovie.trailerUrl}
                        onChange={changeInputMovieHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="imgUrl">Image Url</label>
                      <input
                        id="imgUrl"
                        type="text"
                        className="form-control border-0 rounded-pill"
                        autoComplete="off"
                        name="imgUrl"
                        placeholder="Enter new movie image url"
                        defaultValue={inputMovie.imgUrl}
                        onChange={changeInputMovieHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rating">Rating</label>
                      <input
                        id="rating"
                        type="number"
                        className=""
                        className="form-control border-0 rounded-pill"
                        autoComplete="off"
                        name="rating"
                        placeholder="Enter new movie rating"
                        defaultValue={inputMovie.rating}
                        onChange={changeInputMovieHandler}
                      />
                    </div>
                    <hr style={{ border: "1px solid white" }} />
                    <div className="form-group">
                      {inputCasts?.map((inputCast, idx) => (
                        <div key={idx}>
                          <div className="form-group">
                            <label htmlFor="cast">Cast {idx + 1}</label>
                            <a
                              href="#"
                              className="text-danger text-decoration-none ml-2"
                              onClick={(e) => {
                                e.preventDefault();
                                removeCast(idx);
                              }}
                            >
                              Remove
                            </a>
                            <input
                              type="text"
                              name="name"
                              className="form-control border-0 rounded-pill"
                              autoComplete="off"
                              placeholder="Cast name"
                              defaultValue={inputCast.name}
                              onChange={(e) => {
                                changeInputCastHandler(idx, e);
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="profile">Profile {idx + 1}</label>
                            <input
                              type="text"
                              name="profilePict"
                              className="form-control border-0 rounded-pill"
                              autoComplete="off"
                              placeholder="Cast profile picture image url"
                              defaultValue={inputCast.profilePict}
                              onChange={(e) => {
                                changeInputCastHandler(idx, e);
                              }}
                            />
                          </div>
                        </div>
                      ))}
                      <div className="form-group" id="cast-input"></div>
                      <button
                        type="button"
                        className="btn btn-success btn-block rounded-pill"
                        onClick={(e) => {
                          e.preventDefault();
                          addCast();
                        }}
                      >
                        Add More Cast
                      </button>
                    </div>
                    <hr style={{ border: "1px solid white" }} />
                    {showError}
                    <button type="submit" className="btn btn-danger btn-block rounded-pill">
                      {formContent.button}
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
