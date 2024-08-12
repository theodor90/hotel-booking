import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="about">
      <div>
        <div className="grid">
          <div className="img about-us"></div>
          <div className="text-wrapper">
            <h3>About Us</h3>
            <p>
              Welcome to InnFinder, your trusted partner in finding the perfect
              hotel for your travels. Whether you're planning a business trip, a
              family vacation, or a romantic getaway, we are here to make your
              booking experience seamless and enjoyable.
            </p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="img our-story"></div>
        <div className="text-wrapper text-right">
          <h3>Our Story</h3>
          <p>
            Founded in 2010, InnFinder was born out of a passion for travel and
            a desire to provide travelers with an easy and reliable way to book
            their accommodations. We started with a small team of travel
            enthusiasts and have grown into a global platform, offering a wide
            range of hotels, from budget-friendly options to luxury resorts.
          </p>
        </div>
      </div>

      <div className="our-mission-wrapper">
        <div className="our-mission">
          <div>
            <h3>Our Mission</h3>
          </div>
          <div>
            <p>
              Our mission is simple: to help you find the perfect stay, no
              matter where you are in the world. We believe that a great hotel
              can enhance your travel experience, and we are committed to
              bringing you the best selection of accommodations at the best
              prices.
            </p>
          </div>
        </div>
      </div>

      <div className="grid offer-choose">
        <div className="text-wrapper">
          <h3>What We Offer</h3>
          <p>
            <strong>Best Price Guarantee</strong> We are committed to providing
            you with the best rates available. If you find a lower price
            elsewhere, we'll match it.
          </p>
          <p>
            <strong>24/7 Customer Support</strong> Our dedicated customer
            service team is available around the clock to assist you with your
            booking and answer any questions you may have.
          </p>
          <p>
            <strong>User-Friendly Experience</strong> Our website is designed to
            be intuitive and easy to use, allowing you to book your stay quickly
            and efficiently.
          </p>
        </div>

        <div className="text-wrapper">
          <h3>Why Choose Us</h3>
          <p>
            <strong>Trusted by Millions</strong> We have helped millions of
            travelers find their perfect stay, and our satisfied customers speak
            to our reliability and quality of service.
          </p>
          <p>
            <strong>Secure Booking</strong> Your safety is our priority. Our
            secure booking process ensures that your personal information is
            protected at all times.
          </p>
          <p>
            <strong>Travel Tips and Guides</strong> Our blog and travel guides
            offer valuable insights and tips to help you make the most of your
            trip.
          </p>
        </div>
      </div>
    </div>
  );
}
