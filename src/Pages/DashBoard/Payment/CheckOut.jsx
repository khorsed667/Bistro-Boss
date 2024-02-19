import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useMenu from "../../../hooks/useMenu";
import { AuthContext } from "../../../providers/AuthProviders";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [menu] = useMenu();
  const totalPrice = menu.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(totalPrice.toFixed(2));

  useEffect(() => {
    if (price !== null && price !== undefined && price !== 0) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error);
    } else {
      console.log("payment-method: ", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "annonymous email",
            name: user?.displayName || "annonymous name",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError);
    }
    console.log(paymentIntent);
  };

  return (
    <div>
      <form className="w-5/6 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          className="my-5"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn bg-main my-5 btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {!clientSecret && <p className="font-bold ms-24">Please Wait....</p>}
      {cardError && (
        <p className="text-red-600 ms-10 mt-6">{cardError.message}</p>
      )}
    </div>
  );
};

export default CheckOut;
