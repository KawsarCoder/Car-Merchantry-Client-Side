import React from "react";
import SingleCard from "./SingleCard/SingleCard";

const SingleProduct = ({ companyID, item, companyName }) => {
  let products = [];
  if (
    item.serviceID === companyID ||
    item.categories === "BMW" ||
    item.categories === "Nisshan" ||
    item.categories === "Tesla"
  ) {
    products.push(item);
  }
  console.log(item);
  return (
    <div>
      {products.length > 0 ? (
        <>
          {products.map((card) => (
            <SingleCard card={card} key={card._id}></SingleCard>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SingleProduct;
