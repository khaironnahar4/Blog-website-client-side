import axios from "axios";
import { Link } from "react-router-dom";


function WishlistCard({data, handleDeleteWishList}) {
    const {_id, title, imageURL, category, shortDescription, userEmail} = data;

    // const handleDeleteWishList = ()=>{
    //     axios.delete(`https://bloggin-site-three.vercel.app/wishlist?id=${_id}&&email=${userEmail}`)
    //     .then(res =>{
    //         console.log(res.data);
            
    //     })
    // }

  return (
    <div className="card card-side bg-base-100 shadow-xl mt-6">
      <figure>
        <img
          src={imageURL}
          alt="blog image"
          className="w-[150px] h-[150px] rounded-md m-4"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{category}</p>
        <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          <Link to={`/all-blogs/${_id}`} 
          className="btn border border-red-600 bg-white hover:bg-red-600 hover:text-white">Details</Link>
          <button onClick={()=> handleDeleteWishList(_id, userEmail)} 
          className="btn bg-red-500 text-white hover:bg-red-600">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
