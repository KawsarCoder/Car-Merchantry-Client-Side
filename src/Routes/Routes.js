import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import Main from "../Layout/Main/Main";
import MyProduct from "../MyProduct/MyProduct";
import Blog from "../Section/Blog/Blog";
import PageNotFound from "../Section/Common/PageNotFound/PageNotFound";
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
          fetch(`https://car-server-vert.vercel.app/products/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/my-product",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default router;
