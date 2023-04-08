import React, {useEffect, useState} from "react";
import Food from "../Component/Food/Food";

const Barger = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      fetch("Barger.json")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto gap-3">
        {product &&
          product.map((product) => (
            <Food product={product} key={product._id} />
          ))}
      </div>
        </div>
    );
};

export default Barger;