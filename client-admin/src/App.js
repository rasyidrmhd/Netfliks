import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/css/fontfamily.css";
import "./assets/css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.css";
import Login from "./views/Login";
import Home from "./views/Home";
import Genre from "./views/Genre";
import Movie from "./views/Movie";
import Register from "./views/Register";
import AddGenre from "./views/AddGenre";
import AddMovie from "./views/AddMovie";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [page, setPage] = useState("home");

  const changeIsLoggedIn = (value) => {
    setIsLoggedIn(value);
  };

  const changePage = (value) => {
    setPage(value);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
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
            <Login changeIsLoggedIn={changeIsLoggedIn}></Login>
          </div>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/movie">
          <Movie></Movie>
        </Route>
        <Route path="/addMovie">
          <AddMovie></AddMovie>
        </Route>
        <Route path="/genre">
          <Genre></Genre>
        </Route>
      </Switch>
    </div>
  );

  // if (!isLoggedIn) {
  //   return (
  //     <div
  //       style={{
  //         minHeight: "100vh",
  //         background: "url(https://assets.nflxext.com/ffe/siteui/vlv3/a1a5d7dc-aedf-4570-b58d-693af16e1445/13a76a0d-0dc6-416a-9bb2-4495f4d15fb1/ID-en-20211020-popsignuptwoweeks-perspective_alpha_website_medium.jpg)",
  //         backgroundColor: "#212121",
  //         color: "white",
  //         backgroundRepeat: "no-repeat",
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //       }}
  //     >
  //       <Login changeIsLoggedIn={changeIsLoggedIn}></Login>
  //     </div>
  //   );
  // } else {
  //   if (page === "home") {
  //     return (
  //       <div>
  //         <HomePage changePage={changePage}></HomePage>
  //       </div>
  //     );
  //   } else if (page === "genre") {
  //     return (
  //       <div>
  //         <Genre changePage={changePage}></Genre>
  //       </div>
  //     );
  //   } else if (page === "register") {
  //     return (
  //       <div>
  //         <Register changePage={changePage}></Register>
  //       </div>
  //     );
  //   } else if (page === "addGenre") {
  //     return (
  //       <div>
  //         <AddGenre changePage={changePage}></AddGenre>
  //       </div>
  //     );
  //   } else if (page === "addMovie") {
  //     return (
  //       <div>
  //         <AddMovie changePage={changePage}></AddMovie>
  //       </div>
  //     );
  //   }
  // }
}

export default App;
