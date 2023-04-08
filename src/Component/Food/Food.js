import React from "react";
import {useDispatch} from "react-redux";
import {PRODUCT_CART, REMOVE_CART} from "../../Reducer/ProductReducer/actionType";
import {useLocation} from "react-router-dom";
import { FaStar } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Food = ({product}) => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  return (
    <div className="card relative bg-base-100 shadow-xl p-4">
      <div className="absolute ml-3 mt-2">
        <p className="flex text-orange-500 font-bold justify-normal items-center text-xl "><FaStar />{product.rate}</p>
      </div>
      <figure>
        <img src={product.img} alt="Food Pic" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold text-orange-500">
          {product.name}
        </h2>
        <p className="font-semibold">
          {product.dsc
            ? product.dsc.slice(0, 200) + "...see more"
            : product.dsc}
        </p>
        <p className="font-semibold">Country : {product.country }</p>
        <div>
          {
            pathname.includes("booking") && <p className="font-bold">Quantity : {product.quantity}</p>
          }
        </div>
        <p className="text-xl font-bold  text-orange-500">Price : $ {product.price}</p>
        <div className="card-actions justify-end">
          {pathname.includes("booking") && (
            <button onClick={()=> dispatch ({type: REMOVE_CART, payload : product})} className="btn btn-error">Delete</button>
          )}
          {!pathname.includes("booking") && (
            <button
              onClick={() => dispatch({type: PRODUCT_CART, payload: product}, toast.success('Successfull Added food in you cart')) }
              className="btn btn-primary">
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Food;
