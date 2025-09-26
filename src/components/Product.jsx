import React from 'react';

const Product = ({product}) => {
    return (
        <>
         <div class="col-3">
                                <div class="card shadow-sm"> 
                                    <img src={product.category.image} alt="" />
                                    <div class="card-body">
                                        <p class="card-text">{product.title}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group"> <button type="button"
                                                    class="btn btn-sm btn-outline-secondary">Add To Cart</button> 
                                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   
        </>
    );
};

export default Product;