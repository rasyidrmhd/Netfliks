import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieBySlug, setMovieBySlug } from "../store/actions/movieAction";
import { fetchGenres, setGenres } from "../store/actions/genreAction";
import Navbar from "../components/Navbar";
import { Swal, swalSuccess, swalError, swalLoading } from "../apis/sweetalert";

export default function MovieDetail(props) {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { movieBySlug } = useSelector((state) => state.movieReducer);
  const { genres } = useSelector((state) => state.genreReducer);

  useEffect(() => {
    swalLoading();
    dispatch(fetchMovieBySlug(slug))
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        dispatch(setMovieBySlug(data));
        return dispatch(fetchGenres());
      })
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        dispatch(setGenres(data));
        Swal.close();
      })
      .catch((err) => {
        swalError("", `${err.message}`).then((result) => {
          if (result.isConfirmed) {
            history.goBack();
          }
        });
      });
  }, []);

  let showCasts;
  if (movieBySlug.Casts) {
    showCasts = (
      <div className="modal-body d-flex flex-wrap justify-content-start">
        {movieBySlug.Casts.map((cast) => {
          return (
            <div className="text-center mr-3 mb-3" key={cast.id}>
              <img className="rounded-circle border-0 mb-3" src={cast.profilePict} alt="can't load the image" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
              <br />
              <span className="badge badge-info" style={{ fontSize: "14px" }}>
                {cast.name}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "60px" }} className="pb-3">
      <Navbar />

      <div className="mx-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="font-weight-bolder">{movieBySlug.title}</h2>

          <div className="row align-items-center mr-1">
            <i className="fa fa-star text-warning" style={{ fontSize: "24px" }} />
            &nbsp;&nbsp;
            <h4 className="m-0 font-weight-bolder">{Number(movieBySlug.rating).toFixed(1)} / 5.0</h4>
          </div>
        </div>
        <div className="row" style={{ minHeight: "60vh" }}>
          <div className="col-3">
            <img src={movieBySlug.imgUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="col-9">
            <iframe
              width="100%"
              height="100%"
              src={movieBySlug.trailerUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className=" my-3">
          <button className="btn btn-success rounded-pill mr-2">{movieBySlug.category}</button>
          {genres.map((genre) => {
            if (genre.id === movieBySlug.GenreId) {
              return (
                <button key={genre.id} className="btn btn-outline-light rounded-pill">
                  {genre.name}
                </button>
              );
            }
          })}
        </div>
        <div className="text-left">
          <h4>Synopsis</h4>
          <p>{movieBySlug.synopsis}</p>
          <h4 className="mb-0">Casts</h4>
          {showCasts}
        </div>
      </div>
    </div>
  );
}
