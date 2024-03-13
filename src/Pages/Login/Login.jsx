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
        setProgression(false);
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>LogIn | Bistro Boss</title>
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
              <form onSubmit={handelLogin} action="" className="xsm:my-0 lg:my-7">
                <h1 className="text-4xl text-center font-semibold">Login</h1>
                <div className="my-3">
                  <label>
                    <span>Email</span>
                  </label>
                  <input
                    className="bg-slate-100"
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div className="my-3">
                  <label>
                    <span>Password</span>
                  </label>
                  <input
                    className=" bg-slate-100"
                    placeholder="Enter your password"
                    type="password"
                    name="password"
                    required
                  />
                </div>
                <input
                  className="w-2/5 mt-5 cursor-pointer bg-secoundary text-white font-semibold"
                  type="submit"
                  value="Login"
                />
              </form>
              <p className="text-center xsm:text-sm lg:text-lg mb-4">
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
