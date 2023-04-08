import React from "react";
import {useSelector} from "react-redux";
import Food from "../Food/Food";

const Booking = () => {
  const state = useSelector((state) => state.cart);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-5 text-orange-500">
        This is My Booking
      </h1>
      <div>
        {!state && 
          <div className="flex justify-center items-center">
            <h1 className="text-slate-500 text-3xl">No Booking Food </h1>
          </div>
        }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto gap-3">
        {state &&
          state.map((product) => (
            <Food product={product} key={product.idCategory} />
          ))}
      </div>
    </div>
  );
};

export default Booking;
