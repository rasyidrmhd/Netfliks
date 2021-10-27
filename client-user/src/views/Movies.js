import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { server } from "../apis/server";
import Navbar from "../components/Navbar";

export default function Movies(props) {
  const history = useHistory();

  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      <h1>Hello From Movie All Movies</h1>
    </div>
  );
}
