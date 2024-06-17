import React from "react";
import "./Hero.css";
import "../buttons/Buttons";

export default function Hero() {
  return (
    <div>
      <div className="hero-bg">
        <div className="hero-content">
          <div>
            <h1>Book your rooms now</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              error repudiandae tenetur accusantium.
            </p>
          </div>
          <div>
            <button className="btn btn-red">Button</button>
            <button className="btn btn-red-reverse">Button</button>
          </div>
        </div>
      </div>
      <div className="search-bar"></div>
    </div>
  );
}
