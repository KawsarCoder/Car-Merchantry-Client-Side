import React from "react";
import { Link } from "react-router-dom";

const CheckUser = ({ logOut, email, users }) => {
  let realUser = [];
  const findUser = (usr) => {
    // console.log(usr.email);
    if (usr.email === email) {
      realUser.push(usr);
    }
  };
  users.map((usr) => findUser(usr));
  return (
    <div>
      <div>
        {realUser[0]?.userType === "Seller" ? (
          <>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link
                  to="/my-product"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-900 dark:hover:text-white"
                >
                  My Product
                </Link>
              </li>
              <li>
                <Link
                  to="/add-product"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-900 dark:hover:text-white"
                >
                  Add product
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
          </>
        ) : (
          <>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link
                  to="/my-product"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-900 dark:hover:text-white"
                >
                  My Product
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
          </>
        )}
      </div>
    </div>
  );
};

export default CheckUser;
