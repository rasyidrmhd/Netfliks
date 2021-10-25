import React from "react";

export default class MoviesCard extends React.Component {
  render() {
    const { movie } = this.props;
    return <h1>{movie.title}</h1>;
  }
}
