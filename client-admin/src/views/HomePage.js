import React, { useState, useEffect } from "react";
import { server } from "../apis/server";
import defaultProfile from "../assets/profile/default.png";

function HomePage() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(`${server}/genre`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGenres(data);
        console.log(genres);
      })
      .catch((err) => {});
  }, []);

  return (
    <div id="wrapper">
      <ul className="navbar-nav sidebar sidebar-dark accordion border-right" id="accordionSidebar" style={{ backgroundColor: "#212121", color: "white" }}>
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
          <a className="navbar-brand text-danger" href="#" style={{ fontSize: 20 }}>
            Netfliks Admin
          </a>
        </a>

        <hr className="sidebar-divider my-0" />

        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUser" aria-expanded="true" aria-controls="collapseUser">
            <img class="img-profile rounded-circle" src={defaultProfile} />
            &nbsp;<span>Hello, Admin</span>
          </a>
          <div id="collapseUser" class="collapse" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="#">
                Logout
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="charts.html">
            <i class="fas fa-user-tie"></i>
            &nbsp;<span>Register Admin</span>
          </a>
        </li>

        <hr className="sidebar-divider my-0" />

        <li class="nav-item">
          <a class="nav-link" href="charts.html">
            <i class="fas fa-quote-right"></i>
            &nbsp;<span>Genres</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="tables.html">
            <i class="fas fa-film"></i>
            &nbsp;<span>Movies</span>
          </a>
        </li>

        <hr class="sidebar-divider d-none d-md-block" />
      </ul>

      <div id="content-wrapper" class="d-flex flex-column" style={{ backgroundColor: "#212121", color: "white" }}>
        {/* Main content */}
        <div id="content">
          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0">Cards</h1>
            </div>

            <div>
              <h1>Hello</h1>
            </div>
          </div>
        </div>
        {/* Main Content */}
      </div>
    </div>
  );
}

export default HomePage;
