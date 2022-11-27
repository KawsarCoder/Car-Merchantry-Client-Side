import React from "react";
import Footer from "../Footer/Footer";
import Nabvar from "../Navbar/Navbar";

const PageNotFound = () => {
  return (
    <div>
      <Nabvar></Nabvar>
      <div>
        <img
          className="h-96 my-10 m-auto"
          src="https://i.ibb.co/N1yyb80/404-error-page-not-found.jpg"
          alt="404 page not found"
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PageNotFound;
