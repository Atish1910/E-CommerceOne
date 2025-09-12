import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import Product from "../components/Product";

//here is api link where we get all data
const API_URL = "https://api.escuelajs.co/api/v1/products";

const Home = ({ category }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // get api call with axios
  async function fetchProductsData() {
    // debugger
    // while doing api call fetching data from api till that we show spinner that sppinnr depend on below true & false
    setLoading(true);

    try {
      const res = await axios.get(API_URL); // bind api call in res veriable
      setPosts(res.data);
      // console.log("Fetching api" + posts);
      console.log(res.data); // foe debugging
    } catch (error) {
      console.log("Unable To Fetch Products ", error);
      setPosts([]);
    }
    setLoading(false);
  }

  // if page get refresh function will get auto call
  useEffect(() => {
    fetchProductsData();
  }, []);

  // we are filtering data by category (shoe, cloaths, furniture)
  const filteredPosts = posts
    .filter((post) => {
      return category ? post.category.slug === category : true;
    })

    // we added a funality for serching product on basis of title
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <div className="row border py-4 justify-content-center">
        <div className="col-lg-8 mb-4">
          <form>
            <input
              type="text"
              placeholder="Search Product By Name"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
        {loading ? (
          <Spinner></Spinner>
        ) : filteredPosts.length > 0 ? (
          <div className="col-lg-12 border">
            <div className="row">
              {filteredPosts.map((post) => {
                return (
                  <div className="col-6 col-lg-3 mb-4" key={post.id}>
                    <Product
                      post={post}
                      onSelect={(product) => setSelectedProduct(product)}
                    ></Product>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <p>No Data Found</p>
          </div>
        )}
      </div>

      {/* Single Bootstrap Modal outside the map */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-lg modal-dialog-centered">
          <div className="modal-content">
            {selectedProduct && (
              <>
                <div className="modal-header text-center">
                  <h4 className="modal-title fs-5" id="exampleModalLabel">
                    <p className="mb-0">
                      <b>Details </b>
                    </p>
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <div className="row">
                    <div className="col-lg-4">
                      <img
                        src={selectedProduct.category.image}
                        className="w-100"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="py-2">
                        <h6 className="">
                          <b>{selectedProduct.title}</b>
                        </h6>
                        <h6 className="" align="justify">
                          {selectedProduct.description}
                        </h6>
                        <span className=" bg-red h3">
                          Price : <b> {selectedProduct.price}$</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
