import React, { useContext } from "react";
import authenticationSidePhoto from "./../../assets/others/authentication2.png";
import background from "./../../assets/others/authentication.png";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { signUp, user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signUp(data.email, data.password)
      .then((result) => {
        console.log(result.user);
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
    <>
      <Helmet>
        <title>SignUp | Bistro Boss</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-base-200"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          className="hero-content flex-col lg:flex-row border p-20 shadow-black"
          style={{
            backgroundImage: `url(${background})`,
            boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="text-center w-1/2 lg:text-left">
            <img src={authenticationSidePhoto}></img>
          </div>
          <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-2xl font-bold text-center">SignUp</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    // TODO: Need to impliment regular expression fro password validation
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
              <div className="form-control mt-6">
                <input
                  className="btn bg-secoundary text-white font-semibold"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center">
              Already registered?{" "}
              <Link to={"/login"} className="font-bold text-secoundary">
                Got to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
