import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetails from "../../components/userdetails/UserDetails";
import BookingDetails from "../../components/bookingdetails/BookingDetails";
import ProgressBar from "../../components/progressbar/ProgressBar";
import "../../css/Buttons.css";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState(true);
  const [dates, setDates] = useState([new Date(), new Date()]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("firstName", firstName); 
    sessionStorage.setItem("lastName", lastName); 
    sessionStorage.setItem("email", email); 
    sessionStorage.setItem("address", address); 
    sessionStorage.setItem("city", city); 
    sessionStorage.setItem("postal", postal); 
    sessionStorage.setItem("country", country); 
    sessionStorage.setItem("phone", phone); 
    sessionStorage.setItem("dates", dates); 
    navigate("/");  //Change to payment/checkout
  };

  return (
    <div className="cart-wrapper">
      <form className="cart-form" method="post" onSubmit={handleSubmit}>
        <ProgressBar active="2" />
        <div className="details-container">
          <BookingDetails
            hotel="Example Hotel"
            startDate={dates[0].toDateString()}
            endDate={dates[1].toDateString()}
          />
          <UserDetails
            firstName={firstName}
            setFirstName={(e) => setFirstName(e.target.value)}
            lastName={lastName}
            setLastName={(e) => setLastName(e.target.value)}
            email={email}
            setEmail={(e) => setEmail(e.target.value)}
            address={address}
            setAddress={(e) => setAddress(e.target.value)}
            city={city}
            setCity={(e) => setCity(e.target.value)}
            postal={postal}
            setPostal={(e) => setPostal(e.target.value)}
            country={country}
            setCountry={(e) => setCountry(e.target.value)}
            phone={phone}
            setPhone={(e) => setPhone(e.target.value)}
            confirm={confirm}
            setConfirm={(e) => setConfirm(e.target.value)}
          />
        </div>
        <div className="btn-right">
          <button className="btn btn-blue" >Next: Checkout</button>
        </div>
      </form>
    </div>
  );
};

export default ShoppingCart;