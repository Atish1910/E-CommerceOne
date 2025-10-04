import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import { Storege } from "./store/Context-api";
import HeroImg from "./assets/Hero/1.png";
import aboutBg from "./assets/Hero/about.jpg";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");

  const API_URL = "https://api.escuelajs.co/api/v1/products";

  // 🔹 Fetch products
  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products", error);
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 Debounce search
  useEffect(() => {
    const handler = setTimeout(() => setDebounceSearch(searchTerm), 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  function onSearch(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <Storege.Provider
      value={{
        products,
        loading,
        onSearch,
        searchTerm,
        debounceSearch,
        HeroImg,
        aboutBg,
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Storege.Provider>
  );
}

export default App;
