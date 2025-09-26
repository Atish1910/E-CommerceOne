import { Outlet, Route, Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
