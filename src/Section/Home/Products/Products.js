import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard/ProductsCard";

const Products = () => {
  const [productCategories, setProductCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProductCategories(data));
  }, []);
  console.log(productCategories);
  return (
    <div>
      <div className="grid grid-cols-1 text-center justify-items-center">
        <div className=" p-6 w-96 border-b-4 border-blue-500  my-8 ">
          <h3 className="text-2xl font-bold">Product Categories</h3>
          <h5>Products added in every relevant categories</h5>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-10 gap-5 justify-items-center bg-gray-200">
        {productCategories.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
