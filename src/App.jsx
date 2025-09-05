import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <section>
        <Header></Header>
        <Hero></Hero>
        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
