import React, { useState, useEffect } from "react";
import { server } from "../apis/server";
import Sidebar from "../components/Sidebar";

function AddMovie(props) {
  return (
    <div>
      <Sidebar changePage={props.changePage}></Sidebar>
    </div>
  );
}

export default AddMovie;
