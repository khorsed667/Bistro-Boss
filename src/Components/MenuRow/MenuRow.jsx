import React from 'react';

const MenuRow = ({segment}) => {
    return (
        <div className="w-full me-2">
            <div className="flex items-start my-2 justify-center w-full">
              <div>
                <img
                  className="lg:w-20 w-12 lg:h-20 h-12 rounded-tl-3xl m-2 rounded-tr-3xl rounded-br-3xl"
                  src={segment.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
              <div className="xsm:w-[280px] sm:w-[350px] xsm:mx-2 md:mx-5 lg:mx-10">
                <p className="font-bold font-cinzel text-main">{segment.name}------</p>
                <span className="w-1/3 xsm:text-xs md:text-base">
                  {segment.recipe}
                </span>
              </div>
              <div className='me-1'>
                <p className="block text-main">$ {segment.price}</p>
              </div>
            </div>
          </div>
    );
};

export default MenuRow;