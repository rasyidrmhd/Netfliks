import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { server } from "../apis/server";
import Navbar from "../components/Navbar";

export default function MovieDetail(props) {
  const history = useHistory();
  const { movieId } = useParams();

  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      <h1>Hello From Movie Detail {movieId}</h1>
    </div>
  );
}
