import React from 'react';
import FoodCart from '../../Components/FoodCart/FoodCart';

const ShopTab = ({item}) => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-1 gap-10">
              {item?.map((itm, index) => (
                <FoodCart key={index} item={itm}></FoodCart>
              ))}
            </div>
        </div>
    );
};

export default ShopTab;