import { Outlet, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import logo01 from "./assets/logos/1.png";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Outlet logo01={logo01}></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
