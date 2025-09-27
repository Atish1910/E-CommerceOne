import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");

  // 🔹 Fetch data once
  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (error) {
      setProducts([]);
      console.error("Error fetching API", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceSearch(searchTerm);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // 🔹 Search handler
  function onSearch(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <Navbar onSearch={onSearch} />
      {/* Pass data/state down to children */}
      <Outlet context={{ products, loading, debounceSearch}}></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
