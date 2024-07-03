import React from "react";
import "./NotFound.css";
import lostBoy from "../../assets/images/lost.png";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>Lost in the lobby? This page is unavailable.</p>
      <img src={lostBoy} alt="Lost boy." />
    </div>
  );
}
