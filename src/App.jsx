import { Outlet, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import logo01 from "./assets/logos/1.png";

function App() {
  return (
    <>
      <Navbar logo01={logo01}></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
