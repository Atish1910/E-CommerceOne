import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductsOne from "./components/collections/ProductsOne";
import ProductsTwo from "./components/collections/ProductsTwo";
import { useState } from "react";
import ProductsModel from "./components/collections/ProductsModel";
// import p1 from "../assets/img/products/p1.webp";
import p1 from "./assets/img/products/p1.webp";
import p2 from "./assets/img/products/p2.webp";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Black Onyx Necklace (Titanium Steel)",
      price: "Rs. 1,499.00",
      img: p1,
    },
    {
      id: 2,
      name: "Perla - Natural Pearl Necklace",
      price: "Rs. 2,999.00",
      img: p2,
    },
  ];

  const openModel = (p) => {
    setSelectedProduct(p);
    setIsOpen(true);
  };
  return (
    <>
      <section>
        <Header></Header>
        <div className="container">
          <div className="row">
            <h4 className="mb-3 "> Daily Wear Anti Tarnish Necklace</h4>
            {products.map((p) => (
              <div className="col-lg-3" key={p.id}>
                <div className="card border-0 ">
                  <div className="card-inner" onClick={openModel}>
                    <img src={p.img} alt="" className="product-img" />
                    <div className="py-2">
                      <p className="mb-0">{p.name}</p>
                      <h6 className="">{p.price}</h6>
                    </div>
                  </div>
                  <button className="btn btn-outline-secondary rounded-0 ">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <ProductsOne openModel={openModel}></ProductsOne> */}
        <ProductsTwo></ProductsTwo>
        <Footer></Footer>
        <ProductsModel
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          p={selectedProduct}
        ></ProductsModel>
      </section>
    </>
  );
}

export default App;
