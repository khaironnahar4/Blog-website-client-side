import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import AuthContainer from "../authContext/Auth/AuthContainer";
import { FaRegMoon, FaSun } from "react-icons/fa";
// import { toast } from "react-toastify";

function Navbar({theme, setTheme}) {
  const { currentUser, handleSignOut } = AuthContainer();
  

  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={`navlinks dark:bg-gray-800 dark:sm:border-white dark:border-none ${({ isActive }) => (isActive ? "active" : "")}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/all-blogs"}
          className={`navlinks dark:bg-gray-800 dark:sm:border-white dark:border-none ${({ isActive }) => (isActive ? "" : "")}`}
        >
          All Blogs
        </NavLink>
      </li>
      {currentUser && currentUser?.email && (
        <li>
          <NavLink
            to={"/add-blog"}
            className={`navlinks dark:bg-gray-800 dark:sm:border-white dark:border-none ${({ isActive }) => (isActive ? "" : "")}`}
          >
            Add Blog
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/feature"}
          className={`navlinks dark:bg-gray-800 dark:sm:border-white dark:border-none ${({ isActive }) => (isActive ? "" : "")}`}
        >
          Feature
        </NavLink>
      </li>
      {currentUser && currentUser?.email ? (
        <>
          <li>
            <NavLink
              to={"/wishlist"}
              className={`navlinks dark:bg-gray-800 dark:sm:border-white dark:border-none ${({ isActive }) => (isActive ? "" : "")}`}
            >
              Wishlist
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => handleSignOut()}
              className="hover:bg-red-600
                hover:border-red-600 
                flex sm:hidden 
                dark:bg-gray-800 dark:border-white"
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link
            to={"/signin"}
            className="sm:hidden flex py-2 px-2 rounded-md
                hover:bg-red-600
                hover:border-red-600 
                dark:bg-gray-800 dark:border-white"
          >
            Sign in
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="sm:py-3 border border-b-gray-300 dark:border-gray-900 fixed z-10 w-full bg-white dark:bg-gray-700 top-0">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-[1] mt-0 w-52 h-screen p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="sm:text-3xl text-xl font-bold">
            Blog<span className="text-red-600">Sphere</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {currentUser && currentUser?.email ? (
            <>
              <div
                className="me-2 tooltip tooltip-bottom cursor-pointer"
                data-tip={currentUser?.displayName}
              >
                <div className="sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden border">
                  <img
                    src={currentUser?.photoURL}
                    alt="user image"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleSignOut()}
                  className="btn bg-red-500 
                text-white 
                hover:bg-red-600
                hover:border-red-600 
                sm:flex hidden"
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/signin"}
                className="sm:btn sm:flex hidden sm:bg-red-500  
                sm:text-white 
                hover:bg-red-600
                hover:border-red-600 "
              >
                Sign in
              </Link>
              <Link
                to={"/signup"}
                className="sm:btn py-2 px-2 rounded-md ms-2 sm:bg-white bg-red-500 
              sm:text-red-500 text-white border border-red-500
              hover:bg-red-600 hover:text-white"
              >
                Register
              </Link>
            </>
          )}
          <div>
            <button onClick={()=> theme === "dark" ? setTheme("light") : setTheme("dark")} 
            className="text-2xl p-3 ms-2 border rounded-full bg-gray-800 text-white bg-white">
              {
                theme === "dark" ? <FaSun /> : <FaRegMoon />
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
