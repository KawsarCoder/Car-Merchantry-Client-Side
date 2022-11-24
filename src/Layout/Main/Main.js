import React from "react";
import Footer from "../../Section/Common/Footer/Footer";
import { Outlet } from "react-router-dom";
import Nabvar from "../../Section/Common/Navbar/Navbar";
const Main = () => {
  return (
    <div>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
