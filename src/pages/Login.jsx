// import React from 'react'

import { FaGoogle } from "react-icons/fa"
import AuthContainer from "../authContext/Auth/AuthContainer";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const {handleSingIn, handleSignInWithGoogle, setCurrentUser} = AuthContainer();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';

    const handleForm = e=>{
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const pass = form.password.value;

        console.log(email, pass);

        // sign in with email and password
        handleSingIn(email, pass)
        .then(userCredential => {
            setCurrentUser(userCredential.user);
            navigate(from);
        })
        .catch(error => {
            toast.error(error.message);
        })
        
    }

    // sign in with email
    const handleGoogleSignIn = ()=>{
        handleSignInWithGoogle()
        .then(result =>{
            setCurrentUser(result.user);
            console.log(result.user);
            
            navigate(from);
        })
        .catch(error =>{
            toast(error.message);
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="w-full max-w-md bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>
      
      {/* Social Login Buttons */}
      <div className="flex flex-col space-y-3">
        {/* <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-md shadow hover:bg-blue-700">
          <FaFacebookF className="mr-2" /> Sign in with Facebook
        </button> */}
        <button onClick={handleGoogleSignIn}
         className="flex items-center justify-center w-full bg-red-600 text-white py-2 rounded-md shadow hover:bg-red-700">
          <FaGoogle className="mr-2" /> Sign in with Google
        </button>
      </div>
      
      {/* Divider */}
      <div className="my-4 text-center text dark:text-gray-300-gray-500">OR</div>
      
      {/* Username and Password */}
      <form onSubmit={handleForm} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border dark:bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border dark:bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        
        {/* Remember Me & Forgot Password */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <label className="flex items-center text-gray-600 dark:text-gray-300">
            <input type="checkbox" className="form-checkbox mr-2" />
            Remember me
          </label>
          <a href="/forgot-password" className="text-red-600 hover:underline">
            Forgot password?
          </a>
        </div>
        
        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md shadow hover:bg-red-700"
        >
          Sign in
        </button>
      </form>
      
      {/* Sign Up Link */}
      <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
        Dont have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  </div>
  )
}

export default Login