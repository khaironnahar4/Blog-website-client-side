import moment from "moment";
import AuthContainer from "../authContext/Auth/AuthContainer";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";


function UpdateBlog() {
    const blogData = useLoaderData();
    const {_id, title, imageURL, category, shortDescription, longDescription } = blogData;
    const { currentUser } = AuthContainer();
    const navigate = useNavigate();
    const categories = [
      "Technology",
      "Health",
      "Business",
      "Lifestyle",
      "Education",
    ];

    const handleUpdate = (e) =>{
         e.preventDefault();
        
            const form = e.target;
        
            const title = form.title.value;
            const imageURL = form.imageUrl.value;
            const category = form.category.value;
            const shortDescription = form.shortDescription.value;
            const longDescription = form.longDescription.value;
            const userName = currentUser?.displayName;
            const userEmail = currentUser?.email;
            const userPhoto = currentUser?.photoURL;
        
            // generate the date
            const createdAt = moment().format("MMMM Do YYYY");

            const blog = {
                title,
                imageURL,
                category,
                shortDescription,
                longDescription,
                userName,
                userEmail,
                userPhoto,
                createdAt,
              };

              axios.put(`https://bloggin-site-three.vercel.app/blogs/${_id}`, blog)
              .then(res =>{
                console.log(res.data);
                const result = res.data;
                if(result.modifiedCount>0){
                    navigate(`/all-blogs/${_id}`)
                }
              })
    }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Update The Blog</h2>
      <form onSubmit={handleUpdate}>
        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Enter blog title"
            defaultValue={title}
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Enter image URL"
            defaultValue={imageURL}
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            name="category"
            id="category"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
            defaultValue={category}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option
                className="hover:bg-red-500 focus:bg-red-500"
                key={index}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Short Description */}
        <div className="mb-4">
          <label
            htmlFor="shortDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Short Description
          </label>
          <textarea
            name="shortDescription"
            id="shortDescription"
            rows="2"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Write a short description"
            defaultValue={shortDescription}
            required
          ></textarea>
        </div>

        {/* Long Description */}
        <div className="mb-4">
          <label
            htmlFor="longDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Long Description
          </label>
          <textarea
            name="longDescription"
            id="longDescription"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Write the full blog content"
            defaultValue={longDescription}
            required
          ></textarea>
        </div>

        {/* user name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            readOnly
            value={currentUser.displayName}
          />
        </div>

        {/* user email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            readOnly
            value={currentUser.email}
          />
        </div>

        {/* user photo */}
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Photo
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            readOnly
            value={currentUser.photoURL}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateBlog