import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Headings from "../../../Components/Headings/Headings";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const UserReview = () => {
  const { user } = useContext(AuthContext);
  // const [, refetch] = useCart();

  const [rating, setRating] = useState(0);
  // TODO: Meake the rating component dynamic
  const handleRatingClick = (value) => {
    setRating(value);
    console.log(value);
  };

  const handelReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const thinking = form.thinking.value;
    const sugession = form.sugession.value;
    const review = {
      email: user?.email,
      name: user?.displayName ? user.displayName : 'TONNY CRUSE',
      thinking: thinking,
      sugession: sugession,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Thanks for your valuable response",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Review | Bistro Boss</title>
      </Helmet>
      <Headings
        subHeading={"Sharing is Caring"}
        headings={"Add a review"}
      ></Headings>
      <div className="w-5/6 mx-auto flex justify-cente flex-col bg-white py-16">
        <p className="text-3xl my-4 font-cinzel text-center font-bold">
          RATE US!
        </p>
        <div>
          <Rating
            className="mx-auto my-3"
            style={{ maxWidth: 180 }}
            value={rating}
            onClick={handleRatingClick}
          />
        </div>
        <form onSubmit={handelReview} action="">
          <label className="form-control w-2/3 mx-auto my-8">
            <div className="label">
              <span className="label-text font-semibold">
                What is your thinking about this project?
              </span>
            </div>
            <input
              type="text"
              name="thinking"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-2/3 mx-auto my-4">
            <div className="label">
              <span className="label-text font-semibold">
                Do you have any sugession to me?
              </span>
            </div>
            <input
              type="text"
              name="sugession"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <input
            type="submit"
            value="Send Review"
            className="btn bg-gradient-to-r from-[#835d23] to-[#b3802f] text-white my-3 ms-40"
          />
        </form>
      </div>
    </div>
  );
};

export default UserReview;
