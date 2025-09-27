import React from "react";
import { useOutletContext } from "react-router-dom";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import HeroImg from "../assets/Hero/1.png";
// import clothes from "../assets/Hero/clothes.jpg";
import aboutBg from "../assets/Hero/about.jpg";

const Home = ({ category }) => {
  // receive data from App via Outlet context
  const { products, loading, debounceSearch } = useOutletContext();

  // 🔹 Apply filters
  const filterData = products.filter((product) => {
    const matchCategory = category
      ? product.category.slug === category
      : true;
    const matchSearch = debounceSearch
      ? product.title.toLowerCase().includes(debounceSearch.toLowerCase())
      : true;
    return matchCategory && matchSearch;
  });

  return (
    <>
      {/* Hero / Breadcrumb Section */}
      {category ? (
        <section
         className="container-fluid breadcrumb-section d-flex align-items-center justify-content-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(176,48,96,0.65), rgba(176,48,96,0.65)), url(${aboutBg})`,
                  }}
        >
          <h2 className="text-center fw-bold text-white display-5 text-uppercase ">
            {category}
          </h2>
        </section>

      ) : (
        <section><img src={HeroImg} className="hero" alt="" /></section>
      )}

      {/* Products Section */}
      <section className="border">
        {loading ? (
          <Spinner />
        ) : filterData.length > 0 ? (
          <div className="container">
            <div className="row pt-3">
              {filterData.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        ) : (
          <div className="no-data-container">
            <div className="no-data-card">
              <i className="bi bi-emoji-frown-fill no-data-icon"></i>
              <h3 className="no-data-title">Oops!</h3>
              <p className="no-data-text">
                No products found matching your search or category.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
