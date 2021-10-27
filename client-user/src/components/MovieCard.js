import React from "react";
import { useHistory } from "react-router-dom";

function MovieCard(props) {
  const history = useHistory();
  const { movie } = props;

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        history.push(`/movie/${movie.id}`);
      }}
      className="card shadow my-3 mx-2 d-flex border-0 text-decoration-none"
      key={movie.id}
      style={{ width: "20rem", height: "20rem", background: `url(${movie.imgUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px" }}
    >
      <div className="card-body text-center font-weight-bolder d-flex flex-column align-items-start justify-content-end text-white">
        <span style={{ textShadow: "3px 4px 10px #212121" }}>{movie.title}</span>
        <div>
          <i className="fas fa-star text-warning"></i>
          <i className="fas fa-star text-warning"></i>
          <i className="fas fa-star text-warning"></i>
          <i className="fas fa-star text-warning"></i>
          <i className="fas fa-star text-warning"></i> {Number(movie.rating).toFixed(1)} / 5.0
        </div>
      </div>
    </a>
  );
}

export default MovieCard;
