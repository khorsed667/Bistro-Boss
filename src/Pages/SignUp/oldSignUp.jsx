
        // <div
        //   className="hero min-h-screen bg-base-200"
        //   style={{ backgroundImage: `url(${background})` }}
        // >
        //   <div
        //     className="hero-content flex-col lg:flex-row border justify-center md:p-20 shadow-black"
        //     style={{
        //       backgroundImage: `url(${background})`,
        //       boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
        //     }}
        //   >
        //     <div className="text-center w-1/2 xsm:hidden lg:block lg:text-left">
        //       <img src={authenticationSidePhoto}></img>
        //     </div>
        //     <div className="card lg:w-1/2 xsm:w-full m-10 shadow-2xl bg-base-100">
        //       <form
        //         onSubmit={handleSubmit(onSubmit)}
        //         className="card-body my-0"
        //       >
        //         <h1 className="text-2xl font-bold text-center">SignUp</h1>
        //         <div className="form-control">
        //           <label className="label">
        //             <span className="label-text font-bold">Name</span>
        //           </label>
        //           <input
        //             type="name"
        //             name="name"
        //             placeholder="name"
        //             className="input input-bordered bg-slate-100 my-0"
        //             {...register("name", { required: true })}
        //           />
        //           {errors.name && (
        //             <span className="text-red-500">This field is required</span>
        //           )}
        //         </div>
        //         <div className="form-control">
        //           <label className="label">
        //             <span className="label-text font-bold">Email</span>
        //           </label>
        //           <input
        //             type="email"
        //             name="email"
        //             placeholder="email"
        //             className="input input-bordered bg-slate-100 my-0"
        //             {...register("email", { required: true })}
        //           />
        //           {errors.email && (
        //             <span className="text-red-500">This field is required</span>
        //           )}
        //         </div>
        //         <div className="form-control">
        //           <label className="label">
        //             <span className="label-text font-bold">Password</span>
        //           </label>
        //           <input
        //             type="password"
        //             name="password"
        //             placeholder="password"
        //             className="input input-bordered bg-slate-100 my-0"
        //             {...register("password", {
        //               required: true,
        //               minLength: 6,
        //               // TODO: Need to impliment regular expression fro password validation
        //               // pattern: /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/
        //             })}
        //           />
        //           {errors.password?.type === "required" && (
        //             <span className="text-red-500">This field is required</span>
        //           )}
        //           {errors.password?.type === "minLength" && (
        //             <span className="text-red-500">
        //               Password must contain 6 character
        //             </span>
        //           )}
        //           {/* {errors.password?.type === 'pattern'  && <span className="text-red-500">one small, one large, one special character & one digit must be included</span>} */}
        //         </div>
        //         <div className="form-control mt-6">
        //           <input
        //             className="btn bg-secoundary text-white font-semibold"
        //             type="submit"
        //             value="SignUp"
        //           />
        //         </div>
        //       </form>
        //       <p className="text-center">
        //         Already registered?{" "}
        //         <Link to={"/login"} className="font-bold text-secoundary">
        //           Got to Login
        //         </Link>
        //       </p>
        //       <SocialLogin></SocialLogin>
        //     </div>
        //   </div>
        // </div>