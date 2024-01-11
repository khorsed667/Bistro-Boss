import React from "react";
import data from "./../../../../public/menu.json";
import Headings from "../../../Components/Headings/Headings";

const Recommand = () => {
  const recommandedItems = data.slice(1, 4);

  return (
    <div className=" max-w-screen-xl mx-auto ">
      <Headings subHeading={"Should try"} headings={"Chafe Recommanded"}></Headings>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-1 gap-10">
        {recommandedItems.map((reco, index) => (
          <div key={index}>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <img className="w-full" src={reco.image} alt="Shoes" />
              </figure>
              <div className="card-body bg-slate-100 text-center">
                <h2 className="text-2xl font-semibold">{reco.name}</h2>
                <p>{reco.recipe}</p>
                <div className="card-actions mx-auto">
                  <button className="btn border-b-4 text-main border-b-main btn-outline">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommand;
