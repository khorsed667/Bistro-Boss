import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOut from "./CheckOut";
import useMenu from "../../../hooks/useMenu";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_secret_key}`);
console.log(import.meta.env.VITE_Payment_secret_key);
const Payment = () => {
  const [menu] = useMenu();
  const totalPrice = menu.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(totalPrice.toFixed(2));

  return (
    <div className="w-full">
      <p>Payment History Loading....</p>
      <Elements stripe={stripePromise}>
        <CheckOut price={price}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
