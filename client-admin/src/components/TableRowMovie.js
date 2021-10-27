import { useHistory } from "react-router";

export default function TableRowMovie(props) {
  const history = useHistory();
  const { movie, idx, deleteMovieById } = props;

  return (
    <tr className="text-white text-center" style={{ backgroundColor: "#303030" }}>
      <td>{idx + 1}</td>
      <td>
        <img src={movie.imgUrl} alt="" style={{ width: "200px", borderRadius: "20px" }} />
      </td>
      <td className="text-left">{movie.title}</td>
      <td>2</td>
      <td>{movie.GenreId}</td>
      <td className="text-left">{movie.synopsis}</td>
      <td>{movie.rating}</td>
      <td>
        <a href={movie.trailerUrl} className="btn btn-danger btn-circle" target="_blank">
          <i className="fas fa-play"></i>
        </a>
      </td>
      <td>
        <a
          href="#"
          className="btn btn-success btn-circle m-1"
          onClick={(e) => {
            e.preventDefault();
            history.push(`/editMovie/${movie.id}`);
          }}
        >
          <i className="fa fa-pencil-alt"></i>
        </a>
        <a
          href="#"
          className="btn btn-danger btn-circle m-1"
          onClick={(e) => {
            e.preventDefault();
            deleteMovieById(movie.id);
          }}
        >
          <i className="fa fa-trash"></i>
        </a>
      </td>
    </tr>
  );
}
