import {
  faBagShopping,
  faBars,
  faBookmark,
  faCalendarDays,
  faCartShopping,
  faComment,
  faHouse,
  faMessage,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="my-3">
          <p className="text-2xl font-bold text-center  tracking-widest font-cinzel">
            Bistro Boss <br />
          </p>
          <p className="text-center text-lg font-bold font-cinzel tracking-widest">Restaurant</p>
        </div>
        <ul className="menu p-4 w-80 min-h-full text-base-content">
          {/* Sidebar content here */}
          <nav id="sidebar">
            <li>
              <NavLink to={"home"}>
                <FontAwesomeIcon icon={faHouse} /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"reservation"}>
                <FontAwesomeIcon icon={faCalendarDays} /> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to={"history"}>
                <FontAwesomeIcon icon={faWallet} /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to={"mycart"}>
                <FontAwesomeIcon icon={faCartShopping} /> My Cart
              </NavLink>
            </li>
            <li>
              <NavLink to={"review"}>
                <FontAwesomeIcon icon={faComment} /> Add review
              </NavLink>
            </li>
            <li>
              <NavLink to={"booking"}>
                <FontAwesomeIcon icon={faBookmark} /> My Booking
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to={"/"}>
                <FontAwesomeIcon icon={faHouse} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>
                <FontAwesomeIcon icon={faBars} /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>
                <FontAwesomeIcon icon={faBagShopping} /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <FontAwesomeIcon icon={faMessage} /> Contact
              </NavLink>
            </li>
          </nav>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
