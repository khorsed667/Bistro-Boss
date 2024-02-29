import React from "react";
// import data from "../../../../public/menu.json";
import Headings from "../../../Components/Headings/Headings";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();

  const selectedMenu = menu.slice(0, 6);

  return (
    <div className=" max-w-screen-xl mx-auto">
      <Headings
        subHeading={"Check it out"}
        headings={"From Our Menu"}
      ></Headings>
      <div className="md:grid md:grid-cols-2">
        {selectedMenu?.map((mnu, index) => (
          <div className=" w-full" key={index}>
            <div className="flex items-start my-2 justify-start w-full">
              <div>
                <img
                  className="lg:w-20 w-12 lg:h-20 h-12 rounded-tl-3xl m-2 rounded-tr-3xl rounded-br-3xl"
                  src={mnu.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
              <div className="xsm:w-[280px] sm:w-[350px] xsm:mx-2 md:mx-5 lg:mx-10">
                <p className="font-bold font-cinzel text-main">
                  {mnu.name}----------
                </p>
                <span className="w-1/3 xsm:text-xs md:text-sm">
                  {mnu.recipe}
                </span>
              </div>
              <div>
                <p className="block text-main">$ {mnu.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <Link to={'/menu'}>
          {/* <button className="btn border-b-2 text-main border-b-main">
            View Full Manu
          </button> */}
          <div className="px-5 py-2 bg-white hover:bg-[#1F2937] text-[#1F2937] rounded-lg border-b-4 hover:border-b-0 transition-all duration-700 font-semibold hover:text-white border-[#1F2937] my-3">View Full Menu</div>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
