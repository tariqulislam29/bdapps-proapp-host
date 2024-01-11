import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../Api/baseApi';
const RegistrationForm = () => {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  const onSubmit = (data) => {
   if (data.password === data.confirm_password) {
     console.log(data);
        axios({
          method: "post",
          url: `${api}/registration`,
          data,
         
        }).then((res) => {
          if (res) {
          navigate("/login");
          }
        });
    
   }
   else {
     alert("Passwords Do Not Match");
    } 
    

    };

    return (
      <>
        <div className="container  " style={{ height: "97vh" }}>
          <div className="row pt-5 pb-5 rounded-3 ">
            <div className="col-sm-1 col-1 col-lg-2 col-md-2"></div>
            <div className="col-sm-12 col-12 col-lg-8 col-md-8">
              <div className=" border rounded-3">
                <div className="d-flex bg-black justify-content-between rounded-top">
                  <h5 className="text-start  rounded-top text-white py-2 ps-2">
                    Registration
                  </h5>
                  <div>
                    <Link to={"/login"}>
                      <button
                        type="submit"
                        className="btn bg-black  text-white m-2"
                        style={{ border: "1px solid white" }}
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="px-3 mb-5 py-3"
                >
                  <div className="row pt-5">
                    <div className="col-sm-12 col-12 col-lg-6 col-md-6">
                      <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="email">
                          Email: <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          name="email"
                          {...register("email", { required: true })}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="name">
                          Name: <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter name"
                          name="name"
                          {...register("name", { required: true })}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="phone">
                          Phone: <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Enter phone"
                          name="phone"
                          {...register("phone", {
                            required: true,
                            pattern: /^(?:\+88|01)(?:\d{9}|\d{10})$/,
                          })}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="gender">
                          Gender:
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          name="gender"
                          {...register("gender")}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="dob">
                          Date of Birth:
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="dob"
                          name="dob"
                          {...register("dob")}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-12 col-lg-6 col-md-6">
                      {" "}
                      <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="division">
                          Division:
                        </label>
                        <select
                          className="form-control"
                          id="division"
                          name="division"
                          {...register("division")}
                        >
                        
                          <option value="Dhaka">Dhaka</option>
                          <option value="Barishal">Barishal</option>
                          <option value="Chattogram">Chattogram</option>
                          <option value="Khulna">Khulna</option>
                          <option value="Rajshahi">Rajshahi</option>
                          <option value="Rangpur">Rangpur</option>
                          <option value="Mymensingh">Mymensingh</option>
                          <option value="Sylhet">Sylhet</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="institute">
                          Institute:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="institute"
                          placeholder="Enter institute"
                          name="institute"
                          {...register("institute")}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="study_level">
                          Study Level:
                        </label>
                        <select
                          className="form-control"
                          id="study_level"
                          name="study_level"
                          {...register("study_level")}
                        >
                          <option value="university">University</option>
                          <option value="College">College</option>
                          <option value="School">School</option>
                          {/* <!-- Add other study levels here --> */}
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="password">
                          Password: <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter password"
                          name="password"
                          {...register("password", { required: true })}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="confirm_password">
                          Confirmation Password:{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirm_password"
                          placeholder="Confirm password"
                          name="confirm_password"
                          {...register("confirm_password", { required: true })}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    {" "}
                    <button
                      type="submit"
                      className="btn bg-black text-white w-100"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-1 col-1 col-lg-2 col-md-2"></div>
          </div>
        </div>
      </>
    );
};

export default RegistrationForm;