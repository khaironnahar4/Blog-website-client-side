import { useContext } from "react"
import AuthContext from "../AuthContext"


function AuthContainer() {
    const AuthInfo = useContext(AuthContext);
  return AuthInfo
}

export default AuthContainer