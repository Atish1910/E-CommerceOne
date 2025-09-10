// src/App.jsx
import React, { useState } from "react";
import ProductModal from "./components/ProductModal";
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Black Onyx Necklace (Titanium Steel)",
      price: "Rs. 1,499.00",
      image: p1,
    },
    {
      id: 2,
      name: "Perla - Natural Pearl Necklace",
      price: "Rs. 2,999.00",
      image: p2,
    },
  ];

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-lg-3" key={product.id}>
            <div
              className="card border-0 cursor-pointer"
              onClick={() => handleOpen(product)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <div className="my-2">
                <p className="mb-0">{product.name}</p>
                <h6>{product.price}</h6>
              </div>
              <button className="btn btn-outline-secondary rounded-0">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Portal */}
      <ProductModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}

export default App;
