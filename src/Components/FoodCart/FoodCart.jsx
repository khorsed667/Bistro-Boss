import React from 'react';

const FoodCart = ({item}) => {

    const {name, image, recipe, price} =item

    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <img className="w-full" src={image} alt="Shoes" />
              </figure>
              <p className='bg-black text-white absolute top-4 px-4 right-4'>$ {price}</p>
              <div className="card-body bg-slate-100 text-center">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions mx-auto">
                  <button className="btn border-b-4 text-main border-b-main btn-outline">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default FoodCart;