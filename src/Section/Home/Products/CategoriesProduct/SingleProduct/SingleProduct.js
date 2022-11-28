import React from "react";
import SingleCard from "./SingleCard/SingleCard";

const SingleProduct = ({ companyID, item }) => {
  let products = [];
  if (item.serviceID === companyID) {
    products.push(item);
  }
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
