import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { AiOutlineUser } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";




const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const emailUs = (user?.email);
  const userName = (user?.displayName);
  const displayPic = (user?.photoURL);
  const navLinks = (
    <>
      <li className="font-semibold uppercase">
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li className="font-semibold uppercase">
        <NavLink to="/allProducts">ALL Food Items</NavLink>
      </li>
      <li className="font-semibold uppercase">
        <NavLink to="/blog">Blog</NavLink>
      </li> */}
    </>
  );
  const handleSignOut = () => {
    userLogOut()
      .then()
      .catch()
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link to='/' className="normal-case text-xl">
            <a className="text-3xl font-extrabold extra" href="">pti.</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal mx-20">
            <FaSearch className="text-orange-400 text-2xl ml-2 mt-2 absolute" />
            <input type="text" placeholder="Search Your Food" className="input input-bordered h-9 w-96 text-justify max-w-screen-xl mr-2" />
            <li>
              <details>
                <summary>MENU</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="bg-orange-500 p-2 rounded-3xl">
            <AiOutlineUser className="text-3xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;