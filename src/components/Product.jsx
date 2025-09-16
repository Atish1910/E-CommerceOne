import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({post , onSelect }) => {

  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  
  const addToCart = () => {
    dispatch(add(post)); 
    toast.success("Item added to Cart");
  };

  
  const removeFromCart = () => {
    dispatch(remove(post.id)); 
    toast.error("Item Removed from Cart"); 
  };

    return (
<>
    <div className=" py-3 mb-4 mt-2 z-index-01  px-2 d-grid" onClick={() => onSelect(post)}>
        <div className=""  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"  >
            <img src={post.category.image} className='product' loading='lazy' alt="" />
            <h6 className='product-type px-3 py-1 '>{post.category.slug}</h6>
            <div className=" pt-2">
                <p className="mb-0">{post.title}</p>
                <p><b>{post.price}$</b></p>
            </div>
        </div>
        <div className="">
            {cart.some((p) => p.id === post.id) ? (
              <button className="btn btn-outline-secondary rounded-0 w-100" onClick={removeFromCart}>Remove From Cart</button>
            ) : (
              <button className="btn btn-outline-success rounded-0 w-100" onClick={addToCart}>Add To Cart</button>
            )}
          </div>
    </div>

</>
);
};

export default Product;