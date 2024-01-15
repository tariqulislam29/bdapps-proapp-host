import axios from "axios";
import React, { useEffect, useState } from "react";
import Auth from "../Api/Auth";
import { api } from "../Api/baseApi";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
   const data = Auth();
  console.log(data);
  const [subKeywordOptions, setSubKeywordOptions] = useState([]);
  console.log(subKeywordOptions);
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(`${api}/getnewapp`, {
        headers: {
          id: data.id,
        },
      })
      .then((response) => {
        // Handle the successful response
        // console.log(response.data.data);
        setSubKeywordOptions(response.data.data);
      })
      .catch((error) => {
        // Handle errors
        alert(error.message);
      });
  }, []);
  const [contentData, setContentData] = useState([]);
  console.log(contentData);
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(`${api}/getallcontenthome`, {
        headers: {
          reg_id: data.id,
        },
      })
      .then((response) => {
        // Handle the successful response
        // console.log(response.data.data);
        setContentData(response.data.data);
      })
      .catch((error) => {
        // Handle errors
        alert(error.message);
      });
  }, []);
  return (
    <>
      {!data ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <Navbar></Navbar>
          <div>
            {/* body section start  */}
            <div className=" px-4 text-center">
              <div className="row gx-2">
                <div className="col-12 col-sm-12 col-lg-3 col-md-3">
                  <div className="py-2 px-2">
                    <div className="py-2 w-100">
                      <table className="table w-100 border rounded-3">
                        <thead>
                          <tr>
                            <th
                              colSpan={12}
                              className="text-start text-success"
                              style={{
                                background: "#dff0d8",
                                fontWeight: "normal",
                                fontSize: "14px",
                              }}
                            >
                              Today's Content
                            </th>
                          </tr>
                        </thead>
                        <tbody style={{ fontSize: "10px" }}>
                          <tr>
                            <button
                              type="button"
                              className="btn btn-primary bg-primary text-white my-2 mx-1"
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              Total
                              <span
                                className="badge bg-white text-primary rounded-circle ms-1 "
                                style={{ fontSize: "12px" }}
                              >
                                {contentData?.todayStatus?.Pending +
                                  contentData?.todayStatus?.Failed +
                                  contentData?.todayStatus?.Sent}
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-success bg-success text-white my-2 mx-1"
                              style={{ fontSize: "12px" }}
                            >
                              Sent
                              <span
                                className="badge bg-white text-success rounded-circle ms-1 "
                                style={{ fontSize: "12px" }}
                              >
                                {contentData?.todayStatus?.Sent}
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning bg-warning text-white my-2 mx-1"
                              style={{ fontSize: "12px" }}
                            >
                              Pending
                              <span
                                className="badge bg-white text-warning rounded-circle ms-1 "
                                style={{ fontSize: "12px" }}
                              >
                                {contentData?.todayStatus?.Pending}
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger bg-danger text-white my-2 mx-1"
                              style={{ fontSize: "12px" }}
                            >
                              Failed
                              <span
                                className="badge bg-white text-danger rounded-circle ms-1 "
                                style={{ fontSize: "12px" }}
                              >
                                {contentData?.todayStatus?.Failed}
                              </span>
                            </button>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="py-2 w-100">
                      <table className="table w-100 border rounded-3">
                        <thead>
                          <tr>
                            <th
                              colSpan={12}
                              className="text-start text-success"
                              style={{
                                background: "#dff0d8",
                                fontWeight: "normal",
                                fontSize: "14px",
                                color: "green",
                              }}
                            >
                              Yesterday's Content
                            </th>
                          </tr>
                        </thead>
                        <tbody style={{ fontSize: "10px" }}>
                          <tr>
                            <button
                              type="button"
                              className="btn btn-primary bg-primary text-white my-2 mx-1"
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              Total
                              <span
                                className="badge bg-white text-primary rounded-circle ms-1 "
                                style={{ fontSize: "12px" }}
                              >
                                {contentData?.yesterdayStatus?.Pending +
                                  contentData?.yesterdayStatus?.Failed +
                                  contentData?.yesterdayStatus?.Sent}
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-success bg-success text-white my-2 mx-1"
                              style={{ fontSize: "12px" }}
                            >
                              Sent
                              <span
                                className="badge bg-white text-success rounded-circle ms-1 "
                                style={{ fontSize: "12px" }}
                              >
                                {contentData?.yesterdayStatus?.Sent}
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning bg-warning text-white my-2 mx-1"
                              style={{ fontSize: "12px" }}
                            >
                              Pending
                              <span
                                className="badge bg-white text-warning rounded-circle ms-1 "
                                style={{ fontSize: "12px" }}
                              >
                                {contentData?.yesterdayStatus?.Pending}
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger bg-danger text-white my-2 mx-1"
                              style={{ fontSize: "12px" }}
                            >
                              Failed
                              <span
                                className="badge bg-white text-danger rounded-circle ms-1 "
                                style={{ fontSize: "12px" }}
                              >
                                {contentData?.yesterdayStatus?.Failed}
                              </span>
                            </button>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="py-2 w-100">
                      <table className="table w-100 border rounded-3">
                        <thead>
                          <tr>
                            <th
                              colSpan={12}
                              className="text-start text-success"
                              style={{
                                background: "#dff0d8",
                                fontWeight: "normal",
                                fontSize: "14px",
                                color: "green",
                              }}
                            >
                              Tomorrow's Content
                            </th>
                          </tr>
                        </thead>
                        <tbody style={{ fontSize: "10px" }}>
                          <tr className="text-start ">
                            <button
                              type="button"
                              className="btn btn-primary bg-primary text-white my-2 mx-2"
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              Total
                              <span
                                className="badge bg-white text-primary rounded-circle ms-1 "
                                style={{ fontSize: "12px" }}
                              >
                                {contentData?.tomorrowStatus}
                              </span>
                            </button>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-7 col-md-7">
                  <div className="py-3 w-100">
                    <table className="table w-100 border rounded-3">
                      <thead>
                        <tr>
                          <th
                            colSpan={12}
                            className="text-start text-white"
                            style={{ background: "black", fontSize: "14px" }}
                          >
                            Today's Content
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ fontSize: "14px" }}>
                        <tr>
                          <th style={{ width: "10%" }}>App ID</th>
                          <th style={{ width: "55%" }}>Content</th>
                          <th style={{ width: "10%" }}>Length</th>
                          <th style={{ width: "10%" }}>Status</th>
                          <th style={{ width: "10%" }}>Edit</th>
                          <th style={{ width: "5%" }}>Delete</th>
                        </tr>
                        {contentData?.today &&
                          contentData?.today.map((item, index) => (
                            <tr key={index}>
                              <td>{item.app_id}</td>
                              <td className="text-start">{item.content}</td>
                              <td>{item.content.length}</td>
                              <td>{item.status}</td>
                              <td></td>
                              <td></td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="py-2 w-100">
                    <table className="table w-100 border rounded-3">
                      <thead>
                        <tr>
                          <th
                            colSpan={12}
                            className="text-start text-white"
                            style={{ background: "black", fontSize: "14px" }}
                          >
                            Tomorrows's Content
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ fontSize: "14px" }}>
                        <tr>
                          <th style={{ width: "10%" }}>App ID</th>
                          <th style={{ width: "55%" }}>Content</th>
                          <th style={{ width: "10%" }}>Length</th>
                          <th style={{ width: "10%" }}>Status</th>
                          <th style={{ width: "10%" }}>Edit</th>
                          <th style={{ width: "5%" }}>Delete</th>
                        </tr>
                        {contentData?.tomorrow &&
                          contentData?.tomorrow.map((item, index) => (
                            <tr key={index}>
                              <td>{item.app_id}</td>
                              <td className="text-start">{item.content}</td>
                              <td>{item.content.length}</td>
                              <td>{item.status}</td>
                              <td></td>
                              <td></td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <p className="text-start">
                      <span className="fw-bold">Note:</span> Maximum length of a
                      content is <span className="fw-bold">300 </span>
                      characters.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-2 col-md-2">
                  <div className="py-3 w-100">
                    <table className="table w-100 border rounded-3">
                      <thead>
                        <tr>
                          <th
                            colSpan={12}
                            className="text-start text-success"
                            style={{
                              background: "#dff0d8",
                              fontWeight: "normal",
                              fontSize: "14px",
                              color: "green",
                            }}
                          >
                            Keyword & Time
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ fontSize: "14px" }}>
                        <tr>
                          <th>#</th>
                          <th>App ID</th>
                          <th>Time</th>
                        </tr>
                        {subKeywordOptions &&
                          subKeywordOptions.map((item, index) => (
                            <tr>
                              <th>{++index}</th>
                              <td className="text-start">{item.app_id}</td>
                              <td>{item.delivery_time}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* body section end  */}
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
