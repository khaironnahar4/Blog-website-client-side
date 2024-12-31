import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import TopPost from "../components/TopPost";

function AllBlogs() { 
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/blogs/data/6").then((res) => {
      const datas = res.data;
      // console.log(blogs);
      setBlogs(datas);
    });
  }, []); 

  return (
    <section className="lg:flex gap-4 justify-between items-start mt-8">
      {/* all blogs */}
      <div className="lg:w-2/3">
        <Outlet></Outlet>
      </div>
      {/* side menu */}
      <div className="lg:w-1/3">
        <h1 className="text-2xl font-bold border-b-4 p-2 border-red-500 inline">Recent posts</h1>
        <div className="mt-8">
          {
            blogs.map(blog =><TopPost key={blog._id} blog={blog}></TopPost>)
          }
        </div>
      </div>
    </section>
  )
}

export default AllBlogs