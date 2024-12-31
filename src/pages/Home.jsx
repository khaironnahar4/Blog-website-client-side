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
      <section className="lg:flex gap-4 justify-between items-start mt-24">
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
          <div className="flex flex-col justify-center items-center mt-24 border border-gray-200 shadow-md lg:py-36 py-24">
            <h1 className="text-4xl font-bold">Newsletter</h1>
            <h2 className="font-semibold">The most important world news and events of the day.</h2>
            <p className="text-gray-500">Get daily news letter in your inbox</p>
            <form onSubmit={handleNewsLetter} className="mt-6">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="border p-4 rounded-l-md"
                required
              />
              <button className="bg-red-500 text-white p-4 border border-red-500 rounded-r-md">Submit</button>
            </form>
          </div>
        </div>
        {/* side menu */}
        <div className="lg:w-1/3">
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
