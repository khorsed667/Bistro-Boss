import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import useMenu from "../../../hooks/useMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCartShopping,
  faHouse,
  faPhone,
  faStar,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../providers/AuthProviders";
import useCart from "../../../hooks/useCart";
import useReservation from "../../../hooks/useReservation";

const UserHome = () => {
  const [menu, refetch] = useMenu();
  const totalMenu = menu.length;
  const { user } = useContext(AuthContext);
  const [cart] = useCart();
  const [reservation] = useReservation();

  return (
    <div className="w-full font-cinzel">
      <Helmet>
        <title>User Home | Bostro Boss</title>
      </Helmet>
      <div className="w-5/6 mx-auto">
        <p className="lg:text-3xl xsm:text-2xl xsm:mt-5 md:mt-0 font-bold">WelCome to bistro Boss</p>
        <div className="grid md:grid-cols-3 xsm:grid-cols-1 xsm:gap-5 lg:gap-20 mt-5">
          <div className="flex text-white items-center justify-center bg-gradient-to-r from-[#bb35f5] to-[#fad7fe] rounded-xl p-5">
            <div>
              <FontAwesomeIcon className="lg:text-3xl xsm:text-2xl" icon={faWallet} />
            </div>
            <div className="text-xl">
              <p className="ms-5 lg:text-3xl xsm:text-2xl font-bold">{totalMenu + 50}</p>
              <p className="ms-5">Menu</p>
            </div>
          </div>
          <div className="flex text-white items-center justify-center bg-gradient-to-r from-[#d3a256] to-[#fce7be] rounded-xl p-5">
            <div>
              <FontAwesomeIcon className="lg:text-3xl xsm:text-2xl" icon={faHouse} />
            </div>
            <div className="text-xl">
              <p className="ms-5 lg:text-3xl xsm:text-2xl font-bold">{totalMenu + 34}</p>
              <p className="ms-5">Shop</p>
            </div>
          </div>
          <div className="flex text-white items-center justify-center bg-gradient-to-r from-[#fd4d83] to-[#fdcae6] rounded-xl p-5">
            <div>
              <FontAwesomeIcon className="lg:text-3xl xsm:text-2xl" icon={faPhone} />
            </div>
            <div className="text-xl">
              <p className="ms-5 lg:text-3xl xsm:text-2xl font-bold">3</p>
              <p className="ms-5">Contact</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto mt-14 flex xsm:flex-col md:flex-row">
        <div className="md:w-1/2 xsm:w-full bg-[#FFEDD5] flex flex-col justify-center p-12 items-center">
          <div className="w-[130px] h-[130px] rounded-full bg-white border-2 border-[#D1A054]"></div>
          <p className="lg:text-3xl xsm:text-2xl font-bold pt-3">
            {user?.displayName || "Awlad Hossain"}
          </p>
        </div>
        <div className="md:w-1/2 xsm:w-full bg-[#FEF9C3] uppercase flex flex-col justify-start p-10 border-l-4 border-[#D1A054]">
          <p className="lg:text-3xl xsm:text-2xl font-bold">Your Activities</p>
          <div className="flex text-[#0088FE] items-center my-2 font-bold">
            <FontAwesomeIcon icon={faCartShopping} />
            <p className="ms-4">Your Order : {cart?.length || 0}</p>
          </div>
          <div className="flex text-[#00C4A1] items-center my-2 font-bold">
            <FontAwesomeIcon icon={faStar} />
            <p className="ms-4">Your Review: 2</p>
          </div>
          <div className="flex text-[#FFBB28] items-center my-2 font-bold">
            <FontAwesomeIcon icon={faCalendarDays} />
            <p className="ms-4">Your Reservation: {reservation?.length || 0}</p>
          </div>
          <div className="flex text-[#FF8042] items-center my-2 font-bold">
            <FontAwesomeIcon icon={faWallet} />
            <p className="ms-4">Payment Completed: 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
