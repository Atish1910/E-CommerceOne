import { Outlet, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <section className="bg-light py-3 border sticky-top">
        <Navbar isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} />
      </section>
      <section>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothes" element={<Home category="clothes" />} />
            <Route path="/nuevo" element={<Home category="nuevo" />} />
            <Route path="/furniture" element={<Home category="furniture" />} />
            <Route path="/shoes" element={<Home category="shoes" />} />
            <Route
              path="/miscellaneous"
              element={<Home category="miscellaneous" />}
            />
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/my-account" element={<MyAccount></MyAccount>} />
            <Route path="/register" element={<Register></Register>} />
            <Route
              path="/login"
              setIsLoggedIn={setIsLoggedIn}
              setLoggedInUser={setLoggedInUser}
              element={<Login></Login>}
            />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
