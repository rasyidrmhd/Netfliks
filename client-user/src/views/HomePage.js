import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import GenreCard from "../components/GenreCard";
import MovieCard from "../components/MovieCard";
import { server } from "../apis/server";

function HomePage() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${server}/genre`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGenres(data);
      })
      .catch((err) => {});

    fetch(`${server}/movie?rating=5`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner align-items-center" style={{ height: "70vh" }}>
          <div className="carousel-item active">
            <img src="https://img.okezone.com/content/2019/05/06/206/2051975/makna-di-balik-kalimat-i-love-you-3000-di-avengers-endgame-rzLSTLrS4P.jpg" className="d-block w-100 img-fluid" alt="..." />
            {/* <div class="d-flex flex-column align-items-center carousel-caption text-left" style={{ top: "25%" }}>
              <h1>Hello World</h1>
              <p>...</p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src="https://aliefworkshop.files.wordpress.com/2020/04/sonic5.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://imgx.sonora.id/crop/133x0:1028x587/x/photo/2020/06/12/796445458.jpeg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <h4 className="mt-3 mb-0 mx-2">Genres</h4>
      <div className="d-flex flex-row justify-content-center">
        {genres.map((genre) => {
          return <GenreCard genre={genre} key={genre.id}></GenreCard>;
        })}
      </div>
      <h4 className="mt-3 mb-0 mx-2">Top Rated</h4>
      <div>
        <div className="d-flex flex-row justify-content-start" style={{ width: "90vw" }}>
          {movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id}></MovieCard>;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
