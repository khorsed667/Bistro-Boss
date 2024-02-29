import {
  faBagShopping,
  faBars,
  faBookBookmark,
  faBookmark,
  faCalendarDays,
  faCartShopping,
  faComment,
  faHouse,
  faListCheck,
  faMessage,
  faSpoon,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProviders";

const Dashboard = () => {

  // const {user} = useContext(AuthContext);
  // console.log(user.email);

  const [usr] = useUser();
  // const adminUser = usr.find(user => user.role === 'admin');
  // console.log(adminUser);
  // const isAdmin = user.email == adminUser.email;
  // console.log(isAdmin);

  const isAdmin = usr?.role;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-slate-100 items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn bg-gradient-to-r from-[#835d23] to-[#b3802f] text-white mt-5 mx-auto lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side lg:bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="my-3">
          <p className="text-2xl font-bold text-center  tracking-widest font-cinzel">
            Bistro Boss <br />
          </p>
          <p className="text-center text-lg font-bold font-cinzel tracking-widest">
            Restaurant
          </p>
        </div>
        <ul className="menu p-4 w-80 min-h-full text-base-content xsm:bg-[#D1A054] lg:bg-transparent">
          {/* Sidebar content here */}
          <nav id="sidebar">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to={"admin_home"}>
                    <FontAwesomeIcon icon={faHouse} /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"add_item"}>
                    <FontAwesomeIcon icon={faSpoon} /> Add Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"mycart"}>
                    <FontAwesomeIcon icon={faCartShopping} /> My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"manage_items"}>
                    <FontAwesomeIcon icon={faListCheck} /> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"manage_bookings"}>
                    <FontAwesomeIcon icon={faBookBookmark} /> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"all_users"}>
                    <FontAwesomeIcon icon={faUsers} /> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
                  <NavLink to={"payment_history"}>
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
                  <NavLink to={"bookings"}>
                    <FontAwesomeIcon icon={faBookmark} /> My Booking
                  </NavLink>
                </li>
              </>
            )}

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
              <NavLink to={"/shop/salad"}>
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
