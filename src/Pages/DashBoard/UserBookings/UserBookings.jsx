import React from "react";
import { Helmet } from "react-helmet";
import useReservation from "../../../hooks/useReservation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Headings from "../../../Components/Headings/Headings";

const UserBookings = () => {
  const [reservation, refetch] = useReservation();
  const total = reservation.reduce((sum, item) => item.price + sum, 0);

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
        fetch(`https://bistro-server-psi.vercel.app/reservation/${itm._id}`, {
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
        <title>My Bookings | Bistro Boss</title>
      </Helmet>
      <Headings subHeading={'Excillent Ambience'} headings={'my bookings'}></Headings>
      <div className="w-5/6 mx-auto bg-white m-5 p-5">
        <div className="flex justify-between items-center my-5">
          <p className="text-3xl uppercase font-cinzel">
            Total bookings: {reservation.length}
          </p>
          <p className="text-3xl uppercase font-cinzel">
            Total Amount: ${total}
          </p>
          <button className="btn-sm bg-[#D1A054] rounded-md text-white font-semibold">
            PAY
          </button>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054] text-center">
                <tr>
                  <th>
                    <label></label>
                  </th>
                  <th>Author Name</th>
                  <th>Time</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/* row 1 */}
                {reservation.map((itm, index) => (
                  <tr key={index}>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <p>{itm.name}</p>
                    </td>
                    <td>{itm.time}</td>
                    <td>${itm.price}</td>
                    <th>
                      <button
                        onClick={() => handelDelete(itm)}
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

export default UserBookings;
