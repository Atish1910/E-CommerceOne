import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ isLoggedIn, loggedInUser, logo }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container sticky-top">
      <div className="row align-items-center">
        <div className="col-2 d-lg-flex align-items-center justify-content-around ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item nav-link-active" : "nav-item nav-link"
            }
          >
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="col-lg-8">
          <nav className="navbar navbar-expand-lg  navbar-light">
            <div className="">
              <NavLink to="/cart">
                <div className="position-relative ps-3  d-lg-none">
                  <i className="bi bi-cart fs-4 fw-bold text-dark"></i>
                  {cart.length > 0 && (
                    <span
                      className="count-01"
                      style={{ animation: "bounce 1s infinite" }}
                    >
                      {/* if user click any product it will increase count */}
                      {cart.length}
                    </span>
                  )}
                </div>
              </NavLink>
            </div>
            <NavLink to="/" className="nav-tab fs-4 fw-bold pe-lg-4 d-lg-none">
              Shopi
            </NavLink>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* navbar for desktop view */}
            <div
              className="collapse navbar-collapse justify-content-center align-items-center"
              id="navbarCollapse"
            >
              <div className="navbar-nav">
                {/* // here are all navlinks user can navgate on clicking on them */}
                <NavLink to="/" className="nav-tab fs-4 fw-bold pe-lg-4 d-none">
                  Shopi
                </NavLink>
                <NavLink
                  to="/nuevo"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link-active" : "nav-item nav-link"
                  }
                >
                  Necklaces
                </NavLink>
                <NavLink
                  to="/furniture"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link-active" : "nav-item nav-link"
                  }
                >
                  Earrings
                </NavLink>
                <NavLink
                  to="/shoes"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link-active" : "nav-item nav-link"
                  }
                >
                  Bracelets & Anklets
                </NavLink>
                <NavLink
                  to="/miscellaneous"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link-active" : "nav-item nav-link"
                  }
                >
                  Best Sellers
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-2 d-lg-flex align-items-center justify-content-around d-none text-end pe-lg-4">
          {isLoggedIn ? (
            <p className="mb-0 d-lg-none">
              <b>{loggedInUser?.email}</b>
            </p>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-item nav-link-active" : "nav-item nav-link"
              }
            >
              Login
            </NavLink>
          )}
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive ? "nav-item nav-link-active" : "nav-item nav-link"
            }
          >
            <i class="bi bi-person"></i>
          </NavLink>
          <NavLink to="/cart">
            <div className=" ps-3">
              <i className="bi bi-cart fs-4 fw-bold text-dark position-relative">
                {cart.length > 0 && (
                  <span
                    className="count-01"
                    style={{ animation: "bounce 1s infinite" }}
                  >
                    {cart.length}
                  </span>
                )}
              </i>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
