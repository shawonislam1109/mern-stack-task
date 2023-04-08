import React, {useEffect, useState} from "react";
import Food from "./Food/Food";
import Carsoual from "./Food/Carsoual";

const HOme = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const PRODUCT = product.categories;

  console.log(PRODUCT)

  return (
  <div>
    <div>
      <Carsoual/>
      <h1 className="w-9/12 mx-auto text-3xl font-semibold text-orange-500 py-5">This is our Food</h1>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto gap-3">
        {PRODUCT &&
          PRODUCT.map((product) => (
            <Food product={product} key={product.idCategory} />
          ))}
    </div>
  </div>
  );
};

export default HOme;
