import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {/* Left Side */}
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <i className="bi bi-gem fs-4 text-rose"></i>
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            © 2025 Veloura World, Inc
          </span>
        </div>

        {/* Right Side - Social Icons */}
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-rose" href="#">
              <i className="bi bi-twitter fs-5"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-rose" href="#">
              <i className="bi bi-instagram fs-5"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-rose" href="#">
              <i className="bi bi-facebook fs-5"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
