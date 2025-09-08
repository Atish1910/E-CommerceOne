import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/header";
import Products from "./components/Products";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <section>
        <Header></Header>
        <Products></Products>
        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
