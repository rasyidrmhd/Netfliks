import React from "react";
import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router-dom";

function MovieCard(props) {
  const history = useHistory();
  const { movie } = props;

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        history.push(`/movie/${movie.slug}`);
      }}
      className="card shadow my-3 mx-2 d-flex border-0 text-decoration-none"
      key={movie.id}
      style={{ height: "20rem", background: `url(${movie.imgUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px" }}
    >
      <div className="card-body text-center font-weight-bolder d-flex flex-column align-items-start justify-content-end text-white">
        <span style={{ textShadow: "3px 4px 10px #212121" }}>{movie.title}</span>
        <div className="d-flex">
          <ReactStars
            count={5}
            value={movie.rating}
            edit={false}
            size={15}
            color="gray"
            activeColor="#f6c23e"
            emptyIcon={<i className="fa fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            filledIcon={<i className="fa fa-star" />}
          />
          {Number(movie.rating).toFixed(1)} / 5.0
        </div>
      </div>
    </a>
  );
}

export default MovieCard;
