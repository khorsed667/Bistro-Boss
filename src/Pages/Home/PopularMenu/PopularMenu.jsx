import React from "react";
// import data from "../../../../public/menu.json";
import Headings from "../../../Components/Headings/Headings";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  
  const selectedMenu = menu.slice(0, 6);
  console.log(selectedMenu);

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
                <p className="font-bold text-main">{mnu.name}----------</p>
                <span className="w-1/3 xsm:text-xs md:text-base">
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
        <button className="mx-auto btn border-b-4 text-main border-b-main">
          View Full Manu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
