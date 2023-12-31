import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api } from "../Api/baseApi";
import "./Login.css";
const Login = () => {
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
  } = useForm();
    const onSubmit = (data) => {
    console.log(data);
        axios({
          method: "post",
          url: `${api}/loginCheck`,
          data,
        }).then((res) => {
          console.log(res);
          if (res) {
            // navigate("/login");
          }
        });
     
    };
  return (
    <>
      <div className="container text-center " style={{ height: "97vh" }}>
        <div className="row pt-5">
          <div className="col-sm-12 col-12 col-lg-4 col-md-3"></div>
          <div className="col-sm-12 col-12 col-lg-5 col-md-6 pt-5">
            <div className=" border rounded-3">
              <h5 className="text-start bg-black rounded-top text-white py-2 ps-2">
                Login
              </h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 px-5 pt-5">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>{" "}
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="username"
                      {...register("email", { required: true })}
                    />
                  </div>
                </div>
                <div className="mb-3 px-5">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>{" "}
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="password"
                      {...register("password", { required: true })}
                    />
                  </div>
                </div>
                <Link to={"/registationform"} className="text-decoration-none">
                  {" "}
                  <p className="text-black ">Register for a New Account</p>
                </Link>
                <button
                  type="submit"
                  className="btn btn-submit bg-black text-white px-5 py-1 mb-5"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-12 col-12 col-lg-4 col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
