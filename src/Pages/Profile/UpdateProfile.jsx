import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { api } from "../Api/baseApi";
import Navbar from "../Navbar/Navbar";
const UpdateProfile = () => {
  const { userId } = useParams();
  // console.log(userId);
  const [data, setData] = useState();
  const [emailData, setEmailData] = useState();
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(`${api}/getregistration`, {
        headers: {
          id: userId,
        },
      })
      .then((response) => {
        // Handle the successful response
        setData(response.data.data[0]);
        setEmailData(response.data.data[0].email);
      })
      .catch((error) => {
        // Handle errors
        alert(error.message);
      });
  }, [userId]);
  

const originalDateString = data?.dob;

// Create a Date object from the original date string
const originalDate = new Date(originalDateString);

// Extract the year, month, and day components
const year = originalDate.getFullYear();
const month = String(originalDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
const day = String(originalDate.getDate()).padStart(2, "0");

// Create a new formatted date string
const formattedDateString = `${year}-${month}-${day}`;
  
  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      data.email = emailData;
      data.id = parseInt(userId);
        console.log(data);
        axios({
          method: "put",
          url: `${api}/updateProfile`,
          data,
        }).then((res) => {
          if (res) {
            if (res.data.data.affectedRows == 1) {
              alert("Successfully Updated");
              // location.reload();

            }
            // navigate("/login");
          }
        });
      
    };
  return (
    <>
      <Navbar></Navbar>
      <div>
        {!data ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row gx-2">
            <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>

            <div className="col-12 col-sm-12 col-lg-6 col-md-6">
              <div className="py-3 w-100">
                <table className="table w-100 border rounded-3">
                  <thead>
                    <tr>
                      <td
                        colSpan={12}
                        className="text-start text-white"
                        style={{ background: "black", fontSize: "14px" }}
                      >
                        <h6 className="text-start  rounded-top  pt-2 ps-2">
                          Update My Profile
                        </h6>
                      </td>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "14px" }}>
                    <tr>
                      <td>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="px-5 mb-5 py-3"
                        >
                          <div className="form-group mb-3">
                            <label className="mb-1 fw-bold" for="email">
                              Email:
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              defaultValue={data?.email}
                              name="email"
                              disabled
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1 fw-bold" for="name">
                              Name:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              defaultValue={data?.name}
                              name="name"
                              {...register("name")}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1 fw-bold" for="phone">
                              Phone:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              defaultValue={`0${data?.phone}`}
                              {...register("phone", {
                                pattern: /^(?:\+88|01)(?:\d{9}|\d{10})$/,
                              })}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1 fw-bold" for="gender">
                              Gender:
                            </label>
                            <select
                              className="form-control"
                              id="gender"
                              name="gender"
                              {...register("gender")}
                            >
                              <option>{data.gender}</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1 fw-bold" for="dob">
                              Date of Birth:
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="dob"
                              defaultValue={formattedDateString}
                              name="dob"
                              {...register("dob")}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1 fw-bold" for="division">
                              Division:
                            </label>
                            <select
                              className="form-control"
                              id="division"
                              name="division"
                              {...register("division")}
                            >
                              <option> {data.division}</option>
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
                            <label className="mb-1 fw-bold" for="institute">
                              Institute:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="institute"
                              defaultValue={data.institute}
                              name="institute"
                              {...register("institute")}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1 fw-bold" for="study_level">
                              Study Level:
                            </label>
                            <select
                              className="form-control"
                              id="study_level"
                              name="study_level"
                              {...register("study_level")}
                            >
                              <option> {data.study_level}</option>
                              <option value="university">University</option>
                              <option value="College">College</option>
                              <option value="School">School</option>
                            </select>
                          </div>

                          <div>
                            {" "}
                            <button
                              type="submit"
                              className="btn text-white w-100"
                              style={{ background: "black" }}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateProfile;
