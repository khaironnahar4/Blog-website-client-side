// import { Children } from "react";
import AuthContainer from "../authContext/Auth/AuthContainer"
import { Navigate, useLocation } from "react-router-dom";


function PrivateRoute({children}) {
    const {currentUser, loading} = AuthContainer();
    const location = useLocation()

    if(loading) return <p>Loading...</p>;

    if(currentUser && currentUser?.email) return children;
    

  return (
    <Navigate to={'/signin'} state={location?.pathname}></Navigate>
  )
}

export default PrivateRoute