import defaultProfile from "../assets/profile/default.png";

export default function TableRowAdmin(props) {
  const { user, idx } = props;

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
    </tr>
  );
}
