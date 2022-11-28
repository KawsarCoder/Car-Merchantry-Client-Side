import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Modal = ({ clickCard }) => {
  const { user } = useContext(AuthContext);
  const notify = () => {
    toast.success("Your order is confirmed");
  };
  let items = clickCard;

  return (
    <div>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Buyer name: {user?.displayName}</h3>
        <h4 className="font-bold mt-2 text-gray-700">
          Buyer email: {user?.email}
        </h4>
        <h4 className="mt-2">
          {items.length > 0 ? <h1>Product name: {items.name}</h1> : <></>}
        </h4>
        <h4 className="mt-2">
          {items.length > 0 ? (
            <h2>Product name: {items.resalePrice} $</h2>
          ) : (
            <></>
          )}
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
            required
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
            required
          />
        </div>
        <div className="modal-action">
          <label onClick={notify} htmlFor="my-modal" className="btn">
            Submit
          </label>
        </div>
      </div>
    </div>
  );
};

export default Modal;
