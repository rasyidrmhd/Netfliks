import React from "react";

export default class GenreCard extends React.Component {
  render() {
    const { genre } = this.props;
    return (
      <div className="card shadow my-3 mx-2 d-flex border-0" style={{ width: "20rem", height: "8rem", background: `url(${genre.imgUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius: "20px" }}>
        <div className="card-body text-center font-weight-bolder d-flex align-items-center justify-content-center">{genre.name}</div>
      </div>
    );
  }
}
