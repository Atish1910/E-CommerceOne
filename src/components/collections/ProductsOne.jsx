import React from "react";
import p1 from "../../assets/img/products/p1.webp";
import p2 from "../../assets/img/products/p2.webp";

const ProductsOne = ({ openModel }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h4 className="mb-3 "> Daily Wear Anti Tarnish Necklace</h4>
          <div className="col-lg-3">
            <div className="card border-0 ">
              <div className="card-inner" onClick={openModel}>
                <img src={p1} alt="" className="product-img" />
                <div className="py-2">
                  <p className="mb-0">Black Onyx Necklace (Titanium Steel)</p>
                  <h6 className="">Rs. 1,499.00</h6>
                </div>
              </div>
              <button className="btn btn-outline-secondary rounded-0 ">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card border-0 ">
              <div className="" onClick={openModel}>
                <img src={p1} alt="" className="product-img" />
                <div className="py-2">
                  <p className="mb-0">Black Onyx Necklace (Titanium Steel)</p>
                  <h6 className="">Rs. 1,499.00</h6>
                </div>
              </div>
              <button className="btn btn-outline-secondary rounded-0 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsOne;
