import React from "react";
import Navbar from "./Navbar";
import MoviesCard from "./MoviesCard";

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
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

  handleClick = () => {
    alert("Tertekan");
  };

  render() {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#212121", paddingTop: "100px", color: "white" }}>
        <Navbar></Navbar>
        <div className="container-fluid">
          {this.state.movies.map((movie) => {
            return <MoviesCard movie={movie} key={movie.id}></MoviesCard>;
          })}
        </div>
      </div>
    );
  }
}
