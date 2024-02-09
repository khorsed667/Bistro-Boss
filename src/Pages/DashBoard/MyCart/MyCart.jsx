import React from "react";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handelDelete = (itm) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${itm._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>My Cart | Bistro Boss</title>
      </Helmet>
      <div className="w-5/6 mx-auto bg-white m-5 p-5">
        <div className="flex justify-between items-center my-5">
          <p className="text-3xl uppercase font-cinzel">
            Total orders: {cart.length}
          </p>
          <p className="text-3xl uppercase font-cinzel">
            Total Amount: ${total}
          </p>
          <button className="btn-sm bg-main rounded-md text-white font-semibold">
            PAY
          </button>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label></label>
                  </th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart.map((itm, index) => (
                  <tr key={index}>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12">
                          <img src={itm.image} alt="Item image" />
                        </div>
                      </div>
                    </td>
                    <td>{itm.name}</td>
                    <td>${itm.price}</td>
                    <th>
                      <button
                        onClick={() => handelDelete(itm)}
                        className="btn bg-main text-white"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
