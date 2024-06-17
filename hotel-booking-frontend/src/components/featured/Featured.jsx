import React, { useState, useEffect } from "react";
import data from "./HotelData.json";
import "./Featured.css";
import "../../css/Buttons.css";

export default function Featured() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="carousel">
        {data.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={item.image} alt={item.hotelName} />
            <div className="carousel-caption">
              <h2>{item.hotelName}</h2>
              <h5>{item.Location}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
