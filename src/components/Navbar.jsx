import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import AuthContainer from "../authContext/Auth/AuthContainer";
// import { toast } from "react-toastify";

function Navbar() {
  const { currentUser, handleSignOut } = AuthContainer();

  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={`navlinks ${({ isActive }) => (isActive ? "active" : "")}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/all-blogs"}
          className={`navlinks ${({ isActive }) => (isActive ? "" : "")}`}
        >
          All Blogs
        </NavLink>
      </li>
      {currentUser && currentUser?.email && (
        <li>
          <NavLink
            to={"/add-blog"}
            className={`navlinks ${({ isActive }) => (isActive ? "" : "")}`}
          >
            Add Blog
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/feature"}
          className={`navlinks ${({ isActive }) => (isActive ? "" : "")}`}
        >
          Feature
        </NavLink>
      </li>
      {currentUser && currentUser?.email && (
        <li>
          <NavLink
            to={"/wishlist"}
            className={`navlinks ${({ isActive }) => (isActive ? "" : "")}`}
          >
            Wishlist
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="py-4 border border-b-gray-300">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-3xl font-bold">
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
                <div className="w-12 h-12 rounded-full overflow-hidden border">
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
                hover:border-red-600 "
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/signin"}
                className="btn bg-red-500 
                text-white 
                hover:bg-red-600
                hover:border-red-600 "
              >
                Sign in
              </Link>
              <Link
                to={"/signup"}
                className="btn ms-2 bg-white
              text-red-500 border border-red-500
              hover:bg-red-600 hover:text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
