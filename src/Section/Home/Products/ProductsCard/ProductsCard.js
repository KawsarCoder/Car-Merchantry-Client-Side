import React from "react";

const ProductsCard = ({ product }) => {
  const { name, description, img } = product;
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Show all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
