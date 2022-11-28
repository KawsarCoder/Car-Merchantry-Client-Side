import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import Modal from "../Modal/Modal";

const SingleCard = ({ card }) => {
  const [clickCard, setClickCard] = useState([]);

  const checkName = () => {
    setClickCard(card);
  };
  return (
    <div>
      <>
        <div className="card lg:card-side p-5 bg-gray-200 shadow-xl">
          <figure className="lg:w-96">
            <img className="rounded-md" src={card.img} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{card.name}</h2>
            <p className="font-bold">location: {card.location}</p>
            <h5 className="font-bold">Resale price: {card.resalePrice} $</h5>
            <h5 className="font-bold">
              Original price: {card.originalPrice} $
            </h5>
            <span className="font-bold">
              Years of use: {card.useYears} years
            </span>
            <h4 className="font-bold">Posted time: {card.date}</h4>
            <h5 className="flex font-bold">
              Seller's name: {card.sellersName}{" "}
              <span className="ml-2 text-blue-600 mt-1">
                <FaCheckCircle />
              </span>
            </h5>

            <ToastContainer position="top-center" />
            <div className="card-actions justify-end">
              <label onClick={checkName} htmlFor="my-modal" className="btn">
                Buy Now
              </label>

              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <Modal clickCard={clickCard}></Modal>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SingleCard;
