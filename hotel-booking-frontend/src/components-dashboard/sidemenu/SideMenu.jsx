import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SideMenu.css";
import {
  faChartSimple,
  faHotel,
  faTent,
  faPencil,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function SideMenu() {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState("");

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location]);

  return (
    <div className="side-menu-container">
      <h2>Dashboard</h2>
      <Link
        to="/dashboard"
        className={selectedMenu === "/dashboard" ? "selected" : ""}
      >
        <FontAwesomeIcon icon={faChartSimple} /> Overview
      </Link>
      <Link
        to="/dashboard/hotels"
        className={selectedMenu === "/dashboard/hotels" ? "selected" : ""}
      >
        <FontAwesomeIcon icon={faHotel} /> Hotels
      </Link>
      <Link
        to="/dashboard/rooms"
        className={selectedMenu === "/dashboard/rooms" ? "selected" : ""}
      >
        <FontAwesomeIcon icon={faTent} /> Rooms
      </Link>
      <Link
        to="/dashboard/bookings"
        className={selectedMenu === "/dashboard/bookings" ? "selected" : ""}
      >
        <FontAwesomeIcon icon={faPencil} /> Bookings
      </Link>
      <Link
        to="/"
        id="exit-dashboard"
        className={selectedMenu === "/" ? "selected" : ""}
      >
        Exit dashboard
      </Link>
    </div>
  );
}

export default SideMenu;
