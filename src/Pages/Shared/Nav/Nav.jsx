import React, { useContext, useState } from "react";
import logo from "./../../../assets/home/logo.png";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../providers/AuthProviders";
import useCart from "../../../hooks/useCart";

const Nav = () => {
  const [open, setOpen] = useState(false);
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
        <p className="cursor-pointer font-bold mx-2">Home</p>
      </Link>
      <Link to={"/dashboard/home"}>
        <p className="cursor-pointer font-bold mx-2">Dashboard</p>
      </Link>
      <Link to={"/menu"}>
        <p className="cursor-pointer font-bold mx-2">Our Menu</p>
      </Link>
      <Link to={`/shop/${category || "salad"}`}>
        <p className="cursor-pointer font-bold mx-2">Our Shop</p>
      </Link>
      {/* <Link to={"/signup"}>
        <a className="font-bold mx-2">SignUp</a>
      </Link> */}
      {user ? (
        <>
          <p onClick={handelLogOut} className="cursor-pointer font-bold mx-2 md:px-5 md:py-2 md:bg-main md:text-white md:rounded-md md:hover:bg-yellow-400 duration-500">SignOut</p>
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <p className="cursor-pointer font-bold mx-2 md:px-5 md:py-2 md:bg-main md:text-white md:rounded-md md:hover:bg-yellow-400 duration-500">Login</p>
          </Link>
        </>
      )}
    </>
  );

  return (
    // <div className="navbar fixed z-10 xsm:p-0 md:p-3 bg-opacity-30 text-white bg-black">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         {navItems}
    //       </ul>
    //     </div>
    //     <div>
    //       <Link to={"/"}>
    //         <img className="md:w-[50px] xsm:w-[30px]" src={logo} alt="" />
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="navbar-center h-2 hidden lg:flex">
    //     <ul className="menu menu-horizontal text-white px-1">{navItems}</ul>
    //   </div>
    //   <div className="navbar-end cursor-pointer">
    //     <div className="relative mx-2">
    //       { cart?.length > 0 && <div className="badge absolute mt-[-15px] bg-main outline-none text-white left-5">
    //         {cart?.length || ""}
    //       </div>}
    //       <Link to={"/dashboard/mycart"}>
    //         <FontAwesomeIcon className="md:text-2xl xsm:text-xl me-5" icon={faCartShopping} />
    //       </Link>
    //     </div>
    //     <div>
    //       <FontAwesomeIcon className="md:text-2xl xsm:text-xl me-5" icon={faUser} />
    //     </div>
    //   </div>
    // </div>
    <div className="shadow-md z-10 w-full bg-white top-0 left-0">
      <div className="md:flex relative py-2 md:justify-between md:items-center mx-4">
        <div className="font-bold flex items-center text-2xl">
          <img className="md:w-[50px] xsm:w-[35px] m-0" src={logo} alt="" />
        </div>
        <div onClick={()=>setOpen(!open)} className="text-2xl absolute right-3 top-2 md:hidden">
          {
            open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />
          }
        </div> 
        <ul className={`md:font-bold md:flex md:items-center z-10 xsm:bg-white transition-all duration-500 ease-in absolute md:static ${!open ? 'top-20' : '-top-96'}`}>
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
