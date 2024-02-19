import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Components/Cover/Cover";
import shopCover from "./../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import ShopTab from "./ShopTab";
import { useParams } from "react-router-dom";

const Shop = () => {
  // For setting the right tab based on clicking the right menu

  const [menu] = useMenu();
  const { category } = useParams();
  const itemsCategory = ["salad", "pizza", "soup", "dessert", "drink"];
  const findItemsCategory = itemsCategory.indexOf(category);
  const [tabIndex, setTabIndex] = useState(findItemsCategory);

  // Filtering different menus from Menu

  const drinksItems = menu.filter((mnu) => mnu.category === "drinks");
  const dessertItems = menu.filter((mnu) => mnu.category === "dessert");
  const pizzaItems = menu.filter((mnu) => mnu.category === "pizza");
  const soupItems = menu.filter((mnu) => mnu.category === "soup");
  const saladItems = menu.filter((mnu) => mnu.category === "salad");

  return (
    <div>
      <Helmet>
        {" "}
        <title>Shop | Bistro Boss</title>{" "}
      </Helmet>
      <Cover
        img={shopCover}
        tittle={"Our Shop"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <div className="max-w-screen-xl mt-5 mx-auto">
        <div className="mx-2">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drink</Tab>
            </TabList>

            <TabPanel>
              <ShopTab item={saladItems}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab item={pizzaItems}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab item={soupItems}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab item={dessertItems}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab item={drinksItems}></ShopTab>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Shop;
