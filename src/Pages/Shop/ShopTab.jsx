import React, { useState } from "react";
import FoodCart from "../../Components/FoodCart/FoodCart";
import Paginaton from "../../Components/Pagination/Paginaton";

const ShopTab = ({ item }) => {
  // Pagination Calculation for Menu

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const lastItemIndex = currentPage * itemsPerPage;
  const startItemIndex = lastItemIndex - itemsPerPage;
  const showItems = item.slice(startItemIndex, lastItemIndex);

  return (
    <div className="flex flex-col items-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-1 gap-10">
        {showItems?.map((itm, index) => (
          <FoodCart key={index} item={itm}></FoodCart>
        ))}
      </div>
      <Paginaton
        item={item}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      ></Paginaton>
    </div>
  );
};

export default ShopTab;
