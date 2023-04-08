import React from "react";
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import logo from "../image/logoFood.avif";

const Navbar = () => {
  const ItemMenu = (
    <React.Fragment>
      <Link to='/'>
        <li className="text-xl font-semibold">HOME</li>
      </Link>
      <Link to='/booking'>
        <li className="text-xl font-semibold ml-3">BOOKING </li>
      </Link>
      <Link to='/contact'>
        <li className="text-xl font-semibold ml-3">CONTACT</li>
      </Link>
      <Link to='/about'>
        <li className="text-xl font-semibold ml-3">ABOUT </li>
      </Link>
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100 w-9/12 mx-auto mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {ItemMenu}
          </ul>
        </div>
        <Link>
          {" "}
          <img className="w-20 h-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{ItemMenu}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/booking'>
          <FaShoppingCart className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
