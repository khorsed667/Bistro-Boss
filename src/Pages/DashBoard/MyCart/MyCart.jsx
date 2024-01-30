import React from 'react';
import useCart from '../../../hooks/useCart';
import { Helmet } from 'react-helmet';

const MyCart = () => {

    const [cart] = useCart();
    var result = cart.reduce(function (a, b) { return a + b.price; }, 0);

    return (
        <div>
            <Helmet><title>My Cart | Bistro Boss</title></Helmet>
            <p className='text-3xl uppercase font-cinzel'>Total orders: {cart.length}</p>
            <p className='text-3xl uppercase font-cinzel'>Total Amount: ${result}</p>
            <button className='btn-sm bg-main rounded-md text-white font-semibold'>PAY</button>
        </div>
    );
};

export default MyCart;