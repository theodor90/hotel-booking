import {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";
import { faChartSimple, faHotel, faTent, faGear, faPencil } from "@fortawesome/free-solid-svg-icons";

function SideMenu() {

    const { account } = useSelector((state) => state.responses);
    const [role, setRole] = useState(account);
  
    useEffect(() => {
      if (account?.role) setRole(account.role);
    }, [account]);
  
    const setActive = ({ isActive }) => (isActive ? styles.activeLink : "");
  

    return (
        <div className="">
            <input type="checkbox" id="nav-toggle" />
            <div id="nav-bar">
                <div id="nav-header">
                    <label for="nav-toggle">
                        <span id="nav-toggle-burger"></span>
                    </label>
                    <hr />
                </div>
                <div id="nav-content">
                    <div class="nav-button"><FontAwesomeIcon icon={faChartSimple} />
                        <NavLink to='/dashboard' className={setActive}>
                            Home
                        </NavLink>
                    </div>
                    <div class="nav-button"><FontAwesomeIcon icon={faHotel} />
                        <NavLink to='/dashboard' className={setActive}>
                            Hotels
                        </NavLink>
                    </div>
                    <div class="nav-button"><FontAwesomeIcon icon={faTent} />
                        <NavLink to='/dashboard' className={setActive}>
                            Rooms
                        </NavLink>
                    </div>
                    <hr />
                    <div class="nav-button"><FontAwesomeIcon icon={faPencil} />
                        <NavLink to='/dashboard' className={setActive}>
                            Booking
                        </NavLink>
                    </div>
                    <div class="nav-button"><FontAwesomeIcon icon={faGear} />
                        <NavLink to='/dashboard' className={setActive}>
                            Settings
                        </NavLink>
                    </div>
                    <hr />
                </div>
                <input type="checkbox" id="nav-footer-toggle" />
                <div id="nav-footer">
                    <div id="nav-footer-heading">
                        <div id="nav-footer-avatar">
                            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="Avatar" />
                        </div>
                        <div id="nav-footer-titlebox">
                            <span id="nav-footer-subtitle">Admin</span>
                        </div>
                        <label for="nav-footer-toggle">
                            <i class="fas fa-caret-up"></i>
                        </label>
                    </div>
                    <div id="nav-footer-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;