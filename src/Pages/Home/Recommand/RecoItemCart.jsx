import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProviders';
import useCart from '../../../hooks/useCart';
import { useLocation, useNavigate } from 'react-router-dom';

const RecoItemCart = ({item}) => {
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
        fetch("https://bistro-boss-server-9677.onrender.com/cart", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cartItem),
        })
        .then(res =>res.json())
        .then((result) => {
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
        <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={item.image} alt="Shoes" />
      </figure>
      <div className="card-body bg-slate-100 text-center">
        <h2 className="text-2xl font-semibold">{item.name}</h2>
        <p className="text-xs">{item.recipe}</p>
        <div className="card-actions mx-auto">
          {/* <button className="btn border-b-4 text-main border-b-main btn-outline">
                    Add to Cart
                  </button> */}
          <div onClick={() => handelAddToCart(item)} className="px-5 py-2 bg-white cursor-pointer hover:bg-[#1F2937] transition-all duration-700 text-main rounded-lg border-b-4 font-semibold hover:border-b-0 border-main my-3">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
    );
};

export default RecoItemCart;