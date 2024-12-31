import { Link, useLoaderData } from "react-router-dom";
import AuthContainer from "../authContext/Auth/AuthContainer";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function SingleBlog() {
  const blogData = useLoaderData();
  const [comments, setComments] = useState([]);
  const {
    _id,
    title,
    imageURL,
    category,
    shortDescription,
    longDescription,
    userName,
    userPhoto,
    createdAt,
    userEmail,
  } = blogData;
  const { currentUser } = AuthContainer();

  const handleAddWishlist = () => {
    const userEmail = currentUser.email;
    const data = {
      _id,
      title,
      imageURL,
      category,
      shortDescription,
      userEmail,
    };

    axios.post("https://bloggin-site-three.vercel.app/wishlist", data).then((res) => {
      const data = res.data;
      // console.log(data);
      if (data.insertedId) {
        toast.success("Post added to wishlist!!");
      } else {
        toast.error(data.message);
      }
    });
  };

  // comment
  const handleComment = (e) => {
    e.preventDefault();

    const comment = e.target.comment.value;
    // console.log(comment);
    const name = currentUser.displayName;
    const photo = currentUser.photoURL;
    const email = currentUser.email;
    const keyId = _id
    const commentData = { keyId, name, photo, comment };

    if (email === userEmail) {
      return toast.error("You can not comment on your own blog.");
    }

    axios.post("https://bloggin-site-three.vercel.app/comment", commentData).then((res) => {
      // console.log(res.data);
      toast.success(res.data.message);
    });

    const allComment = [...comments];
    setComments(allComment, comment);
    e.target.comment.value = "";
  };

  // read comments

  useEffect(() => {
    axios.get(`https://bloggin-site-three.vercel.app/comment/${_id}`).then((res) => {
      console.log(res.data);
      setComments(res.data);
    });
  }, [_id]);

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
        {/* Blog Title */}
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {/* Short Description */}
        <p className="text-gray-600 mt-2">{shortDescription}</p>
        {/* Author Info */}
        <div className="flex items-center mt-4 border-t pt-4">
          {/* Author Image */}
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img
              src={userPhoto}
              alt="user image"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="ml-3">
            <p className="text-red-500 font-bold">{userName}</p>
            <p className="text-sm text-gray-500">
              {createdAt} <span className="text-gray-800">In {category}</span>
            </p>
          </div>
        </div>
        {/* Blog Image */}
        <div className="mt-6">
          <img src={imageURL} alt="Blog" className="w-full rounded-md" />
        </div>
        <div className="mt-4">
          <p>{longDescription}</p>
        </div>

        <div className="flex justify-start items-center gap-2 mt-6">
          {currentUser?.email === userEmail && (
            <Link
              to={`/update-blog/${_id}`}
              className="border border-red-600 px-3 py-1 
        rounded-md font-semibold hover:bg-red-600 hover:text-white"
            >
              Update
            </Link>
          )}

          <button
            onClick={handleAddWishlist}
            className="border border-red-500 px-3 py-1 
        rounded-md font-semibold bg-red-500 text-white hover:bg-red-600 hover:border-red-600"
          >
            Add
          </button>
        </div>
      </div>

      {/* comment section */}
      <div>
        <h1 className="text-2xl font-bold mt-14">Add a comment</h1>
        <form onSubmit={handleComment} className="mt-11">
          <div>
            <textarea
              type="text"
              name="comment"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Write your comment"
              required
            >
              {" "}
            </textarea>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* show comments */}
      <div>
        <h1 className="text-2xl font-bold mt-14">All comments</h1>
        <div className="mt-11">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="bg-white shadow-md rounded-md p-4 flex items-start space-x-4 mt-4"
            >
              {/* Profile Picture */}
              <img
                src={comment.photo}
                alt={comment.name}
                className="w-12 h-12 rounded-full"
              />
              {/* Comment Content */}
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {comment.name}
                </h3>
                <p className="text-gray-600">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
