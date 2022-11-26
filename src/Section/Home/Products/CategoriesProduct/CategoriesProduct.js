import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct/SingleProduct";

const CategoriesProduct = () => {
  const { name, _id } = useLoaderData();
  // console.log(_id);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // console.log(items);

  return (
    <div>
      {items.length > 0 ? (
        <h1 className="text-rose-400 font-bold text-center p-10 text-2xl">
          Here is second hand {name}
        </h1>
      ) : (
        <h1 className="text-rose-400 font-bold text-center p-10 text-2xl">
          No car is available
        </h1>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <SingleProduct
            key={item._id}
            companyID={_id}
            item={item}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default CategoriesProduct;
