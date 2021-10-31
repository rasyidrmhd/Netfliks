import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from "react-router-dom";
import { fetchMovies, setMovies } from "../store/actions/movieAction";
import { fetchGenres, setGenres } from "../store/actions/genreAction";
import Navbar from "../components/Navbar";
import GenreCard from "../components/GenreCard";
import MovieCard from "../components/MovieCard";
import { Swal, swalLoading, swalSuccess, swalError } from "../apis/sweetalert";
import one from "../assets/carousel/1.png";
import two from "../assets/carousel/2.png";
import three from "../assets/carousel/3.png";
import four from "../assets/carousel/4.png";

export default function HomePage() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movieReducer);
  const { genres } = useSelector((state) => state.genreReducer);
  const [topRated, setTopRated] = useState([]);

  const bannerStyle = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const movieCardStyle = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    swalLoading();
    dispatch(fetchGenres())
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
        return dispatch(fetchMovies());
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
        dispatch(setMovies(data));
        Swal.close();
      })
      .catch((err) => {
        Swal.close();
        swalError("", `${err.message}`);
      });
  }, []);

  useEffect(() => {
    swalLoading();
    dispatch(fetchMovies({ rating: 5 }))
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        setTopRated(data);
        Swal.close();
      })
      .catch((err) => {});
  }, []);

  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />
      <Carousel responsive={bannerStyle} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
        <div style={{ height: "70vh" }}>
          <img src={one} className="d-block w-100 img-fluid" alt="..." style={{ objectFit: "cover" }} />
        </div>
        <div style={{ height: "70vh" }}>
          <img src={two} className="d-block w-100" alt="..." style={{ objectFit: "cover" }} />
        </div>
        <div style={{ height: "70vh" }}>
          <img src={three} className="d-block w-100" alt="..." style={{ objectFit: "cover" }} />
        </div>
        <div style={{ height: "70vh" }}>
          <img src={four} className="d-block w-100" alt="..." style={{ objectFit: "cover" }} />
        </div>
      </Carousel>
      <h4 className="mt-3 mb-0 mx-3 font-weight-bolder">Genres</h4>
      <div className="d-flex flex-row justify-content-center mx-1">
        {genres.map((genre) => {
          return <GenreCard genre={genre} key={genre.id}></GenreCard>;
        })}
      </div>
      <h4 className="mt-3 mb-0 mx-3 font-weight-bolder">Top Rated Movies</h4>
      <div>
        <Carousel responsive={movieCardStyle} infinite={true} centerMode={true}>
          {topRated.map((movie) => {
            return <MovieCard movie={movie} key={movie.id}></MovieCard>;
          })}
        </Carousel>
      </div>
      <h4 className="mt-3 mb-0 mx-3 font-weight-bolder">All Movies</h4>
      <div>
        <div className="d-flex flex-wrap flex-row justify-content-start mx-1">
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
