import React from "react";
import { useDispatch } from "react-redux";
import { PRODUCT_CART } from "../../Reducer/ProductReducer/actionType";
import { useLocation } from "react-router-dom";

const Food = ({product}) => {
  const dispatch = useDispatch() ; 
  const pathname = useLocation() ; 
  return (
    <div className="card  bg-base-100 shadow-xl p-4">
      <figure>
        <img
          src={product.strCategoryThumb}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold text-orange-500">{product.strCategory}</h2>
        <p>{product.strCategoryDescription ? product.strCategoryDescription.slice(0,100) + 
         '...see more': product.strCategoryDescription}</p>
        <div className="card-actions justify-end">
          {
            pathname.includes("booking") && <button className="btn btn-error">Delete</button>
          }
          <button onClick={()=> dispatch({type:PRODUCT_CART, payload: product})} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
