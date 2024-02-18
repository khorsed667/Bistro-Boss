import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_secret_key}`);
console.log(import.meta.env.VITE_Payment_secret_key);
const Payment = () => {
  return (
    <div className="w-full">
      <p>Payment History Loading....</p>
      <Elements stripe={stripePromise}>
        <CheckOut></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
