import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SingleProduct from "./SingleProduct/SingleProduct";

const MyProduct = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useState(() => {
    fetch(`https://car-server-vert.vercel.app/items?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          userLogOut();
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, [user?.email, userLogOut]);

  const handleDelete = (id) => {
    const process = window.confirm("Are sure to remove this product");
    if (process) {
      fetch(`https://car-server-vert.vercel.app/items/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Successfully deleted");
            const remaining = items.filter((rev) => rev._id !== id);
            setItems(remaining);
          }
        });
    }
  };
  return (
    <div className="mb-10">
      {items.length > 0 ? (
        <>
          <div className="grid grid-cols-1 justify-items-center">
            <h2 className="text-center text-xl font-bold mt-10 text-rose-500 border-b-4 border-blue-300 p-5 w-72">
              Your product
            </h2>
          </div>
          <div className="grid grid-cols-12 mb-10 mt-5">
            <div className="lg:col-start-3 lg:col-end-11 col-start-2 col-end-12">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Product Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Price
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Sale status
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.map((product) => (
                      <SingleProduct
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                      ></SingleProduct>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="text-center mt-10">
            <div role="status">
              <svg
                className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      )}
      {items.length === 0 ? (
        <>
          <div className="grid grid-cols-1 justify-items-center">
            <h2 className="text-center text-xl font-bold mt-10 text-rose-500 border-b-4 border-blue-300 p-5 w-72">
              You don't have any product
            </h2>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyProduct;
