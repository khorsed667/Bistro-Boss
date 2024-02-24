import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import "./checkOutCard.css";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [tranjectionId, setTranjectonId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [cart, refetch] = useCart();
  const totalPrice = cart?.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(totalPrice.toFixed(2));

  useEffect(() => {
    if (price !== null && price !== undefined && price !== 0) {
      fetch("https://bistro-server-psi.vercel.app/create-payment-intent", {
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
    setProcessing(true);
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
    console.log("payment-intent: ", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTranjectonId(paymentIntent.id);
      // save cart info into server
      const payment = {
        email: user?.email,
        price,
        tranjectionId: paymentIntent.id,
        totalItems: cart.length,
        cartID: cart.map((item) => item._id),
        itemID: cart.map((iem) => iem.itemId),
        status: 'Order Pending....'
      };
      fetch("https://bistro-server-psi.vercel.app/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.deleteResult.deletedCount);
          if (data.insetResult.insertedId && data.deleteResult.deletedCount) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Payment Successful!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div>
      <form className=" mx-auto" onSubmit={handleSubmit}>
        <CardElement
          className="my-5 w-full"
          options={{
            style: {
              base: {
                fontSize: "32px",
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
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {!clientSecret && <p className="font-bold ms-24">Please Wait....</p>}
      {cardError && (
        <p className="text-red-600 ms-10 mt-6">{cardError.message}</p>
      )}
      {tranjectionId && (
        <p className="text-green-600 ms-10 font-bold mt-6">
          Payment recieved successfully and your Tranjection-Id :{" "}
          {tranjectionId}
        </p>
      )}
    </div>
  );
};

export default CheckOut;
