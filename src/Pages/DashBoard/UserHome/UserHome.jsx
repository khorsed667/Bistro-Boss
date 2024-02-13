import React from "react";
import { Helmet } from "react-helmet";
import useMenu from "../../../hooks/useMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone, faWallet } from "@fortawesome/free-solid-svg-icons";

const UserHome = () => {
  const [menu, refetch] = useMenu();
  const totalMenu = menu.length;

  return (
    <div className="w-full font-cinzel">
      <Helmet>
        <title>User Home | Bostro Boss</title>
      </Helmet>
      <div className="w-5/6 mx-auto">
        <p className="text-3xl font-bold">WelCome to bistro Boss</p>
        <div className="grid grid-cols-3 gap-20 mt-5">
          <div className="flex text-white items-center justify-center bg-gradient-to-r from-[#bb35f5] to-[#fad7fe] rounded-xl p-5">
            <div>
              <FontAwesomeIcon className="text-3xl" icon={faWallet} />
            </div>
            <div className="text-xl">
              <p className="ms-5 text-3xl font-bold">{totalMenu + 50}</p>
              <p className="ms-5">Menu</p>
            </div>
          </div>
          <div className="flex text-white items-center justify-center bg-gradient-to-r from-[#d3a256] to-[#fce7be] rounded-xl p-5">
            <div>
              <FontAwesomeIcon className="text-3xl" icon={faHouse} />
            </div>
            <div className="text-xl">
              <p className="ms-5 text-3xl font-bold">{totalMenu + 34}</p>
              <p className="ms-5">Shop</p>
            </div>
          </div>
          <div className="flex text-white items-center justify-center bg-gradient-to-r from-[#fd4d83] to-[#fdcae6] rounded-xl p-5">
            <div>
            <FontAwesomeIcon className="text-3xl" icon={faPhone} />
            </div>
            <div className="text-xl">
              <p className="ms-5 text-3xl font-bold">3</p>
              <p className="ms-5">Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
