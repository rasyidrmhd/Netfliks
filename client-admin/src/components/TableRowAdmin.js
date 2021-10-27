import defaultProfile from "../assets/profile/default.png";

export default function TableRowAdmin(props) {
  const { user, idx, deleteUserById } = props;

  return (
    <tr className="text-white" style={{ backgroundColor: "#303030" }}>
      <td className="text-center">{idx + 1}</td>
      <td>
        <img src={defaultProfile} alt="" style={{ width: "100px", borderRadius: "20px" }} />
      </td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td className="text-center">{user.phoneNumber}</td>
      <td>{user.address}</td>
      <td>
        <a
          href="#"
          className="btn btn-danger btn-circle m-1"
          onClick={(e) => {
            e.preventDefault();
            deleteUserById(user.id);
          }}
        >
          <i className="fa fa-trash"></i>
        </a>
      </td>
    </tr>
  );
}
