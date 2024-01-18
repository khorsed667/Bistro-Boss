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
import { Link } from "react-router-dom";
import MenuCategory from "./MenuCategory";

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

  console.log(saladsItems);

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
      <Headings subHeading={"Don't miss"} headings={"todays offer"}></Headings>
      <div className="max-w-screen-xl mx-auto">
        <div className="md:grid md:grid-cols-2 my-12">
          {popularItems?.map((pop, index) => (
            <MenuRow key={index} segment={pop}></MenuRow>
          ))}
        </div>
        <Link to={"/shop/salad"}>
          <CommonButton ButtonName={"Order Your Favourite Food"}></CommonButton>
        </Link>
      </div>

      <div>
        <MenuCategory
          img={DessertImg}
          item={dessertsItems}
          tittle={"dessert"}
        ></MenuCategory>
      </div>
      <div>
        <MenuCategory
          img={PizzaImg}
          item={pizzasItems}
          tittle={"pizza"}
        ></MenuCategory>
      </div>
      <div>
        <MenuCategory
          img={SaladsImg}
          item={saladsItems}
          tittle={"salad"}
        ></MenuCategory>
      </div>
      <div>
        <MenuCategory
          img={SoupsImg}
          item={soupsItems}
          tittle={"soup"}
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
