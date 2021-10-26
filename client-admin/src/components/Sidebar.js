import React from "react";
import defaultProfile from "../assets/profile/default.png";

function Sidebar(props) {
  return (
    <ul className="navbar-nav sidebar sidebar-dark accordion border-right fixed-top" id="accordionSidebar" style={{ backgroundColor: "#212121", color: "white" }}>
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <a className="navbar-brand text-danger" href="#" style={{ fontSize: 20 }}>
          Netfliks Admin
        </a>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUser" aria-expanded="true" aria-controls="collapseUser">
          <img className="img-profile rounded-circle" src={defaultProfile} />
          &nbsp;<span>Hello, Admin</span>
        </a>
        <div id="collapseUser" className="collapse" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              Logout
            </a>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            props.changePage("register");
          }}
        >
          <i className="fas fa-user-tie"></i>
          &nbsp;<span>Register Admin</span>
        </a>
      </li>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <a
          className="nav-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            props.changePage("genre");
          }}
        >
          <i className="fas fa-quote-right"></i>
          &nbsp;<span>Genres</span>
        </a>
      </li>

      <li className="nav-item">
        <a
          className="nav-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            props.changePage("home");
          }}
        >
          <i className="fas fa-film"></i>
          &nbsp;<span>Movies</span>
        </a>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default Sidebar;
