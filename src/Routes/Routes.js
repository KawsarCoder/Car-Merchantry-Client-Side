import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blog from "../Section/Blog/Blog";
import Home from "../Section/Home/Home";
import CategoriesProduct from "../Section/Home/Products/CategoriesProduct/CategoriesProduct";
import Products from "../Section/Home/Products/Products";
import Login from "../Section/Login/Login";
import Register from "../Section/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRooute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <CategoriesProduct></CategoriesProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
