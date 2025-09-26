import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

  const API_URL = "https://api.escuelajs.co/api/v1/products";
const Home = ({category}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [debounceSearch, setDebounceSearch] = useState("")

    async function fetchProducts() {
        setLoading(true)
        try {
            const res = await axios.get(API_URL);
            setProducts(res.data);
        } catch (error) {
            setProducts([]);
            console.log("Error To Fetch Api", error);
        }
        setLoading(false)
    }
    setLoading(false);
  }

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceSearch(searchTerm);
        }, 500);
    
        return () => {
            clearTimeout(handler)
        }
    }, [searchTerm])

    function onSearch(e){
        setSearchTerm(e.target.value)
    }

    const filterData = products.filter((product) =>{
        const matchCategory = category ? product.category.slug == category : true
        const matchSearch = debounceSearch ?  product.title.toLowerCase().includes(debounceSearch.toLowerCase()) : true;
        return matchCategory && matchSearch;
    })


return (
<>
    <section>
        <div className="container py-5 border">
            <div className="row">
                <form action="">
                    <input type="text" className='form-control' onChange={onSearch} placeholder="Enter Your Product name...." />
                </form>
            </div>
        </div>
    </section>
    <section>
        {
            loading ? (<Spinner></Spinner>) :
            filterData.length > 0 ?
            (
                <div className="container">
                    <div className="row pt-3">
                        {
                            filterData.map((product) => (
                                    <Product product={product} key={product.id}></Product>
                            ))
                        }
                    </div>
                </div>
            ) : (
                <p>No Data Found</p>
            )
        }
    </section>
</>
);
};

export default Home;
