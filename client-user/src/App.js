import React from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/css/fontfamily.css";
import "./assets/css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.css";
import HomePage from "./views/HomePage";
import MovieDetail from "./views/MovieDetail";
import FilterPage from "./views/FilterPage";
import PagetNotFound from "./views/PageNotFound";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#212121", color: "white" }}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movie/:slug">
          <MovieDetail />
        </Route>
        <Route path="/genre/:GenreId">
          <FilterPage filter="GenreId" />
        </Route>
        <Route path="/search">
          <FilterPage filter="search" />
        </Route>
        <Route path="/boxOffice">
          <FilterPage filter="category" name="Box Office" />
        </Route>
        <Route path="/tvSeries">
          <FilterPage filter="category" name="TV Series" />
        </Route>
        <Route path="/animes">
          <FilterPage filter="category" name="Animes" />
        </Route>
        <Route path="*">
          <PagetNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
