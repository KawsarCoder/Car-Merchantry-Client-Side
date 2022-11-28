import React, { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { userLogin, signIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const loginFormHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        //get jwt token
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
            form.reset();
            setError("");
            navigate(from, { replace: true });
          });
      })
      .catch((e) => {
        console.error(e);

        setError(e.message);
      });
  };

  const googleSignIn = () => {
    userLogin(googleProvider)
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
            setError("");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              src="https://i.ibb.co/FHknRXj/login-removebg-preview.png"
              alt=""
            />
          </div>
          <form onSubmit={loginFormHandle}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                <span className="block mb-2 text-sm text-red-700 rounded-lg dark:bg-red-200 dark:text-red-800">
                  {error}
                </span>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>

                <label>
                  <span>you haven't account?</span>
                  <Link
                    to="/register"
                    className="font-bold ml-3 text-sm text-rose-400"
                  >
                    Please sign up
                  </Link>
                </label>
                <div className="mt-5">
                  <button
                    onClick={googleSignIn}
                    type="button"
                    className="text-white flex bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    <svg
                      className="mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
