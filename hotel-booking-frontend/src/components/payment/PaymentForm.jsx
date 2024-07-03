import React, { useState } from "react";
import "./PaymentForm.css";
import paymentSound from "../../assets/cashing.mp3";

function PaymentForm() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [message, setMessage] = useState("");

  function toggle(event) {
    event.preventDefault();
    setIsFormVisible(false);
    setMessage(
      "Thanks for your payment! You will receive a confirmation email shortly."
    );
    playSound();
  }

  function playSound() {
    const audio = new Audio(paymentSound);
    audio.play();
  }

  return (
    <div>
      {isFormVisible ? (
        <div className="paymentform-container">
          <form action="" method="post" id="paymentform">
            <div className="row">
              <div className="col">
                <h3 className="paymentform-title">Billing address</h3>
                <div className="form-group">
                  <label htmlFor="formFullName">
                    <b>Full name</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    name="name"
                    required
                    value={"John Doe"}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formUserEmail">
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    required
                    value={"john.doe@email.com"}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formAddress">
                    <b>Address</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    name="address"
                    required
                    value={"123 Main Street"}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formCity">
                    <b>City</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    name="city"
                    required
                    value={"New York"}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formZip">
                    <b>Zip code</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Zip code"
                    name="zipCode"
                    required
                    value={"NY 10001"}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="col">
                <h3 className="paymentform-title">Payment</h3>
                <div className="form-group">
                  <label htmlFor="formPayment">
                    <b>Card type </b>
                  </label>
                  <input
                    type="text"
                    placeholder="Card accepted"
                    name="payment"
                    required
                    value={"Visa"}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formCardName">
                    <b>Card name</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter card name"
                    name="cardName"
                    required
                    value={"John Doe"}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formCardNumber">
                    <b>Card number</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Card number"
                    name="cardNumber"
                    required
                    value={"1234 1234 1234 1234"}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formExpMonth">
                    <b>Exp month</b>
                  </label>
                  <select name="expMonth" disabled={true}>
                    <option value="">Choose month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March" selected>
                      March
                    </option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="formExpYear">
                      <b>Exp year</b>
                    </label>
                    <select name="expYear" disabled={true}>
                      <option value="">Choose Year</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026" selected>
                        2026
                      </option>
                      <option value="2027">2027</option>
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="formCVC">
                      <b>CVC</b>
                    </label>
                    <input
                      className="cvc"
                      type="text"
                      placeholder="Enter CVC"
                      name="cvc"
                      required
                      value={"123"}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-green" onClick={toggle}>
              Pay
            </button>
          </form>
        </div>
      ) : (
        <div className="thank-you-message">
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
}

export default PaymentForm;
