import { useState } from "react";
import UserDetails from "../../components/userdetails/UserDetails";
import BookingDetails from "../../components/bookingdetails/BookingDetails";
import "../../css/Buttons.css";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState(true);

  //Take Hotel and Dates as props to display in BookingDetails

  return (
    <div className="cart-container">
      <div className="details-container">
        <BookingDetails hotel="Example Hotel" startDate="Start" endDate="End" />
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
      <button className="btn btn-green">Next: Last step</button>
    </div>
  );
}

export default ShoppingCart;
