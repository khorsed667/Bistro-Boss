import React, { useContext } from "react";
import authenticationSidePhoto from "./../../assets/others/authentication2.png";
import background from "./../../assets/others/authentication.png";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>LogIn | Bistro Boss</title>
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
            <form onSubmit={handelLogin} className="card-body">
              <h1 className="text-2xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
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
                  placeholder="password"
                  className="input input-bordered"
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
    </>
  );
};

export default Login;
