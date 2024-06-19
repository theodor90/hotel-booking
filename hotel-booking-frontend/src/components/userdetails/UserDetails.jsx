import "./UserDetails.css";

function UserDetails(props) {
  return (
    <div className="user-wrapper">
      <h3>Enter your details</h3>
      <div className="name-container">
        <div className="input-container">
          <label htmlFor="firstname">
            <b>First name</b>
          </label>
          <input
            type="text"
            placeholder=""
            id="firstname"
            name="firstname"
            required
            value={props.firstName}
            onChange={props.setFirstName}
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastname">
            <b>Last name</b>
          </label>
          <input
            type="text"
            placeholder=""
            id="lastname"
            name="lastname"
            required
            value={props.lastName}
            onChange={props.setLastName}
          />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="email">
          <b>Email address</b>
        </label>
        <input
          type="text"
          placeholder="Enter email"
          id="email"
          name="email"
          required
          value={props.email}
          onChange={props.setEmail}
        />
      </div>
      <div className="input-container">
        <label htmlFor="address">
          <b>Address</b>
        </label>
        <input
          type="text"
          placeholder=""
          id="address"
          name="address"
          required
          value={props.address}
          onChange={props.setAddress}
        />
      </div>
      <div className="input-container">
        <label htmlFor="city">
          <b>City</b>
        </label>
        <input
          type="text"
          placeholder=""
          id="city"
          name="city"
          required
          value={props.city}
          onChange={props.setCity}
        />
      </div>
      <div className="input-container">
        <label htmlFor="postal">
          <b>Zip/Postal code</b>
        </label>
        <input
          type="text"
          placeholder=""
          id="postal"
          name="postal"
          required
          value={props.postal}
          onChange={props.setPostal}
        />
      </div>
      <div className="input-container">
        <label htmlFor="country">
          <b>Country/region</b>
        </label>
        <input
          type="text"
          placeholder=""
          id="country"
          name="country"
          required
          value={props.country}
          onChange={props.setCountry}
        />
      </div>
      <div className="input-container">
        <label htmlFor="phone">
          <b>Telephone</b>
        </label>
        <input
          type="text"
          placeholder=""
          id="phone"
          name="phone"
          required
          value={props.phone}
          onChange={props.setPhone}
        />
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="confirmation"
          name="confirmation"
          defaultChecked={props.confirm}
          onClick={props.setConfirm}
        />
        <label htmlFor="confirmation">Yes, send me a confirmation email</label>
      </div>
    </div>
  );
}

export default UserDetails;
