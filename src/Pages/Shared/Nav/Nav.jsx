import React, { useContext } from "react";
import logo from "./../../../assets/home/logo.png";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../providers/AuthProviders";
import useCart from "../../../hooks/useCart";

const Nav = () => {
  const { category } = useParams();
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handelLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <Link to={"/"}>
        <p className="font-bold mx-2">Home</p>
      </Link>
      <Link to={"/dashboard/home"}>
        <p className="font-bold mx-2">Dashboard</p>
      </Link>
      <Link to={"/menu"}>
        <p className="font-bold mx-2">Our Menu</p>
      </Link>
      <Link to={`/shop/${category || "salad"}`}>
        <p className="font-bold mx-2">Our Shop</p>
      </Link>
      {/* <Link to={"/signup"}>
        <a className="font-bold mx-2">SignUp</a>
      </Link> */}
      {user ? (
        <>
          <button onClick={handelLogOut}>LogOut</button>
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <p className="font-bold mx-2">Login</p>
          </Link>
        </>
      )}
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
            className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div>
          <Link to={'/'}>
          <img className="w-[50px]" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white px-1">{navItems}</ul>
      </div>
      <div className="navbar-end cursor-pointer">
        <div className="relative mx-2">
          <div className="badge absolute mt-[-15px] bg-main outline-none text-white left-5">
            {cart?.length || ''}
          </div>
          <Link to={'/dashboard/mycart'}><FontAwesomeIcon className="text-2xl me-5" icon={faCartShopping} /></Link>
        </div>
        <div>
          <FontAwesomeIcon className="text-2xl me-5" icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
