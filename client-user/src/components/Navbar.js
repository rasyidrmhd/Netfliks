import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { swalError, swalLoading, Swal } from "../apis/sweetalert";
import { fetchMovies, setMovies } from "../store/actions/movieAction";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputSearch, setInputSearch] = useState("");

  const changeInputSearchHandle = (e) => {
    const { value } = e.target;
    setInputSearch(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    swalLoading();
    dispatch(fetchMovies({ title: `${inputSearch}` }))
      .then((response) => {
        return response.json().then((json) => {
          if (response.ok) {
            return json;
          } else {
            return Promise.reject(json);
          }
        });
      })
      .then((data) => {
        dispatch(setMovies(data));
        Swal.close();
        history.push("/search");
      })
      .catch((err) => {
        Swal.close();
        swalError("", `${err.message}`);
      });
    // console.log(inputSearch);
  };

  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top" style={{ backgroundColor: "#212121" }}>
      <Link className="navbar-brand text-danger font-weight-bolder" href="#" style={{ fontSize: 26 }} to="/">
        Netfliks
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavLink className="nav-item text-decoration-none" to="/" exact={true}>
            <span className="nav-link" href="#">
              <span className="mr-2 d-none d-lg-inline font-weight-bolder">Home</span>
            </span>
          </NavLink>
          <NavLink className="nav-item text-decoration-none" to="/boxOffice">
            <span className="nav-link" href="#">
              <span className="mr-2 d-none d-lg-inline font-weight-bolder">Box Office</span>
            </span>
          </NavLink>
          <NavLink className="nav-item text-decoration-none" to="/tvSeries">
            <span className="nav-link" href="#">
              <span className="mr-2 d-none d-lg-inline font-weight-bolder">TV Series</span>
            </span>
          </NavLink>
          <NavLink className="nav-item text-decoration-none" to="/animes">
            <span className="nav-link" href="#">
              <span className="mr-2 d-none d-lg-inline font-weight-bolder">Animes</span>
            </span>
          </NavLink>
        </ul>

        <form className="form-inline my-2 my-lg-0" onSubmit={submitHandler}>
          <input className="form-control mr-sm-2 border-0 rounded-pill text-white" type="text" placeholder="Search by title" style={{ backgroundColor: "#303030" }} defaultValue={inputSearch} onChange={changeInputSearchHandle} />
          <button className="btn btn-danger rounded-pill" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>

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
