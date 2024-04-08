import React from "react";
import "./home.css";

import logo from "../assets/Home/logo.png";
function Home() {
  return (
    <div className="home-page">
      <div className="home-info">
        <img className="slide-in" src={logo} />
      </div>
    </div>
  );
}

export default Home;
