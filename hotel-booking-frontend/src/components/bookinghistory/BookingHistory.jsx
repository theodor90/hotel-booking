import React from "react";
import "./BookingHistory.css";

export default function BookingHistory() {
  return (
    <div>
      <div className="profile-history">
        <div>
          <h2>Upcoming bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Nights</th>
                <th>Hotel</th>
                <th>Cost</th>
                <th>Manage Booking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5</td>
                <td>Ritz Hotel</td>
                <td>$699</td>
                <td>
                  <a href="#">Edit</a> | <a href="#">Cancel</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Grand Budapest Hotel</td>
                <td>$450</td>
                <td>
                  <a href="#">Edit</a> | <a href="#">Cancel</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Ritz Paris</td>
                <td>$300</td>
                <td>
                  <a href="#">Edit</a> | <a href="#">Cancel</a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Clarion</td>
                <td>$589</td>
                <td>
                  <a href="#">Edit</a> | <a href="#">Cancel</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
