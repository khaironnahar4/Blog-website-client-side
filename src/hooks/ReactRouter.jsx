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
// import BlogCard from "../components/BlogCard";
import AllBlogCards from "../components/AllBlogCards";
import SingleBlog from "../components/SingleBlog";
import UpdateBlog from "../pages/UpdateBlog";

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
          element: <AllBlogs></AllBlogs>,

          children: [
            {
              path: '/all-blogs',
              element: <AllBlogCards></AllBlogCards>,
              loader: ()=> fetch('http://localhost:5000/blogs'),
            },
            {
              path: '/all-blogs/:id',
              element: <SingleBlog></SingleBlog>,
              loader: ({params})=> fetch(`http://localhost:5000/blogs/${params.id}`),
            }
          ]
        },
        {
          path: '/add-blog',
          element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
          path: '/update-blog/:id',
          element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/blogs/${params.id}`),
        },
        {
          path: '/feature',
          element: <Feature></Feature>,
          loader:()=> fetch('http://localhost:5000/blogs/data/10')
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