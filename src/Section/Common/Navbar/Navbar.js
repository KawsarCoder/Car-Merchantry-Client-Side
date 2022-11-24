import React from "react";
import { Link } from "react-router-dom";

const Nabvar = () => {
  const tabItems = (
    <>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      {/* <li tabIndex={0}>
                  <a href="/" className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a href="/">Submenu 1</a>
                    </li>
                    <li>
                      <a href="/">Submenu 2</a>
                    </li>
                  </ul>
                </li> */}
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
          <Link
            to="/login"
            className="btn bg-blue-500 hover:bg-blue-700 rounded-lg border-none"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
