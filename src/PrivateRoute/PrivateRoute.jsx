// import { Children } from "react";
import AuthContainer from "../authContext/Auth/AuthContainer"
import { Navigate, useLocation } from "react-router-dom";


function PrivateRoute({children}) {
    const {currentUser} = AuthContainer();
    const location = useLocation()

    

    if(currentUser && currentUser?.email) return children;

  return (
    <Navigate to={'/signin'} state={location?.pathname}></Navigate>
  )
}

export default PrivateRoute