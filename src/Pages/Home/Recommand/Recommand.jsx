import React from "react";
import data from "./../../../../public/menu.json";
import Headings from "../../../Components/Headings/Headings";
import RecoItemCart from "./RecoItemCart";

const Recommand = () => {
  const recommandedItems = data.slice(1, 4);

  

  return (
    <div className=" max-w-screen-xl mx-auto ">
      <Headings
        subHeading={"Should try"}
        headings={"Chafe Recommanded"}
      ></Headings>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-1 gap-10 mx-2">
        {recommandedItems.map((reco, index) => (
          <RecoItemCart key={index} item={reco}></RecoItemCart>
        ))}
      </div>
    </div>
  );
};

export default Recommand;
