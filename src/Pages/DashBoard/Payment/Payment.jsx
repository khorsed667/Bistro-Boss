import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOut from "./CheckOut";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_secret_key}`);
console.log(import.meta.env.VITE_Payment_secret_key);
const Payment = () => {
  const [cart] = useCart();
  const totalPrice = cart?.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat( 100 * totalPrice.toFixed(2));

  return (
    <div className="w-full">
      <p className="font-cinzel font-bold text-3xl mx-auto text-center my-5 w-1/6">
        PAYMENT
      </p>
      <p className="mx-auto w-1/5 text-center font-bold">Payable Amount: {price} cents</p>
      <Elements stripe={stripePromise}>
        <CheckOut></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
