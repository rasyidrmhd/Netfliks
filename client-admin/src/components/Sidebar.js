import React from "react";
import { useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import defaultProfile from "../assets/profile/default.png";

export default function Sidebar(props) {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("access_token");
    history.push("/");
  };

  return (
    <ul className="navbar-nav sidebar sidebar-dark accordion border-right fixed-top" id="accordionSidebar" style={{ backgroundColor: "#212121", color: "white" }}>
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/home">
        <span className="navbar-brand text-danger" style={{ fontSize: 20 }}>
          Netfliks Admin
        </span>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUser" aria-expanded="true" aria-controls="collapseUser">
          <img className="img-profile rounded-circle" src={defaultProfile} />
          &nbsp;<span>Hello, Admin</span>
        </a>
        <div id="collapseUser" className="collapse" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <a
              href="#"
              className="collapse-item text-dark"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              Logout
            </a>
          </div>
        </div>
      </li>

      <NavLink className="nav-item text-decoration-none" to="/home">
        <span className="nav-link">
          <i className="fas fa-user-tie"></i>
          &nbsp;<span>List Admins</span>
        </span>
      </NavLink>

      <hr className="sidebar-divider my-0" />

      <NavLink className="nav-item text-decoration-none" to="/genre">
        <span className="nav-link">
          <i className="fas fa-quote-right"></i>
          &nbsp;<span>List Genres</span>
        </span>
      </NavLink>

      <NavLink className="nav-item text-decoration-none" to="/movie">
        <span className="nav-link">
          <i className="fas fa-film"></i>
          &nbsp;<span>List Movies</span>
        </span>
      </NavLink>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
