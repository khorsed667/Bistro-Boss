import React from "react";
import logo from "./../../../assets/home/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const navItems = (
    <>
      <Link to={"/"}>
        <a className="font-bold mx-2 text-white">Home</a>
      </Link>
      <Link to={"/"}>
        <a className="font-bold mx-2 text-white">Contact Us</a>
      </Link>
      <Link to={"/"}>
        <a className="font-bold mx-2 text-white">Dashboard</a>
      </Link>
      <Link to={"/"}>
        <a className="font-bold mx-2 text-white">Our Menu</a>
      </Link>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div><img className="w-[50px]" src={logo} alt="" /></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end cursor-pointer">
        <FontAwesomeIcon className="text-2xl me-5" icon={faUser} />
      </div>
    </div>
  );
};

export default Nav;
