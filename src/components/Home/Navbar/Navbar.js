import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-container">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link me-5" to="/home">
                Home
              </Link>
              <a className="nav-link me-5" href="#">
                About
              </a>
              <a className="nav-link me-5 text-white" href="#">
                Dental Services
              </a>
              <a className="nav-link me-5 text-white" href="#">
                Reviews
              </a>
              <a className="nav-link me-5 text-white" href="#">
                Blog
              </a>
              <a className="nav-link me-5 text-white" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
