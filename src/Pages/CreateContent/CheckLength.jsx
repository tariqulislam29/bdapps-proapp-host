import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const CheckLength = () => {
  const [count, setCount] = useState("");

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
                    style={{ background: "green", fontSize: "14px" }}
                  >
                    <div className="d-flex  justify-content-between rounded-top">
                      <h6 className="text-start  rounded-top  pt-2 ps-2">
                        Check Content Length
                      </h6>
                      <div>
                        <button type="submit" className="btn border text-white  ">
                          Create a new Content
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody style={{ fontSize: "10px" }}>
                <tr>
                  <td>
                    <div className="container py-5">
                      <h6 style={{ fontSize: "14px" }}>
                        Write or Paste Some Text:
                      </h6>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        onChange={(e) => setCount(e.target.value)}
                      ></textarea>
                      {count.length > 0 && count.length < 301 && (
                        <p
                          className="mt-3 py-2 px-2 fw-bold"
                          style={{
                            fontSize: "14px",
                            background: "#dff0d8",
                            color: "#3c763d",
                            fontSize: "12px",
                          }}
                        >
                          Character count: {count.length}/300
                        </p>
                      )}
                      {count.length > 0 && count.length > 300 && (
                        <p
                          className="mt-3 py-2 px-2 fw-bold"
                          style={{
                            fontSize: "14px",
                            background: "#f2dede",
                            color: "#a94442",
                            fontSize: "12px",
                          }}
                        >
                          Character count: {count.length}/300
                        </p>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p className="text-start">
              <span className="fw-normal">
                <span className="fw-bold">Note:</span> Maximum length of a
                content is 300 characters.
              </span>
            </p>
          </div>
        </div>
        <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>
      </div>
    </div></>
  );
};

export default CheckLength;
