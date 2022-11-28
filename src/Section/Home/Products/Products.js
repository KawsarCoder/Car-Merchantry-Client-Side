import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard/ProductsCard";

const Products = () => {
  const [productCategories, setProductCategories] = useState([]);
  useEffect(() => {
    fetch("https://car-server-vert.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProductCategories(data));
  }, []);
  return (
    <div>
      {productCategories.length > 0 ? (
        <>
          {" "}
          <div className="grid grid-cols-1 text-center justify-items-center">
            <div className=" pG:\Practice-Programming Hero-Jhankar Mahbub\Projects\Assignments\Assignment11\meta-tube-server-6 w-96 border-b-4 border-blue-500  my-8 ">
              <h3 className="text-2xl font-bold">Product Categories</h3>
              <h5>Products added in every relevant categories</h5>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-10 gap-5 justify-items-center bg-gray-200">
            {productCategories.map((product) => (
              <ProductsCard key={product._id} product={product}></ProductsCard>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center font-bold text-rose-500 text-xl">
            Products is not available
          </h1>
        </>
      )}
    </div>
  );
};

export default Products;
