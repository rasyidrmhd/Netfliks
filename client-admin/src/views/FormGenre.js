import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchGenreById, postPutGenre } from "../store/actions/genreAction";
import Sidebar from "../components/Sidebar";
import { swalSuccess, swalError, swalLoading, Swal } from "../apis/sweetalert";

export default function AddGenre() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { genreId } = useParams();
  const { genreById } = useSelector((state) => state.genreReducer);
  const [err, setErr] = useState([]);

  const [inputGenre, setInputGenre] = useState({
    name: "",
    imgUrl: "",
  });

  useEffect(() => {
    if (genreId) {
      dispatch(fetchGenreById(genreId));
    }
  }, []);

  useEffect(() => {
    if (genreId) {
      setInputGenre(genreById);
    }
  }, [genreById]);

  const changeInputGenreHandler = (e) => {
    const { value, name } = e.target;

    setInputGenre({
      ...inputGenre,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let method;
    let notif;
    if (genreId) {
      method = "PUT";
      notif = "updated";
    } else {
      method = "POST";
      notif = "added";
    }

    swalLoading();
    dispatch(postPutGenre(method, genreId, inputGenre))
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        Swal.close();
        swalSuccess("", `Genre ${data.name} successfully ${notif}`).then((result) => {
          if (result.isConfirmed) {
            history.push("/genre");
          }
        });
      })
      .catch((err) => {
        Swal.close();
        setErr(err);
      });
  };

  let formContent;
  if (genreId) {
    formContent = { title: `Edit Genre ${genreById.name}`, button: "Edit" };
  } else {
    formContent = { title: "Add New Genre", button: "Add" };
  }

  let showError;
  if (err.length !== 0) {
    showError = (
      <div className="text-center mb-3">
        {err.message.map((err, idx) => {
          return (
            <span key={idx} className="badge badge-danger mr-1">
              {err}
            </span>
          );
        })}
      </div>
    );
  }

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
                  <h5 className="m-0 font-weight-bold text-danger">{formContent.title}</h5>
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
                      <input id="name" type="text" className="form-control border-0 rounded-pill" autoComplete="off" placeholder="Enter new genre name" name="name" defaultValue={inputGenre.name} onChange={changeInputGenreHandler} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="imgUrl">Image Url</label>
                      <input
                        id="imgUrl"
                        type="text"
                        className="form-control border-0 rounded-pill"
                        autoComplete="off"
                        placeholder="Enter new genre image url"
                        name="imgUrl"
                        defaultValue={inputGenre.imgUrl}
                        onChange={changeInputGenreHandler}
                      />
                    </div>
                    {showError}
                    <button type="submit" className="btn btn-danger btn-block mr-2 rounded-pill">
                      {formContent.button}
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
