import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";

const SingleProduct = ({ companyID, item }) => {
  const { user } = useContext(AuthContext);

  let products = [];
  if (item.serviceID === companyID) {
    products.push(item);
  }
  const notify = () => toast.success("Your order is confirmed");
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
                  <h5 className="flex">
                    Seller's name: {card.sellersName}{" "}
                    <span className="ml-2 text-blue-600 mt-1">
                      <FaCheckCircle />
                    </span>
                  </h5>
                  <ToastContainer position="top-center" />
                  <div className="card-actions justify-end">
                    <label htmlFor="my-modal" className="btn">
                      Buy Now
                    </label>

                    <input
                      type="checkbox"
                      id="my-modal"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Buyer name: {user?.displayName}
                        </h3>
                        <h4 className="font-bold mt-2 text-gray-700">
                          Buyer email: {user?.email}
                        </h4>
                        <h4 className="mt-2">Product name: {card.name}</h4>
                        <h4 className="mt-2">
                          Product price: {card.resalePrice} $
                        </h4>

                        <div className="grid grid-cols-12 mt-2">
                          <label htmlFor="number" className="col-span-3">
                            Buyer number:{" "}
                          </label>
                          <input
                            type="number"
                            placeholder="Type here"
                            id="number"
                            className="input col-span-8 input-bordered w-full max-w-xs"
                          />
                        </div>
                        <div className="grid grid-cols-12 mt-6">
                          <label htmlFor="location" className="col-span-3">
                            Location:{" "}
                          </label>
                          <input
                            type="text"
                            placeholder="Type here"
                            id="location"
                            className="input col-span-8 input-bordered w-full max-w-xs"
                          />
                        </div>
                        <div className="modal-action">
                          <label
                            onClick={notify}
                            htmlFor="my-modal"
                            className="btn"
                          >
                            Submit
                          </label>
                        </div>
                      </div>
                    </div>
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
