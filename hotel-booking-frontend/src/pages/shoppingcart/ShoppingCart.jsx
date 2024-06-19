import { useState } from "react";
import UserDetails from "../../components/userdetails/UserDetails";
import BookingDetails from "../../components/bookingdetails/BookingDetails";
import ProgressBar from "../../components/progressbar/ProgressBar";
import "../../css/Buttons.css";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState(true);
  const [dates, setDates] = useState([new Date(), new Date()]);

  //Take Hotel and Dates as props to display in BookingDetails

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <ProgressBar active="2" />
        <div className="details-container">
          <BookingDetails
            hotel="Example Hotel"
            startDate={dates[0].toDateString()}
            endDate={dates[1].toDateString()}
          />
          <UserDetails
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            country={country}
            setCountry={setCountry}
            phone={phone}
            setPhone={setPhone}
            confirm={confirm}
            setConfirm={setConfirm}
          />
        </div>
        <div className="btn-right">
          <button className="btn btn-blue">Next: Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
