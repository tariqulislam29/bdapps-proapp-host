import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div class="container text-center " style={{ height: "97vh" }}>
        <div class="row pt-5">
          <div class="col-sm-12 col-12 col-lg-6 col-md-6">
            <div className=" border rounded-3">
              <h5 className="text-start bg-danger rounded-top text-white py-2 ps-2">
                Login
              </h5>
              <form>
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
                      required
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
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-submit bg-danger text-white px-5 py-1 mb-5"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
          <div class="col-sm-12 col-12 col-lg-6 col-md-6 px-5 text-start mt-5">
            <h3 className="text-danger ">
              Register for a New Account
            </h3>
            <hr />
            <p>To Create a User Account</p>
            <div>
              {" "}
              <Link to={"/registationform"}>
              <button type="submit" className="btn  border px-3 py-1 mb-5">
                User
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
