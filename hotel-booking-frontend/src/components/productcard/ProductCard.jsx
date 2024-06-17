import React from "react";
import "./ProductCard.css";
import "../Buttons/Buttons";

export default function ProductCard() {
  return (
    <>
      <div className="card">
        <div className="card-img" />
        <div>
          <h1>Comfort Hotel Malaga</h1>
          <a href="#">About the hotel</a>
          <h3>Malaga, Spain</h3>
        </div>
        <div className="card-price">
          <h2>Price per night</h2>
          <h1>$299</h1>
          <div>
            <button className="btn btn-red">Book now</button>
          </div>
        </div>
      </div>

      <hr className="card-hr" />

      <div className="card">
        <div className="card-img" />
        <div>
          <h1>Comfort Hotel Malaga</h1>
          <a href="#">About the hotel</a>
          <h3>Malaga, Spain</h3>
        </div>
        <div className="card-price">
          <h2>Price per night</h2>
          <h1>$299</h1>
          <div>
            <button className="btn btn-red">Book now</button>
          </div>
        </div>
      </div>

      <hr className="card-hr" />

      <div className="card">
        <div className="card-img" />
        <div>
          <h1>Comfort Hotel Malaga</h1>
          <a href="#">About the hotel</a>
          <h3>Malaga, Spain</h3>
        </div>
        <div className="card-price">
          <h2>Price per night</h2>
          <h1>$299</h1>
          <div>
            <button className="btn btn-red">Book now</button>
          </div>
        </div>
      </div>
    </>
  );
}
