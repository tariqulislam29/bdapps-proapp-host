import React from "react";
import Navbar from "../Navbar/Navbar";

const New = () => {
  return (
   <>
   <Navbar></Navbar>
    <div>
      <div class="row gx-2">
        <div class="col-1 col-sm-1 col-lg-3 col-md-3"></div>

        <div class="col-12 col-sm-12 col-lg-6 col-md-6">
          <div class="py-3 w-100">
            <table class="table w-100 border rounded-3">
              <thead>
                <tr>
                  <td
                    colSpan={12}
                    className="text-start text-white"
                    style={{ background: "green", fontSize: "14px" }}
                  >
                    <div className="d-flex  justify-content-between rounded-top">
                      <h6 className="text-start  rounded-top  pt-2 ps-2">
                        Create a New App
                      </h6>
                      <div>
                        <button type="submit" class="btn border text-white  ">
                          App List
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody style={{ fontSize: "12px" }}>
                <tr>
                   
                 <td >
                 <form>
                    {" "}
                    <div class="form-group mb-3">
                      {" "}
                      <label className="mb-1 fw-bold " for="appId">App Id:</label>{" "}
                      <input
                        type="text"
                        class="form-control"
                        id="appId"
                     
                      />{" "}
                    </div>{" "}
                    <div class="form-group mb-3">
                      {" "}
                      <label className="mb-1 fw-bold " for="appPassword">App Password:</label>{" "}
                      <input
                        type="password"
                        class="form-control"
                        id="appPassword"
                       
                      />{" "}
                    </div>{" "}
                    <div class="form-group mb-3">
                      {" "}
                      <label className="mb-1 fw-bold " for="smsKeyword">SMS Keyword:</label>{" "}
                      <input
                        type="text"
                        class="form-control"
                        id="smsKeyword"
                       
                      />{" "}
                    </div>{" "}
                    <div class="form-group mb-3">
                      {" "}
                      <label className="mb-1 fw-bold " for="ussdKeyword">USSD Keyword:</label>{" "}
                      <input
                        type="text"
                        class="form-control"
                        id="ussdKeyword"
                       
                      />{" "}
                    </div>{" "}
                    <div class="form-group mb-3">
                      {" "}
                      <label className="mb-1 fw-bold " for="deliveryTime">Delivery Time:</label>{" "}
                      <input
                        type="date"
                        class="form-control"
                        id="deliveryTime"
                       
                      />{" "}
                    </div>{" "}
                    <button type="submit" class="btn  w-100 text-white" style={{ background: "green"}}>
                      Submit
                    </button>{" "}
                  </form>
                 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-1 col-sm-1 col-lg-3 col-md-3"></div>
      </div>
    </div></>
  );
};

export default New;
