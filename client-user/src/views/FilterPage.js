import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchMovies, setMovies } from "../store/actions/movieAction";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import { Swal, swalError, swalLoading } from "../apis/sweetalert";

export default function FilterCategoryPage({ filter, name }) {
  const { GenreId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movieReducer);
  const { genreById } = useSelector((state) => state.genreReducer);

  useEffect(() => {
    if (GenreId) {
      name = GenreId;
    }

    if (filter !== "search") {
      swalLoading();
      dispatch(fetchMovies({ [filter]: name }))
        .then(async (response) => {
          const result = await response.json();
          if (response.ok) {
            return result;
          } else {
            return Promise.reject(result);
          }
        })
        .then((data) => {
          dispatch(setMovies(data));
          Swal.close();
        })
        .catch((err) => {
          Swal.close();
          swalError("", `${err.message}`);
        });
    }
  }, [filter, name]);

  let showHeader;
  if (GenreId) {
    showHeader = `All Movies by ${genreById.name} Genre`;
  } else if (filter === "search") {
    showHeader = "Search Result";
  } else {
    showHeader = `All ${name}`;
  }

  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      <h4 className="mt-3 mb-0 mx-3 font-weight-bolder">{showHeader}</h4>
      <div>
        <div className="d-flex flex-wrap row justify-content-start mx-1">
          {movies.map((movie) => {
            return (
              <div className="col-3">
                <MovieCard movie={movie} key={movie.id}></MovieCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
