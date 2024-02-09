import React from "react";
import { Helmet } from "react-helmet";
import useMenu from "../../../hooks/useMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Headings from "../../../Components/Headings/Headings";

const ManageItems = () => {
  const [menu, refetch] = useMenu();

  // Delete item functionality
  const handelDeleteItem = (itm) => {
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
        fetch(`http://localhost:5000/menu/${itm._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
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
        <title>Manage Items | Bistro Boss</title>
      </Helmet>
      <Headings subHeading={'Hurry Up!!'} headings={'Manage all items'}></Headings>
      <div className="w-5/6 mx-auto bg-white m-5 p-5">
        <div className="py-3">
          <p className="font-cinzel text-2xl font-bold">
            Total items: {menu.length}
          </p>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="tex-white bg-[#D1A054]">
                <tr className="text-white">
                  <th></th>
                  <th>Item</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Upadte</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {menu.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="lg:w-12 w-8 lg:h-12 h-8 rounded-tl-3xl m-2 rounded-tr-3xl rounded-br-3xl"
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>$ {item.price}</td>
                    <td>
                      <Link to={`/dashboard/update_item/${item._id}`}>
                        <button className="btn bg-main text-white">
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                      </Link>
                    </td>
                    <th>
                      <button
                        onClick={() => handelDeleteItem(item)}
                        className="btn bg-red-600 text-white"
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

export default ManageItems;
