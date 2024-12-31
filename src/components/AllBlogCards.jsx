import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard"

function AllBlogCards() {
    const allBlogsData = useLoaderData();
  return (
    <div>
        <h1 className="text-2xl font-bold border-b-4 p-2 border-red-500 inline">All Blogs</h1>
        <div>
          {
            allBlogsData.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
          }
          
        </div>
    </div>
  )
}

export default AllBlogCards