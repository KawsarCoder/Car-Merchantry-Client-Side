import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import Modal from "../Modal/Modal";

const SingleCard = ({ card }) => {
  const [clickCard, setClickCard] = useState([]);
  const checkName = (value) => {
    if (value === card) {
      setClickCard(card);
    }
  };
  return (
    <div>
      <>
        <div className="card grid lg:grid-cols-2 grid-cols-1 lg:card-side p-5 bg-gray-200 shadow-xl">
          <div className="grid items-stretch">
            <img className="rounded-md" src={card.img} alt="Album" />
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl text-blue-600 font-bold">
              {card.name}
            </h2>
            <p>location: {card.location}</p>
            <h5 className="font-bold text-rose-500">
              Resale price: {card.resalePrice} $
            </h5>
            <h5 className="font-bold">
              Original price: {card.originalPrice} $
            </h5>
            <span>Years of use: {card.useYears} years</span>
            <h4>Posted time: {card.date ? card.date : <>03/12/2022</>}</h4>
            <h5 className="flex">
              Seller's name: {card.sellersName}{" "}
              <span className="ml-2 text-blue-600 mt-1">
                <FaCheckCircle />
              </span>
            </h5>

            <ToastContainer position="top-right" />
            <div className="card-actions justify-end">
              <label
                onClick={() => checkName(card)}
                htmlFor="my-modal"
                className="btn rounded-md"
              >
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
