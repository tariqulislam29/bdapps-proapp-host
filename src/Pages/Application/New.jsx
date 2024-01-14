import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Auth from "../Api/Auth";
import { api } from "../Api/baseApi";
import Navbar from "../Navbar/Navbar";

const New = () => {
  const data = Auth();
  const userId = data.id;

  const {
    register,
    handleSubmit,
    watch,reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
   
    data.reg_id = parseInt(userId);
    console.log(data);
    axios({
      method: "post",
      url: `${api}/newApp`,
      data,
    }).then((res) => {
      console.log(res);
      if (res.data.error) {
         alert(res.data.message);
      }
      if (res.data.data.affectedRows == 1) {
        alert("Successfully Updated");
        reset();
        // location.reload();
      }
    });
  };
  return (
    <>
      <Navbar></Navbar>
      <div>
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
                      <div className="d-flex  justify-content-between rounded-top">
                        <h6 className="text-start  rounded-top  pt-2 ps-2">
                          Create a New App
                        </h6>
                        <div>
                          <Link to={"/application/list"}>
                            {" "}
                            <button
                              type="submit"
                              className="btn border text-white  "
                            >
                              App List
                            </button>
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "12px" }}>
                  <tr>
                    <td>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {" "}
                        <div className="form-group mb-3">
                          {" "}
                          <label className="mb-1 fw-bold " for="appId">
                            App Id:
                          </label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            id="appId"
                            {...register("app_id", { required: true })}
                          />{" "}
                        </div>{" "}
                        <div className="form-group mb-3">
                          {" "}
                          <label className="mb-1 fw-bold " for="appPassword">
                            App Password:
                          </label>{" "}
                          <input
                            type="password"
                            className="form-control"
                            id="appPassword"
                            {...register("api_key", { required: true })}
                          />{" "}
                        </div>{" "}
                        <div className="form-group mb-3">
                          {" "}
                          <label className="mb-1 fw-bold " for="smsKeyword">
                            SMS Keyword:
                          </label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            {...register("sms_keyword", { required: true })}
                            id="smsKeyword"
                          />{" "}
                        </div>{" "}
                        <div className="form-group mb-3">
                          {" "}
                          <label className="mb-1 fw-bold " for="ussdKeyword">
                            USSD Keyword:
                          </label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            id="ussdKeyword"
                            {...register("ussd_keyword", { required: true })}
                          />{" "}
                        </div>{" "}
                        <div className="form-group mb-3">
                          {" "}
                          <label className="mb-1 fw-bold " for="deliveryTime">
                            Delivery Time:
                          </label>{" "}
                          <input
                            type="time"
                            className="form-control"
                            id="deliveryTime"
                            {...register("delivery_time", { required: true })}
                          />{" "}
                        </div>{" "}
                        <button
                          type="submit"
                          className="btn  w-100 text-white"
                          style={{ background: "black" }}
                        >
                          Submit
                        </button>{" "}
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default New;
