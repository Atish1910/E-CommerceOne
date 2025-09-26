import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ logo01 }) => {
  return (
    <>
      <section className="bg-rose">
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <NavLink
              to="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              Veloura World
              {/* <img src={logo01} alt="" /> */}
            </NavLink>
            <ul className="nav nav-pills">
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
                <NavLink to="/shoes" className="nav-link">
                  Earrings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/furniture" className="nav-link">
                  Bracelets & Anklets
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ghg" className="nav-link">
                  Best Sellers
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </section>
    </>
  );
};

export default Navbar;
