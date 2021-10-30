import React from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/css/fontfamily.css";
import "./assets/css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.css";
import HomePage from "./views/HomePage";
import Movies from "./views/Movies";
import MovieDetail from "./views/MovieDetail";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#212121", color: "white" }}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/movie/:slug">
          <MovieDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
