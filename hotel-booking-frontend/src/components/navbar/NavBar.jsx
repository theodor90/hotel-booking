import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import "../../css/Buttons.css";

const NavBar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault(); // Prevent default link behavior
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hotels">Hotels</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {!token && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {token && (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/logout" onClick={handleLogout}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;