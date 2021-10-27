import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/css/fontfamily.css";
import "./assets/css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.css";
import PrivateLogin from "./navigation-guard/PrivateLogin";
import PrivatePage from "./navigation-guard/PrivatePage";
import Login from "./views/Login";
import Home from "./views/Home";
import Genre from "./views/Genre";
import Movie from "./views/Movie";
import Register from "./views/Register";
import AddGenre from "./views/AddGenre";
import AddMovie from "./views/AddMovie";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const changeIsLoggedIn = (value) => {
    setIsLoggedIn(value);
  };

  return (
    <div>
      <Switch>
        <PrivateLogin exact path="/">
          <div
            style={{
              minHeight: "100vh",
              background: "url(https://assets.nflxext.com/ffe/siteui/vlv3/a1a5d7dc-aedf-4570-b58d-693af16e1445/13a76a0d-0dc6-416a-9bb2-4495f4d15fb1/ID-en-20211020-popsignuptwoweeks-perspective_alpha_website_medium.jpg)",
              backgroundColor: "#212121",
              color: "white",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Login changeIsLoggedIn={changeIsLoggedIn} />
          </div>
        </PrivateLogin>
        <PrivatePage path="/home">
          <Home />
        </PrivatePage>
        <PrivatePage path="/register">
          <Register />
        </PrivatePage>
        <PrivatePage path="/genre">
          <Genre />
        </PrivatePage>
        <PrivatePage path="/addGenre">
          <AddGenre />
        </PrivatePage>
        <PrivatePage path="/movie">
          <Movie />
        </PrivatePage>
        <PrivatePage path="/addMovie">
          <AddMovie />
        </PrivatePage>
      </Switch>
    </div>
  );
}

export default App;
