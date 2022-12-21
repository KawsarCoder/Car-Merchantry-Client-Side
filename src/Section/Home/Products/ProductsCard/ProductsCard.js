import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { name, description, img, _id } = product;

  return (
    <div>
      <div className="card shadow-md glass">
        <figure>
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`products/${_id}`} className="btn rounded-lg btn-primary">
              Show all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
