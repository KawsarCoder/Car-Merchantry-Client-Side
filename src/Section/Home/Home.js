import React from "react";
import Carousel from "./Carousel/Carousel";
import Products from "./Products/Products";
import SaleInfo from "./SaleInfo/SaleInfo";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>\<Products></Products>
      <SaleInfo></SaleInfo>
    </div>
  );
};

export default Home;
