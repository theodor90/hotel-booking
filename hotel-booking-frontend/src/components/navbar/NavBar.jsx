import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "../../css/Buttons.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
                </li>
                <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Hotels</Link>
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
