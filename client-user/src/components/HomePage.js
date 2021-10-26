import React from "react";
import Navbar from "./Navbar";
import MoviesCard from "./MoviesCard";
import GenreCard from "./GenreCard";

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      genres: [],
      movies: [],
    };
  }

  async componentDidMount() {
    const genres = await fetch("http://localhost:3001/genre");
    const dataGenres = await genres.json();
    this.setState({ genres: dataGenres });
    console.log(this.state.genres);

    const movies = await fetch("http://localhost:3001/movie?rating=5");
    const dataMovies = await movies.json();
    this.setState({ movies: dataMovies });
    console.log(this.state.movies);
  }

  handleClick = () => {
    alert("Tertekan");
  };

  render() {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#212121", paddingTop: "60px", color: "white" }}>
        <Navbar></Navbar>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner align-items-center" style={{ height: "70vh" }}>
            <div className="carousel-item active">
              <img src="https://img.okezone.com/content/2019/05/06/206/2051975/makna-di-balik-kalimat-i-love-you-3000-di-avengers-endgame-rzLSTLrS4P.jpg" className="d-block w-100 img-fluid" alt="..." />
              {/* <div class="carousel-caption" style={{ top: "25%", bottom: "initial" }}>
                <h5>Hello World</h5>
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
        <h4 className="container-fluid mt-3 mb-0">Genres</h4>
        <div className="d-flex flex-row justify-content-center">
          {this.state.genres.map((genre) => {
            return <GenreCard genre={genre} key={genre.id}></GenreCard>;
          })}
        </div>
        <h4 className="container-fluid mt-3 mb-0">Top Rated</h4>
        <div>
          <div className="d-flex flex-row justify-content-start" style={{ width: "90vw" }}>
            {this.state.movies.map((movie) => {
              return <MoviesCard movie={movie} key={movie.id}></MoviesCard>;
            })}
          </div>
        </div>
        {/* <div className="container-fluid">
          {this.state.movies.map((movie) => {
            return <MoviesCard movie={movie} key={movie.id}></MoviesCard>;
          })}
        </div> */}
      </div>
    );
  }
}
