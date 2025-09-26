import React from "react";
import { NavLink } from "react-router-dom";
import logo02 from "../assets/logos/1.png"

const Navbar = ({ logo01 ,onSearch}) => {
  return (
    <>
      <section className="bg-rose">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center py-1 border-bottom">
            <NavLink
              to="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <img src={logo02} className="logo" alt="" />
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
                
                <form action="">
                    <input type="text" className='form-control' onChange={onSearch} placeholder="Enter Product name..." />
                </form>
              </li>
            </ul>
          </header>
        </div>
      </section>
    </>
  );
};

export default Navbar;
