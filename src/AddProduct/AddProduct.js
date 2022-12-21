import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const navigate = useNavigate();
  const handleProductAdd = (event) => {
    event.preventDefault();

    fetch("https://car-server-vert.vercel.app/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Product added successfully");
          event.target.reset();

          navigate("/my-product");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleBlurInput = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newProduct = { ...product };
    newProduct[field] = value;
    setProduct(newProduct);
  };
  return (
    <form className="my-6" onSubmit={handleProductAdd}>
      <div className="grid gap-6 mb-6 grid-cols-12">
        <div className="col-start-2 col-end-11 lg:col-start-4 lg:col-end-10 bg-gray-200 p-10 border rounded-lg border-gray-100">
          <div className="mt-6">
            <label
              htmlFor="productName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onBlur={handleBlurInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Give here of your product name"
              required=""
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="sellersName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your original name
            </label>
            <input
              type="text"
              id="sellersName"
              name="sellersName"
              onBlur={handleBlurInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Give here of your product name"
              required=""
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="sellersName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onBlur={handleBlurInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Give here of your product name"
              required=""
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Original Price
              </label>
              <input
                type="number"
                id="phone"
                name="originalPrice"
                onBlur={handleBlurInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
                required=""
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Resale Price
              </label>
              <input
                type="number"
                id="phone"
                name="resalePrice"
                onBlur={handleBlurInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
                required=""
              />
            </div>
            <div className="mt-12">
              <select
                onBlur={handleBlurInput}
                name="productCondition"
                className="select select-secondary rounded-md w-full max-w-xs"
              >
                <option disabled selected>
                  Product Condition
                </option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="mt-10">
              <select
                onBlur={handleBlurInput}
                name="location"
                className="select select-secondary rounded-md w-full max-w-xs"
              >
                <option disabled selected>
                  Location
                </option>
                <option>CTG</option>
                <option>Dhaka</option>
                <option>Barishal</option>
                <option>Rajshahi</option>
                <option>Khulna</option>
                <option>Sylhet</option>
              </select>
            </div>
            <div className="mt-10">
              <select
                onBlur={handleBlurInput}
                name="categories"
                className="select select-secondary rounded-md w-full max-w-xs"
              >
                <option disabled selected>
                  Select catagories
                </option>
                <option>Nissan</option>
                <option>Tesla</option>
                <option>BMW</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mobile Number
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              onBlur={handleBlurInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Give your phone number"
              required=""
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="useYears"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Year of Purchase
            </label>
            <input
              type="number"
              name="useYears"
              id="useYears"
              onBlur={handleBlurInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Give your phone number"
              required=""
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Photo URL
            </label>
            <input
              type="link"
              name="img"
              id="website"
              onBlur={handleBlurInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Give here your product photo url"
              required=""
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Describe about your product
            </label>
            <textarea
              id="message"
              rows="4"
              name="description"
              onBlur={handleBlurInput}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="describe your product"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
