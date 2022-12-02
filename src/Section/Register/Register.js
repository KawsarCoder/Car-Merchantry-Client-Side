import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, loginProfileUpdate } = useContext(AuthContext);

  const handleUsers = (user) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((e) => console.error(e));
  };
  const formSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const phoneNumber = form.phone.value;
    const userType = form.userType.value;
    const password = form.password.value;
    const userValue = {
      name,
      phoneNumber,
      userType,
      email,
      photoURL,
    };
    createUser(email, password, name)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        fetch("https://car-server-vert.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("user-token", data.token);
            userProfileAdded(name, photoURL);
            handleUsers(userValue);
            form.reset();
            setError("");
            window.location.reload();
          });
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };
  const userProfileAdded = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    loginProfileUpdate(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };
  const notify = () => {
    toast("Registration Successful!");
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src="https://i.ibb.co/GtdZG4y/sign-up.png" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div>
                  <label className="text-sm" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div>
                  <label className="text-sm" htmlFor="phone">
                    Your number (enter 11 digit phone number)
                  </label>
                  <input
                    type="number"
                    pattern="[0-9]{11}"
                    name="phone"
                    placeholder="Enter your name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <label htmlFor="userSelect">Select user type</label>
                <select
                  name="userType"
                  id="userType"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option>Buyer</option>
                  <option>Seller</option>
                </select>
                <div>
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm text-gray-900"
                  >
                    Insert your Photo URL
                  </label>
                  <input
                    type="url"
                    name="photoURL"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Photo url"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="password" className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={notify}>
                    Sign up
                  </button>
                </div>
                <ToastContainer />
                <span className="block mt-2 text-sm text-red-700 rounded-lg dark:bg-red-200 dark:text-red-800">
                  {error}
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
