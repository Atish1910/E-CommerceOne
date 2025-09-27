import React from "react";
import aboutBg from "../assets/Hero/about.jpg";

const About = () => {
  return (
    <>
      <section>
        <div
          className="container-fluid breadcrumb-section d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `linear-gradient(rgba(176,48,96,0.65), rgba(176,48,96,0.65)), url(${aboutBg})`
          }}
        >
          <h2 className="text-center fw-bold text-white display-5">
            ABOUT US
          </h2>
        </div>
      </section>

      {/* 🔹 Brand Story Section */}
      <section className="about-content py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h3 className="about-heading">🌍 Brand Story – Veloura World</h3>
              <p className="about-text lead">
                At <span className="highlight">Veloura World</span>, we believe
                that jewellery should never lose its shine — just like the women
                who wear it.
                <br />
                <br />
                Born from a desire to blend elegance with everyday ease, Veloura
                World offers{" "}
                <span className="bold">anti-tarnish, water-resistant jewellery</span>{" "}
                that’s as timeless as your memories and as resilient as your
                spirit. Each piece is thoughtfully designed to complement your
                natural beauty — whether you're at work, out with friends, or
                celebrating life’s biggest moments.
                <br />
                <br />
                We exist for the modern woman who refuses to settle — who wants
                style that lasts, quality she can trust, and a shine that stays
                with her, always.
              </p>
              <h5 className="about-subtitle">
                ✨ Veloura World — Where Beauty Never Fades
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
