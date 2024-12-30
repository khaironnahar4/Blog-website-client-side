import {
    createBrowserRouter,
  } from "react-router-dom";
import MainStructure from "../main structure/MainStructure";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AllBlogs from "../pages/AllBlogs";
import AddBlog from "../pages/AddBlog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Feature from "../pages/Feature";
import Wishlist from "../pages/Wishlist";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainStructure></MainStructure>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/signin',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Registration></Registration>
        },
        {
          path: '/all-blogs',
          element: <AllBlogs></AllBlogs>
        },
        {
          path: '/add-blog',
          element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
          path: '/feature',
          element: <Feature></Feature>
        },
        {
          path: '/wishlist',
          element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
        }

      ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
  ]);

 export default router; 