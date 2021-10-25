import React from "react";
import defaultProfile from "../assets/profile/default.png";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark border-bottom border-secondary fixed-top" style={{ backgroundColor: "#212121" }}>
        <a className="navbar-brand text-danger font-weight-bolder" href="#" style={{ fontSize: 26 }}>
          Netfliks
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="mr-2 d-none d-lg-inline text-white font-weight-bolder" id="displayName">
                  Sign In
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="mr-2 d-none d-lg-inline text-white font-weight-bolder" id="displayName">
                  Sign Up
                </span>
              </a>
            </li>
          </ul>

          {/* <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-white font-weight-bolder">Welcome, User</span>
                <img class="img-profile rounded-circle" style={{ height: 30 }} src={defaultProfile} alt="..." />
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  <i class="fas fa-clipboard-list fa-sm fa-fw mr-2"></i>
                  Watchlist
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2"></i>
                  Sign Out
                </a>
              </div>
            </li>
          </ul> */}
        </div>
      </nav>
    );
  }
}
