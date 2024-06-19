import "./ProgressBar.css";

const ProgressBar = (props) => {
  let selectionClass, detailsClass, checkoutClass;
  if (props.active == 1) {
    selectionClass = "active";
    detailsClass = "future";
    checkoutClass = "future";
  } else if (props.active == 2) {
    selectionClass = "done";
    detailsClass = "active";
    checkoutClass = "future";
  } else {
    selectionClass = "done"; //Add additional check for different from 1-3
    detailsClass = "done";
    checkoutClass = "active";
  }

  return (
    <div className="progress-bar">
      <ul className="bar">
        <li className={selectionClass}>
          <div className="item">
            <b>Selection</b>
          </div>
        </li>
        <li className={detailsClass}>
          <div className="item">
            <b>Details</b>
          </div>
        </li>
        <li className={checkoutClass}>
          <div className="item">
            <b>Checkout</b>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProgressBar;
