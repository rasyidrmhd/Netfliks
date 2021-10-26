import React, { useState, useEffect } from "react";
import "./assets/css/fontfamily.css";
import "./assets/css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.css";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
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
        <Login></Login>
      </div>
    );
  } else {
    return (
      <div>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
