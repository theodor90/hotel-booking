import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <div className="footer-col">
          <h1>LOGO</h1>
          <p>Storgatan 12</p>
          <p>111 22 Stockholm</p>
          <p>Sweden</p>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
        <div className="footer-col">
          <h4>Links</h4>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>
            <i className="fa-solid fa-phone"></i> (+46) 733 12 34 56
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> support@InnFinder.com
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-row">
        <p>&copy; 2024 InnFinder - All Rights Reserved</p>
        <ul>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie policy</a>
          </li>
        </ul>
        <ul>
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-x-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
}