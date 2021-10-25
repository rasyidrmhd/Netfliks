import React from "react";
import Navbar from "./Navbar";
import MoviesCard from "./MoviesCard";

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      genres: [],
      movies: [
        {
          id: 1,
          title: "Attack On Titan",
          slug: "movie1",
          synopsis: "Attack On Titan Synopsis",
          trailerUrl: "google.com",
          imgUrl: "google.com",
          rating: 8.4,
          genreId: 1,
          authorId: 1,
          createdAt: "12-12-2020",
          updatedAt: "12-12-2020",
        },
        {
          id: 2,
          title: "Squid Game",
          slug: "movie2",
          synopsis: "Squid Game Synopsis",
          trailerUrl: "google.com",
          imgUrl: "google.com",
          rating: 8.4,
          genreId: 1,
          authorId: 1,
          createdAt: "12-12-2020",
          updatedAt: "12-12-2020",
        },
        {
          id: 3,
          title: "Avengers: End Game",
          slug: "movie2",
          synopsis: "Avengers End Game Synopsis",
          trailerUrl: "google.com",
          imgUrl: "google.com",
          rating: 8.4,
          genreId: 1,
          authorId: 1,
          createdAt: "12-12-2020",
          updatedAt: "12-12-2020",
        },
      ],
    };
  }

  async componentDidMount() {
    const result = await fetch("http://localhost:3001/genre");
    const data = await result.json();
    this.setState({ genres: data });
    console.log(this.state.genres);
  }

  handleClick = () => {
    alert("Tertekan");
  };

  render() {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#212121", paddingTop: "60px", color: "white" }}>
        <Navbar></Navbar>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" style={{ height: "70vh" }}>
            <div className="carousel-item active">
              <img src="https://img.okezone.com/content/2019/05/06/206/2051975/makna-di-balik-kalimat-i-love-you-3000-di-avengers-endgame-rzLSTLrS4P.jpg" className="d-block w-100 img-fluid" alt="..." />
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
        <div className="d-flex flex-row flex-wrap justify-content-center text-dark">
          {this.state.genres.map((genre) => {
            return (
              <div className="card m-3" key={genre.id}>
                <div className="card-body">{genre.name}</div>
              </div>
            );
          })}
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
