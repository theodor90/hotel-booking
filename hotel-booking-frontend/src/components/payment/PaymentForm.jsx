import React, { Fragment, useState } from "react";
import './PaymentForm.css'


function PaymentForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [payment, setPayment] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCVC] = useState('');
    const [error, setError] = useState('');

    return (
        <div className="paymentform-container">
            <form action="" method="post">
                <div className="row">
                    <div className="col">
                        <h3 className="paymentform-title">Billing address</h3>
                        <div className="form-group">
                            <label htmlFor="formFullName"><b>Full name</b></label>
                            <input
                                type="text"
                                placeholder="Enter full name"
                                name="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formUserEmail"><b>Email</b></label>
                            <input
                                type="text"
                                placeholder="Enter email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formAddress"><b>Address</b></label>
                            <input
                                type="text"
                                placeholder="Enter address"
                                name="email"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formCity"><b>City</b></label>
                            <input
                                type="text"
                                placeholder="Enter city"
                                name="city"
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formZip"><b>Zip code</b></label>
                            <input
                                type="text"
                                placeholder="Enter Zip code"
                                name="email"
                                required
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                        </div>
                    </div>
                <div className="col">
                    <h3 className="paymentform-title">Payment</h3>
                    <div className="form-group">
                        <label htmlFor="formPayment"><b>Card accepted: </b></label>
                        <input
                            type="text"
                            placeholder="Card accepted"
                            name="payment"
                            required
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formCardName"><b>Card name</b></label>
                        <input
                            type="text"
                            placeholder="Enter card name"
                            name="cardName"
                            required
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formCardNumber"><b>Card number</b></label>
                        <input
                            type="text"
                            placeholder="Enter Card number"
                            name="cardNumber"
                            required
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                            <label htmlFor="formExpMonth"><b>Exp month</b></label>
                            <select name="" id="">
                                <option value="">Choose month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
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
                        <label htmlFor="formExpYear"><b>Exp year</b></label>
                        <select name="" id="">
                            <option value="">Choose Year</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                        </select>
                        </div>
                        <div className="col">
                        <label htmlFor="formCVC"><b>CVC</b></label>
                        <input className="cvc"
                            type="text"
                            placeholder="Enter CVC"
                            name="cvc"
                            required
                            value={cvc}
                            onChange={(e) => setCVC(e.target.value)}
                        />
                       </div> 
                    </div>
                </div>
                </div>
               <button type="submit" className="btn btn-green">Pay</button>      
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}

export default PaymentForm;