import React from "react";
import "./Buttons.css";

export default function Buttons() {
  return (
    <div className="container">
      <button className="btn btn-red">Button</button>
      <button className="btn btn-red-reverse">Button</button>

      <button className="btn btn-green">Button</button>
      <button className="btn btn-green-reverse">Button</button>

      <button className="btn btn-blue">Button</button>
      <button className="btn btn-blue-reverse">Button</button>

      <button className="btn btn-dark-blue">Button</button>
      <button className="btn btn-dark-blue-reverse">Button</button>
    </div>
  );
}
