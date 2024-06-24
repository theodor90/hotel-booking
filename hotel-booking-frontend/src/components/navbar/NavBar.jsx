import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "../../css/Buttons.css";

const NavBar = () => {
  return (
    <nav>
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <button className="btn btn-blue">Login</button>
    </nav>
  );
};

export default NavBar;
