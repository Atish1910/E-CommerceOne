import React from "react";

const Spinner = () => {
  return (
    <section className="spinner-container">
      <div className="spinner-message">Please wait, fetching data...</div>
      <div className="spinner-border spinner-veloura" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </section>
  );
};

export default Spinner;
