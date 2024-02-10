import React from "react";
import { Helmet } from "react-helmet";
import Headings from "../../../Components/Headings/Headings";
import Swal from "sweetalert2";
import useMenu from "../../../hooks/useMenu";

const Reservation = () => {
  const [, refetch] = useMenu();

  const handelReservation = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const time = form.time.value;
    const guest = form.guest.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const reservationData = {
      date: date,
      time: time,
      guest: guest,
      name: name,
      phone: phone,
      email: email,
    };
    fetch("http://localhost:5000/reservation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reservationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Your reservation request send successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Reservation | Bistro Boss</title>
      </Helmet>
      <Headings subHeading={"Reservation"} headings={"book a table"}></Headings>
      <div>
        <form
          action=""
          className="flex flex-col justify-center"
          onSubmit={handelReservation}
        >
          <div className="grid grid-cols-3 gap-5 ms-10">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">Date*</span>
              </div>
              <input
                type="date"
                name="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">Time*</span>
              </div>
              <input
                type="time"
                name="time"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">Guest*</span>
              </div>
              <select
                defaultValue={1}
                name="guest"
                className="input input-bordered"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Person</option>
                <option value="3">3 Person</option>
                <option value="4">4 Person</option>
                <option value="5">5 Person</option>
                <option value="6">6 Person</option>
                <option value="7">7 Person</option>
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">Name*</span>
              </div>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">Phone*</span>
              </div>
              <input
                type="Phone"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">Email*</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <input
            type="submit"
            className="btn bg-secoundary text-white mt-5 mx-auto w-[160px]"
            value="Book A Table"
          />
        </form>
      </div>
    </div>
  );
};

export default Reservation;
