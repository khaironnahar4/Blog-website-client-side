import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { toast } from "react-toastify";
import TopPost from "../components/TopPost";

function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("https://bloggin-site-three.vercel.app/blogs/data/6").then((res) => {
      const datas = res.data;
      // console.log(blogs);
      setBlogs(datas);
    });
  }, []);
  // console.log(blogs);

  const handleNewsLetter = (e)=>{
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter");

  }

  return (
    <div>
      {/* marque */}

      {/* hero */}
      <Hero blogs={blogs}></Hero>

      {/* 6 data */}
      <section className="lg:flex gap-4 justify-between items-start lg:mt-24 md:mt-16 sm:mt-12 mt-10">
        {/* 6  blogs */}
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-bold border-b-4 p-2 border-red-500 inline">
            Top posts
          </h1>
          <div>
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog}></BlogCard>
            ))}
          </div>

          {/* newslater */}
          <div className="flex flex-col justify-center items-center lg:mt-24 md:mt-16 sm:mt-12 mt-10 border border-gray-200 shadow-md lg:py-36 sm:py-24 py-20 px-4">
            <h1 className="sm:text-4xl text-3xl font-bold">Newsletter</h1>
            <h2 className="font-semibold text-center">The most important world news and events of the day.</h2>
            <p className="text-gray-500">Get daily news letter in your inbox</p>
            <form onSubmit={handleNewsLetter} className="mt-6 flex flex-col sm:flex-row">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="border sm:p-4 p-2 sm:rounded-l-md rounded-md sm:rounded-none"
                required
              />
              <button className="bg-red-500 text-white sm:p-4 p-2 sm:mt-0 mt-2 border border-red-500 
              sm:rounded-r-md rounded-md sm:rounded-none">Submit</button>
            </form>
          </div>
        </div>
        {/* side menu */}
        <div className="lg:w-1/3 lg:mt-0 md:mt-16 sm:mt-12 mt-10">
          <h1 className="text-2xl font-bold border-b-4 p-2 border-red-500 inline">
            Recent posts
          </h1>

          <div className="mt-8">
          {
            blogs.map(blog =><TopPost key={blog._id} blog={blog}></TopPost>)
          }
        </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
