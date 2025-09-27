import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container d-flex flex-column justify-content-center align-items-center">
      <h1 className="notfound-code">404</h1>
      <h3 className="notfound-title">Oops! Page Not Found</h3>
      <p className="notfound-text">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button className="btn btn-rose mt-3" onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
