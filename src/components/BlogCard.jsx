import axios from "axios";
import { Link } from "react-router-dom";
import AuthContainer from "../authContext/Auth/AuthContainer";
import { toast } from "react-toastify";

function BlogCard({ blog }) {
    const {currentUser} = AuthContainer()
  const { _id, title, imageURL, category, shortDescription, userName, createdAt } = blog || {};

    // handle add to wishlist
  const handleAddWishlist = ()=>{
    const userEmail = currentUser.email;
    
    const data = {_id, title, imageURL, category, shortDescription, userEmail};

    axios.post('http://localhost:5000/wishlist', data)
    .then(res =>{
        const data = res.data;
        // console.log(data);
        if(data.insertedId){
            toast.success('Post added to wishlist!!')
        }else{
            toast.error(data.message);
        }
    })
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto mt-8">
      {/* Image Section */}
      <div className="lg:w-1/3 h-[250px] m-2 rounded-lg overflow-hidden">
        <img
          src={imageURL}
          alt="Blog"
          className=" w-full h-full object-cover object-center"
        />
      </div>
      {/* Content Section */}
      <div className="card-body lg:w-2/3">
        {/* Category Tag */}
        <div className="badge badge-error font-bold uppercase">{category}</div>
        {/* Author and Date */}
        <div className="text-gray-500 text-sm mt-2">
          <span>By {userName}</span>
          <span className="ml-2">• {createdAt}</span>
        </div>
        {/* Title */}
        <h2 className="card-title mt-4 text-lg font-bold">{title}</h2>
        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">{shortDescription}</p>

        <div className="flex justify-start items-center gap-2">
            {/* detail button */}
          <Link to={`/all-blogs/${_id}`}
            className="border border-red-600 px-3 py-1 
        rounded-md font-semibold hover:bg-red-600 hover:text-white"
          >
            Details
          </Link>
          <button onClick={handleAddWishlist}
            className="border border-red-500 px-3 py-1 
            rounded-md font-semibold bg-red-500 text-white hover:bg-red-600 hover:border-red-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
