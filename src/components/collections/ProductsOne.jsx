import React from 'react';
import p1 from "../../assets/img/products/p1.webp";
import p2 from "../../assets/img/products/p2.webp";

const ProductsOne = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <h4 className='mb-3 '> Daily Wear Anti Tarnish Necklace</h4>
                <div className="col-lg-3">
                    <div className="card border-0 ">
                        <img src={p1} alt="" className='product-img' />
                        <div className="my-2">
                            <p className='mb-0'>Black Onyx Necklace (Titanium Steel)</p>
                            <h6 className=''>Rs. 1,499.00</h6>
                        </div>
                        <button className='btn btn-outline-secondary rounded-0 '>Add to Cart</button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card border-0 ">
                        <img src={p2} alt="" className='product-img' />
                        <div className="my-2">
                            <p className='mb-0'>Perla - Natural Pearl Necklace</p>
                            <h6 className=''>Rs. 2,999.00</h6>
                        </div>
                        <button className='btn btn-outline-secondary rounded-0 '>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductsOne;