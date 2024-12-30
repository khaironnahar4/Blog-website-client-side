import { useRef } from "react";
import { toast } from "react-toastify";
import AuthContainer from "../authContext/Auth/AuthContainer";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import Auth from "../authContext/Auth/Auth";

function Registration() {
    // const {username} = Auth();
    const {handleSignUp, setCurrentUser, currentUser} = AuthContainer();
    const checkRef = useRef(null);
    const navigate = useNavigate();


    const handleForm = e =>{
        e.preventDefault()
    
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        const image = form.image.value;


       

        // password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{6,}$/;
        if(!passwordRegex.test(pass)){
           return toast.error('password must be contain at least 6 digit, a capital letter, a special character, a numeric character.')
            // console.log('password must be contain at least 6 digit, a capital letter, a special character, a numeric character. ');
        }
        if(!checkRef.current.checked){
            return toast.error('Please accept all terms and conditions');
            
        }

        console.log(name, email, pass.length, image, checkRef.current.checked);
        // console.log("user name ",username);
        handleSignUp(email, pass)
        .then(userCredential => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name,
                photoURL: image
            }).then(()=>{
                setCurrentUser(user);
                console.log(currentUser);
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            })
            
        })
        .catch(error => {
            toast.error(error.message);
        })
        
    
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Sign up</h2>

        {/* Username and Password */}
        <form onSubmit={handleForm} className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base font-semibold">Image</span>
            </label>
            <input
              type="text"
              name="image"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* terms and conditions */}
          <div className="form-control">
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" ref={checkRef} className="checkbox h-5 w-5 rounded-full"/>
              <span className="label-text">I accept all <span className="text-red-600">terms and conditions.</span></span>
            </label>
          </div>

          {/* Sign up Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md shadow hover:bg-red-700"
          >
            Register
          </button>
        </form>

        {/* Sign in Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Registration;
