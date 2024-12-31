import { useEffect, useState } from "react";
import AuthContainer from "../authContext/Auth/AuthContainer"
import axios from "axios";
import WishlistCard from "../components/WishlistCard";
import { toast } from "react-toastify";

function Wishlist() {
  const {currentUser} = AuthContainer()
  const [wishlist, setWishlist] = useState([]);

  const email = currentUser.email;
  // console.log(email);
  
  useEffect(()=>{
    axios(`https://bloggin-site-three.vercel.app/wishlist/${email}`)
    .then(res =>{
      // console.log(res.data);
      setWishlist(res.data);  
    })
  } ,[email])

  const handleDeleteWishList = (_id, userEmail)=>{
    axios.delete(`https://bloggin-site-three.vercel.app/wishlist?id=${_id}&&email=${userEmail}`)
    .then(res =>{
        if(res.data.deletedCount>0){
          toast.success("Deleted successfully!!");
          const remaining = wishlist.filter(data => data._id !== _id);
          setWishlist(remaining);
        }
        
    })
}

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-14">Wishlist</h1>

      <div>
        {
          wishlist.map(data => 
          <WishlistCard 
          key={data._id} 
          handleDeleteWishList={handleDeleteWishList} 
          data={data}></WishlistCard>)
        }
      </div>
    </div>
  )
}

export default Wishlist