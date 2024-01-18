import React from "react";
import MenuRow from "../../Components/MenuRow/MenuRow";
import Cover from "../../Components/Cover/Cover";
import CommonButton from "../../Components/CommonButton/CommonButton";
import { Link } from "react-router-dom";

const MenuCategory = ({img, tittle, item}) => {
  return (
    <div>
      <Cover
        img={img}
        tittle={tittle}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure eligendi corporis consequatur illum quae? Modi alias expedita illum ad!"
        }
      ></Cover>
      <div className="md:grid md:grid-cols-2 my-12 max-w-screen-xl mx-auto">
        {item?.map((pop, index) => (
          <MenuRow key={index} segment={pop}></MenuRow>
        ))}
      </div>
      <Link to={`/shop/${tittle}`}><CommonButton ButtonName={"Order Your Favourite Food"}></CommonButton></Link>
    </div>
  );
};

export default MenuCategory;
