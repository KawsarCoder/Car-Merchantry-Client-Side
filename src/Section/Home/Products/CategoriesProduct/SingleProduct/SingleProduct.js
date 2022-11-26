import React from "react";

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
            <>
              <div className="card lg:card-side p-5 bg-gray-200 shadow-xl">
                <figure className="lg:w-96">
                  <img className="rounded-md" src={card.img} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{card.name}</h2>
                  <p>location: {card.location}</p>
                  <h5>Resale price: {card.resalePrice} $</h5>
                  <h5>Original price: {card.originalPrice} $</h5>
                  <span>Years of use: {card.useYears} years</span>
                  <h4>Posted time: {card.date}</h4>
                  <h5>Seller's name: {card.sellersName}</h5>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary rounded-md">Buy Now</button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SingleProduct;
