import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductsOne from "./components/collections/ProductsOne";
import ProductsTwo from "./components/collections/ProductsTwo";
import { useState } from "react";
import ProductsModel from "./components/collections/ProductsModel";
function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section>
        <Header></Header>
        <ProductsOne></ProductsOne>
        <ProductsTwo></ProductsTwo>
        <Footer></Footer>
        <div className="">
          <button className="btn btn-success" onClick={() => setIsOpen(true)}>Ioen model</button>
        </div>
        <ProductsModel isOpen={isOpen} onClose = {() => setIsOpen(false)}>
          
        </ProductsModel>
      </section>
    </>
  );
}

export default App;
