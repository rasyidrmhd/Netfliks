import React from "react";
import { Link, NavLink } from "react-router-dom";
import defaultProfile from "../assets/profile/default.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top" style={{ backgroundColor: "#212121" }}>
      <Link className="navbar-brand text-danger font-weight-bolder" href="#" style={{ fontSize: 26 }} to="/">
        Netfliks
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <NavLink className="nav-item text-decoration-none" to="/">
            <span className="nav-link" href="#">
              <span className="mr-2 d-none d-lg-inline font-weight-bolder">Home</span>
            </span>
          </NavLink>
          <NavLink className="nav-item text-decoration-none" to="/movies">
            <span className="nav-link" href="#">
              <span className="mr-2 d-none d-lg-inline font-weight-bolder">Movies</span>
            </span>
          </NavLink>
          <NavLink className="nav-item text-decoration-none" to="/tvSeries">
            <a className="nav-link" href="#">
              <span className="mr-2 d-none d-lg-inline font-weight-bolder">TV Series</span>
            </a>
          </NavLink>
          <NavLink className="nav-item text-decoration-none" to="/animes">
            <a className="nav-link" href="#">
              <span className="mr-2 d-none d-lg-inline font-weight-bolder">Animes</span>
            </a>
          </NavLink>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item text-decoration-none">
            <a className="nav-link" href="#">
              <span className="mr-2 d-none d-lg-inline font-weight-bolder">Sign In</span>
            </a>
          </li>
          <li className="nav-item text-decoration-none">
            <a className="nav-link" href="#">
              <span className="mr-2 d-none d-lg-inline font-weight-bolder">Sign Up</span>
            </a>
          </li>
        </ul>

        {/* <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-white font-weight-bolder">Welcome, User</span>
              <img className="img-profile rounded-circle" style={{ height: 30 }} src={defaultProfile} alt="..." />
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                <i className="fas fa-clipboard-list fa-sm fa-fw mr-2"></i>
                Watchlist
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2"></i>
                Sign Out
              </a>
            </div>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;
