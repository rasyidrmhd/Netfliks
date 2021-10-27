export default function TableRowGenre(props) {
  const { genre, idx, deleteGenreById } = props;

  return (
    <tr className="text-white text-center" style={{ backgroundColor: "#303030" }}>
      <td width="5%">{idx + 1}</td>
      <td width="20%">
        <img src={genre.imgUrl} alt="" style={{ width: "200px", borderRadius: "20px" }} />
      </td>
      <td className="text-left">{genre.name}</td>
      <td>
        <a
          href="#"
          className="btn btn-success btn-circle m-1"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <i className="fa fa-pencil-alt"></i>
        </a>
        <a
          href="#"
          className="btn btn-danger btn-circle m-1"
          onClick={(e) => {
            e.preventDefault();
            deleteGenreById(genre.id);
          }}
        >
          <i className="fa fa-trash"></i>
        </a>
      </td>
    </tr>
  );
}
