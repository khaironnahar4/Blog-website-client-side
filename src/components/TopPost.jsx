import { Link } from "react-router-dom";

function TopPost({ blog }) {
  const { _id, userName, createdAt, title, imageURL } = blog;
  return (
    <div className="flex gap-4 items-start p-4 border border-gray-300 dark:bg-gray-700 rounded-lg shadow-md mt-4">
      {/* Image Section */}
      <img
        src={imageURL}
        alt="Post Thumbnail"
        className="w-20 h-20 rounded-lg object-cover"
      />

      {/* Content Section */}
      <div className="flex flex-col">
        {/* Author and Date */}
        <div className="text-sm text-gray-500 dark:text-gray-300">
          <span className="text-red-500 font-bold">By {userName}</span>
          <span className="ml-4">{createdAt}</span>
        </div>

        {/* Post Title */}
        <Link to={`/all-blogs/${_id}`}>
          <h3 className="text-lg font-semibold text-black dark:text-white hover:text-red-500 transition duration-300">
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default TopPost;
