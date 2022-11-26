import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoriesProduct = () => {
  const { name, _id, description, price, img } = useLoaderData();
//   console.log(name);
  return <div>hello {name}</div>;
};

export default CategoriesProduct;
