import React, { useContext, useState } from "react";
import authenticationSidePhoto from "./../../assets/others/authentication2.png";
import background from "./../../assets/others/authentication.png";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [progression, setProgression] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setProgression(true);
    signUp(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        const userObj = { name: data.name, email: data.email };
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
              setProgression(false);
              Swal.fire("Welcome to Bistro Boss");
              navigate(from, { replace: true });
            }
          });
      })
      .catch((error) => console.log(error));
  };

  //   const handelSignUp = (event) => {
  //     event.preventDefault();
  //     const form = event.target;
  //     // const name = form.name.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     signUp(email, password)
  //       .then((result) => {
  //         console.log(result.user);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  return (
    <div className="w-full">
      <Helmet>
        <title>SignUp | Bistro Boss</title>
      </Helmet>
      {progression === true ? (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-none">
          <span className="loading loading-spinner w-1/6"></span>
          <p className="text-5xl">Please Wait... </p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="flex items-center justify-center w-full h-[100vh]"
        >
          <div className="flex xsm:flex-col lg:flex-row justify-between items-center xsm:w-[90%] lg:w-5/6">
            <div>
              <img
                className="xsm:hidden lg:block w-full"
                src={authenticationSidePhoto}
                alt=""
              />
            </div>
            <div className="bg-white lg:flex justify-center flex-col p-4 rounded-2xl xsm:w-5/6 lg:w-1/2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="xsm:my-0 lg:my-7"
              >
                <h1 className="text-4xl text-center font-semibold">SignUp</h1>
                <div className="my-3">
                  <label>
                    <span>Name</span>
                  </label>
                  <input
                    className="bg-slate-100"
                    placeholder="Enter your name"
                    type="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="my-3">
                  <label>
                    <span>Email</span>
                  </label>
                  <input
                    className="bg-slate-100"
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="my-3">
                  <label>
                    <span>Password</span>
                  </label>
                  <input
                    className=" bg-slate-100"
                    placeholder="Enter your password"
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      // TODO: Need to impliment regular expression for password validation
                      // pattern: /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500">
                      Password must contain 6 character
                    </span>
                  )}
                  {/* {errors.password?.type === 'pattern'  && <span className="text-red-500">one small, one large, one special character & one digit must be included</span>} */}
                </div>
                <input
                  className="w-2/5 mt-5 cursor-pointer bg-secoundary text-white font-semibold"
                  type="submit"
                  value="SignUp"
                />
              </form>
              <p className="text-center">
                Already registered?{" "}
                <Link to={"/login"} className="font-bold text-secoundary">
                  Got to Login
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
