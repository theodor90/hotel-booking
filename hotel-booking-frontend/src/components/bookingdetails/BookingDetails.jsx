import "./BookingDetails.css";

function BookingDetails(props) {
  return (
    <div className="booking-details">
      <div className="hotel-details">
        <h4>{props.hotel}</h4>
      </div>
      <div className="dates-details">
        <h4>Your booking details</h4>
        <div className="booking-dates">
          <div>
            <p>Check-in</p>
            {props.startDate}
          </div>
          <div>
            <p>Check-out</p>
            {props.endDate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
