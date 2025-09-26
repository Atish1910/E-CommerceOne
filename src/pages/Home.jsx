import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import Navbar from '../components/Navbar';

  const API_URL = "https://api.escuelajs.co/api/v1/products";
const Home = ({category,logo01}) => {
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
    <Navbar logo01={logo01} onSearch={onSearch}></Navbar>
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