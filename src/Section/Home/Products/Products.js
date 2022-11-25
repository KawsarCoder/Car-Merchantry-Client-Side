import React from "react";
import ProductsCard from "./ProductsCard/ProductsCard";

const Products = () => {
  const productCategories = [
    {
      "name": "Tesla",
      "description":
        "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes",
      "img": "https://i.ibb.co/KX0yMZx/xz4-NVQh-Ha-HSh-Erxar7-YLn.jpg",
    },
    {
      "name": "BMW",
      "description":
        "Extensive Inventory of New and Pre-owned Vehicles at Capital BMW in Tallahassee. We will buy yours even if you don not buy ours. Trade today.",

      "img": "https://i.ibb.co/MkKc0tc/bmw-logo-water-drops-hd-wallpaper-preview.jpg",
    },
    {
      "name": "Nissan",
      "description":
        "Nissan cars are officially distribute by Pacific motors Limited in Bangladesh. Nissan X-trail and Sylphy is the key product of them.",
      "img": "https://i.ibb.co/99SdfJV/50-509611-1920x1080-blue-background-nissan-logo-wallpaper-nissan-logo.jpg",
    }
  ];
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
