import React from "react";

const Hero = ({ hero1 }) => {
  return (
    <>
      <section className="text-center">
        <img src={hero1} className="w-100" alt="" />
      </section>
    </>
  );
};

export default Hero;
