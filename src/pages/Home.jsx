import { useContext, useState, useMemo } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import NoFound from "../components/NoFound";
import HeroCategory from "../components/HeroCategory";
import Hero from "../components/Hero";
import { Storege } from "../store/Context-api";
import ProductModal from "../components/ProductModal";

const Home = ({ category }) => {
  const { products, loading, debounceSearch } = useContext(Storege);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Memoized filter logic
  const filterData = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = category
        ? product.category?.slug?.toLowerCase() === category.toLowerCase()
        : true;
      const matchSearch = debounceSearch
        ? product.title.toLowerCase().includes(debounceSearch.toLowerCase())
        : true;
      return matchCategory && matchSearch;
    });
  }, [products, category, debounceSearch]);

  return (
    <>
      {category ? <HeroCategory category={category} /> : <Hero />}

      <section className="border">
        {loading ? (
          <Spinner />
        ) : filterData.length > 0 ? (
          <div className="container">
            <div className="row pt-3">
              {filterData.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onOpen={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </div>
        ) : (
          <NoFound />
        )}
      </section>

      {/* 🔹 Bootstrap modal */}
      <ProductModal selectedProduct={selectedProduct} />
    </>
  );
};

export default Home;
