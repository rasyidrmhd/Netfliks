import React from "react";

export default class GenreCard extends React.Component {
  render() {
    const { genre } = this.props;
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert("Genre Click");
        }}
        className="card shadow mt-3 mx-2 d-flex border-0 text-decoration-none text-white"
        style={{ width: "20rem", height: "8rem", background: `url(${genre.imgUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius: "20px" }}
      >
        <div className="card-body text-center font-weight-bolder d-flex align-items-center justify-content-center">
          <span style={{ textShadow: "3px 4px 10px #212121" }}>{genre.name}</span>
        </div>
      </a>
    );
  }
}
