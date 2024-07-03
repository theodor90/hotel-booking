import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const dummyClick = (event) => {
  event.preventDefault();
};

export default function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <div className="footer-col">
          <Link to="/">
            <h1 className="logo">InnFinder</h1>
          </Link>
          <p>Storgatan 12</p>
          <p>111 22 Stockholm</p>
          <p>Sweden</p>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/hotels">Hotels</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="tel:+46733123456">Phone</a>
          <a href="mailto:support@InnFinder.com">Email</a>
        </div>
        <div className="footer-col">
          <h4>Contributors</h4>
          <a href="https://github.com/theodor90" target="_blank">
            Theodor
          </a>
          <a href="https://github.com/DavidR12344" target="_blank">
            David
          </a>
          <a href="https://github.com/al-swe" target="_blank">
            Alan
          </a>
          <a href="https://github.com/MinaStormcloud" target="_blank">
            Amina
          </a>
          <a href="https://github.com/mattiasvlex" target="_blank">
            Mattias
          </a>
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
            <a href="#" onClick={dummyClick}>
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" onClick={dummyClick}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" onClick={dummyClick}>
              Cookie policy
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li className="footer-icon">
            <FontAwesomeIcon icon={faXTwitter} />
          </li>
          <li className="footer-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </ul>
      </div>
    </footer>
  );
}
