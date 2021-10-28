import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { server } from "../apis/server";
import Sidebar from "../components/Sidebar";

export default function AddGenre(props) {
  const history = useHistory();
  const { genreId } = useParams();

  const [inputGenre, setInputGenre] = useState({
    name: "",
    imgUrl: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  useEffect(() => {
    if (genreId) {
      fetch(`${server}/genre/${genreId}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setInputGenre(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const changeInputGenreHandler = (e) => {
    const { value, name } = e.target;

    setInputGenre({
      ...inputGenre,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let url;
    let method;
    if (genreId) {
      url = `${server}/genre/${genreId}`;
      method = "PUT";
    } else {
      url = `${server}/genre`;
      method = "POST";
    }

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputGenre),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("success post or put genre");
        history.push("/genre");
      })
      .catch((err) => {
        console.log(err, "errorrr");
      });
  };

  return (
    <div>
      <Sidebar></Sidebar>

      <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#252525", color: "white" }}>
        {/* Main content */}
        <div id="content" className="d-flex offset-2 justify-content-center">
          <div className="col-8">
            <div className="mt-3">
              <div className="card o-hidden shadow mb-4 border-0" style={{ backgroundColor: "#212121", borderRadius: "20px" }}>
                <div className="card-header py-3 d-flex flex-row justify-content-between align-items-center" style={{ backgroundColor: "#212121" }}>
                  <h5 className="m-0 font-weight-bold text-danger">Add New Genre</h5>
                  <Link className="btn btn-sm btn-danger btn-icon-split" to="/genre">
                    <span className="icon">
                      <i className="fa fa-angle-left"></i>
                    </span>
                    <span className="text">Back</span>
                  </Link>
                </div>
                <div className="card-body" style={{ backgroundColor: "#212121" }}>
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" className="form-control border-0 rounded-pill" autoComplete="off" placeholder="Enter new genre name" name="name" value={inputGenre.name} onChange={changeInputGenreHandler} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="imgUrl">Image Url</label>
                      <input id="imgUrl" type="text" className="form-control border-0 rounded-pill" autoComplete="off" placeholder="Enter new genre image url" name="imgUrl" value={inputGenre.imgUrl} onChange={changeInputGenreHandler} />
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mr-2 rounded-pill">
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
      </div>
    </div>
  );
}
