import React from "react";
import "./Hero.css";
import "../../css/Buttons.css";
import SearchBar from "../searchbar/SearchBar";

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
          <div className="hero-btns">
            <button className="btn btn-red">Button</button>
            <button className="btn btn-red-reverse">Button</button>
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
