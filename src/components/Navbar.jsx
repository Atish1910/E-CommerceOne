import React from "react";
import { NavLink } from "react-router-dom";
import logo02 from "../assets/logos/1.png";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-rose navbar-dark sticky-top">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo02} className="logo" alt="Logo" />
        </NavLink>

        <form>
          <input
            type="text"
            className="form-control d-lg-none"
            onChange={onSearch}
            placeholder="Search products..."
          />
        </form>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                New Arrivals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/clothes" className="nav-link">
                Necklaces
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nueva-categoria" className="nav-link">
                Earrings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/furniture" className="nav-link">
                Bracelets & Anklets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>

            {/* Search box */}
            <li className="nav-item ms-lg-3 d-none d-lg-flex">
              <form>
                <input
                  type="text"
                  className="form-control"
                  onChange={onSearch}
                  placeholder="Search products..."
                />
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
