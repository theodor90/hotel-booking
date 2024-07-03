import React from "react";
import "./Hero.css";
import "../../css/Buttons.css";
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };



  return (
    <div>
      <div className="hero-bg">
        <div className="hero-content">
          <div>
            <h1>Book your dream stay</h1>
            <p>
              Find the perfect destination and make unforgettable memories with us.
            </p>
          </div>
          <div className="hero-btns">
            <button className="btn btn-red" onClick={handleRegister}>Register</button>
            <button className="btn btn-red-reverse" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
// WORKING