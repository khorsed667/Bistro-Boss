import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { handelGoogleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handelGoogleSignUp = () => {
    handelGoogleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        navigate(from, { replace: true });
        Swal.fire("Welcome to Bistro Boss");
        console.log(loggedUser);
        const userObj = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("https://bistro-boss-server-9677.onrender.com/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userObj),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log(data);
            }
          });

        // Swal.fire("Welcome to Bistro Boss");
        // navigate(from, { replace: true });
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="mx-auto w-full">
      <p className="text-center my-2">or Sign in with</p>
      <div className="flex justify-between items-center my-3 mx-11 font-[#F1F2F4]">
        <Link className="border-black border-2 p-2 w-[40px] h-[40px] rounded-full">
          <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
        </Link>
        <Link
          onClick={handelGoogleSignUp}
          className="border-black border-2 p-2 w-[40px] h-[40px] rounded-full"
        >
          <FontAwesomeIcon className="text-xl" icon={faGoogle} />
        </Link>
        <Link className="border-black border-2 p-2 w-[40px] h-[40px] rounded-full">
          <FontAwesomeIcon className="text-xl" icon={faFacebook} />
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
