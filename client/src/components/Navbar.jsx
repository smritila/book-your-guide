import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/package/:id" className="nav-link">
              PackageDetailsPage
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/finalise-booking" className="nav-link">
              FinaliseBookingPage
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/manage-bookings" className="nav-link">
              ManageBookingPage
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
