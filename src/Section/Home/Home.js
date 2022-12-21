import React from "react";
import AdvertiseItems from "./AdvertiseItems/AdvertiseItems";
import Carousel from "./Carousel/Carousel";
import Products from "./Products/Products";
import SaleInfo from "./SaleInfo/SaleInfo";

const Home = () => {
  return (
    <div className="w-[1170px] mx-auto">
      <Carousel></Carousel>
      <Products></Products>
      <AdvertiseItems></AdvertiseItems>
      <SaleInfo></SaleInfo>
    </div>
  );
};

export default Home;
