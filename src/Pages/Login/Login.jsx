import React, { useContext, useState } from "react";
import authenticationSidePhoto from "./../../assets/others/authentication2.png";
import background from "./../../assets/others/authentication.png";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [progression, setProgression] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handelLogin = (event) => {
    setProgression(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        setProgression(false);
        console.log(progression);
        console.log(result);
        Swal.fire("Welcome to Bistro Boss");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>LogIn | Bistro Boss</title>
      </Helmet>
      {progression === true ? (
        <div className="w-full flex flex-col justify-center items-center mt-52 bg-none">
          <span className="loading loading-spinner w-1/6"></span>
          <p className="text-5xl">Please Wait... </p>
        </div>
      ) : (
        <div
          className="hero min-h-screen bg-base-200"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div
            className="hero-content flex-col lg:flex-row border justify-center md:p-20 shadow-black"
            style={{
              backgroundImage: `url(${background})`,
              boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="text-center w-1/2 xsm:hidden lg:block lg:text-left">
              <img src={authenticationSidePhoto}></img>
            </div>
            <div className="card lg:w-1/2 xsm:w-full m-10 shadow-2xl bg-base-100">
              <form onSubmit={handelLogin} className="card-body my-0">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Input Your Email"
                    className="input input-bordered bg-slate-100 my-0"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Input Your Password"
                    className="input input-bordered bg-slate-100 my-0"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  {/* TODO: To Input the exect button color */}
                  <input
                    className="btn bg-secoundary text-white font-semibold"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center">
                New to Bistro Boss?{" "}
                <Link to={"/signup"} className="font-bold text-secoundary">
                  Create a account
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
