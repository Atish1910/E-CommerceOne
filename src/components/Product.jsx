import React from 'react';

const Product = ({product}) => {
    return (
        <>
         <div class="col-lg-3 col-6 mb-4 d-grid">
            <div class="card shadow-sm rounded-0"> 
                <img src={product.category.image} alt="" />
                <div class="card-body">
                    <p class="card-text">{product.title}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group"> 
                            <button type="button" class="btn btn-sm btn-blue">Add To Cart</button> 
                        </div>
                        <div className="text-dark price"><small>Rs, {product.price}.00</small></div>
                    </div>
                </div>
            </div>
        </div>   
        </>
    );
};

export default Product;