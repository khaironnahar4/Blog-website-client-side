import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "./firebase/firebase.init";
import { toast } from "react-toastify";

function AuthProvider({ children }) {
  // const username = "jarina";
  const [currentUser, setCurrentUser] = useState({});
  const [loading, isLoading] = useState(true);

  // sign up
  const handleSignUp = (email, password) => {
    isLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in password
  const handleSingIn = (email, password) => {
    isLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const handleSignInWithGoogle = () => {
    isLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // sign out
  const handleSignOut = () => {
    isLoading(true);
    signOut(auth)
    .then(()=>{
      console.log('sign out successfull');
      setCurrentUser(null);
      
    })
    .catch(error => {
      toast.error(error);
    })
  };

  // set a observer
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, user =>{
      if(user){
        setCurrentUser(user);
        isLoading(false);
      }
    })

    return ()=>{
      unSubscribe()
    }
  }, [currentUser])
  // console.log(currentUser);
  

  const user = {
    currentUser,
    setCurrentUser,
    loading,
    isLoading,
    handleSignUp,
    handleSingIn,
    handleSignInWithGoogle,
    handleSignOut,
  };
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
