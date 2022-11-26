import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Nabvar = () => {
  const [buttonCollaps, setBtncollaps] = useState(false);
  const { user, userLogOut } = useContext(AuthContext);
  const logOut = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const collapsBtnClick = () => {
    if (buttonCollaps === true) {
      const clicking = document.getElementById("toggle-value");
      clicking.classList.add("hidden");
      setBtncollaps(false);
    } else {
      const clicking = document.getElementById("toggle-value");
      clicking.classList.remove("hidden");
      setBtncollaps(true);
    }
  };
  console.log(user);
  const tabItems = (
    <>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/Blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {tabItems}
            </ul>
          </div>
          <div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <img
                className="w-8 h-8 mr-3 hidden lg:block md:block"
                src="https://i.ibb.co/y80N8zr/favicon.png"
                alt="Icon"
              />
              Car Merchantry
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">{tabItems}</ul>
        </div>

        <div className="navbar-end">
          {user?.uid ? (
            <div className="flex user-wrapper items-center md:order-2">
              <button
                type="button"
                className="flex mr-3 text-sm md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                onClick={() => collapsBtnClick(buttonCollaps)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 mr-1 h-8 rounded-full"
                  src={user?.photoURL}
                  alt="user"
                />
                {user?.displayName}
                <svg
                  className="w-4 h-4 mx-1.5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="hidden z-50 bg-blue-50 absolute top-20 right-12 text-base list-none rounded divide-y divide-gray-300 shadow dark:bg-gray-200 dark:divide-gray-600"
                id="toggle-value"
              >
                <div className="py-3 px-4">
                  <span className="block text-sm text-gray-900 dark:text-rose-400 font-bold">
                    {user?.displayName}
                  </span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-600">
                    {user?.email}
                  </span>
                </div>
                <ul className="py-1" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="/reviews"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-900 dark:hover:text-white"
                    >
                      My Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/add"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-900 dark:hover:text-white"
                    >
                      Add Product
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={logOut}
                      className="text-white px-2 py-1 my-3 rounded-md mx-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg  dark:shadow-blue-800/80 "
                    >
                      log out
                    </button>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-blue-500 hover:bg-blue-700 rounded-lg border-none"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
