import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCart = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { name, image, recipe, price, _id } = item;
  const [, refetch] = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handelAddToCart = () => {
    const cartItem = {
      itemId: _id,
      name,
      image,
      recipe,
      price,
      userEmail: user.email,
    };
    if (user.email) {
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
      .then(res =>res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          refetch()
          Swal.fire({
            icon: "success",
            title: "Item Successfully added to cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
    } else {
      Swal.fire({
        title: "Please login to add food.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(from, { replace: true });
        }
      });
    }
  };

  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <p className="bg-black text-white absolute top-4 px-4 right-4">
          $ {price}
        </p>
        <div className="card-body bg-slate-100 text-center">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions mx-auto">
            <button
              onClick={() => handelAddToCart(item)}
              className="btn border-b-4 text-main border-b-main btn-outline"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
