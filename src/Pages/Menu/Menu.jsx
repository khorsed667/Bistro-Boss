import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Components/Cover/Cover";
import CoverImg from "./../../../src/assets/menu/banner.jpg";
import DessertImg from "./../../../src/assets/menu/dessert-bg.jpeg";
import PizzaImg from "./../../../src/assets/menu/pizza-bg.jpg";
import SaladsImg from "./../../../src/assets/menu/salad-bg.jpg";
import SoupsImg from "./../../../src/assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import Headings from "../../Components/Headings/Headings";
import MenuRow from "../../Components/MenuRow/MenuRow";
import CommonButton from "../../Components/CommonButton/CommonButton";

const Menu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((mnu) => mnu.category === "popular");
  const dessertItems = menu.filter((mnu) => mnu.category === "dessert");
  const dessertsItems = dessertItems.slice(0, 6);
  const pizzaItems = menu.filter((mnu) => mnu.category === "pizza");
  const pizzasItems = pizzaItems.slice(0, 6);
  const soupItems = menu.filter((mnu) => mnu.category === "soup");
  const soupsItems = soupItems.slice(0, 6);
  const saladItems = menu.filter((mnu) => mnu.category === "salad");
  const saladsItems = saladItems.slice(0, 6);

  return (
    <div className="w-full">
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <Cover
        img={CoverImg}
        tittle={"Our Menu"}
        description={"Would you like to try a disk?"}
      ></Cover>
      <div className="max-w-screen-xl mx-auto">
        <Headings
          subHeading={"Don't miss"}
          headings={"todays offer"}
        ></Headings>
        <div className="md:grid md:grid-cols-2 my-12">
          {popularItems?.map((pop, index) => (
            <MenuRow key={index} segment={pop}></MenuRow>
          ))}
        </div>
        <CommonButton ButtonName={"Order Your Favourite Food"}></CommonButton>
      </div>

      <div>
        <Cover
          img={DessertImg}
          tittle={"DESSERTS"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure eligendi corporis consequatur illum quae? Modi alias expedita illum ad!"
          }
        ></Cover>
        <div className="md:grid md:grid-cols-2 my-12 max-w-screen-xl mx-auto">
          {dessertsItems?.map((pop, index) => (
            <MenuRow key={index} segment={pop}></MenuRow>
          ))}
        </div>
        <CommonButton ButtonName={"Order Your Favourite Food"}></CommonButton>
      </div>
      <div>
        <Cover
          img={PizzaImg}
          tittle={"Pizza"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure eligendi corporis consequatur illum quae? Modi alias expedita illum ad!"
          }
        ></Cover>
        <div className="md:grid md:grid-cols-2 my-12 max-w-screen-xl mx-auto">
          {pizzasItems?.map((pop, index) => (
            <MenuRow key={index} segment={pop}></MenuRow>
          ))}
        </div>
        <CommonButton ButtonName={"Order Your Favourite Food"}></CommonButton>
      </div>
      <div>
        <Cover
          img={SaladsImg}
          tittle={"SALADS"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure eligendi corporis consequatur illum quae? Modi alias expedita illum ad!"
          }
        ></Cover>
        <div className="md:grid md:grid-cols-2 my-12 max-w-screen-xl mx-auto">
          {saladsItems?.map((pop, index) => (
            <MenuRow key={index} segment={pop}></MenuRow>
          ))}
        </div>
        <CommonButton ButtonName={"Order Your Favourite Food"}></CommonButton>
      </div>
      <div>
        <Cover
          img={SoupsImg}
          tittle={"SOUPS"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure eligendi corporis consequatur illum quae? Modi alias expedita illum ad!"
          }
        ></Cover>
        <div className="md:grid md:grid-cols-2 my-12 max-w-screen-xl mx-auto">
          {soupsItems?.map((pop, index) => (
            <MenuRow key={index} segment={pop}></MenuRow>
          ))}
        </div>
        <CommonButton ButtonName={"Order Your Favourite Food"}></CommonButton>
      </div>
    </div>
  );
};

export default Menu;
