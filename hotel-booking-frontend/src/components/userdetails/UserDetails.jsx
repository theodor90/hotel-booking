import "./UserDetails.css";

function UserDetails(props) {
  return (
    <div className="user-details">
      <h3 className="user-title">Enter your details</h3>
      <div className="user-name">
        <label htmlFor="firstName">
          <b>First name</b>
        </label>
        <input
          type="text"
          placeholder=""
          name="firstname"
          required
          value={props.firstName}
          onChange={props.setFirstName}
        />
        <label htmlFor="lastName">
          <b>Last name</b>
        </label>
        <input
          type="text"
          placeholder=""
          name="lastname"
          required
          value={props.lastName}
          onChange={props.setLastName}
        />
      </div>
      <div className="user-container">
        <label htmlFor="email">
          <b>Email address</b>
        </label>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          required
          value={props.email}
          onChange={props.setEmail}
        />
      </div>
      <div className="user-container">
        <label htmlFor="country">
          <b>Country/region</b>
        </label>
        <input
          type="text"
          placeholder=""
          name="country"
          required
          value={props.country}
          onChange={props.setCountry}
        />
      </div>
      <div className="user-container">
        <label htmlFor="phone">
          <b>Telephone</b>
        </label>
        <input
          type="text"
          placeholder=""
          name="phone"
          required
          value={props.phone}
          onChange={props.setPhone}
        />
      </div>
      <div className="confirmation">
        <label htmlFor="confirmation">Yes, send me a confirmation email</label>
        <input
          type="checkbox"
          name="confirmation"
          defaultChecked={props.confirm}
          onClick={props.setConfirm}
        />
      </div>
    </div>
  );
}

export default UserDetails;
