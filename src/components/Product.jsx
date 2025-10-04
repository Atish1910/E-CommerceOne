// src/components/Product.jsx
import React from "react";

const Product = ({ product, onOpen }) => {
  if (!product) return null;

  const image = product?.category?.image;
  const title = product?.title;
  const price = product?.price;
  

  return (
    <div className="col-lg-3 col-6 mb-4 d-grid">
      <div className="card shadow-sm rounded-0 h-100 " >
        <img
          src={image}
          alt={title}
          className="w-100"
            data-bs-toggle="modal"
            data-bs-target="#productModal"
            onClick={onOpen}
            style={{"cursor" : "pointer"}}
        />
        <div className="card-body">
          <p className="card-text fw-semibold">{title}</p>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              type="button"
              className="btn btn-blue"
              data-bs-toggle="modal"
              data-bs-target="#productModal"
              onClick={onOpen}
            >
              View
            </button>

            <div className="text-rose text-bold"><b>Rs. {price}.00</b></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
