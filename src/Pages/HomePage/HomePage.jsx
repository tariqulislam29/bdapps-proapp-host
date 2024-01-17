import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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


 const [formContent, setFormContent] = useState();
 const [singleData, setSingleData] = useState({});
 const {
   register: register1,
   reset: reset1,
   formState: { errors: errors1 },
   handleSubmit: handleSubmit1,
  } = useForm();

const onSubmitUpdate = (data) => {
  if (formContent) {
    data.content = formContent;
    data.id = singleData.id;
    axios({
      method: "put",
      url: `${api}/updateContent`,
      data,
    }).then((res) => {
      if (res) {
        if (res.data.error) {
          alert(res.data.message);
        }
        if (res.data.data.affectedRows == 1) {
          // alert("Successfully Updated Content");
          setFormContent("");
        
          window.location.reload();
        }
      }
    });
  } else {
    alert("Change Content Please");
  }
};


    const handleDeleteData = (item) => {
      const confirmed = window.confirm(
        "Are you sure you want to Delete this content"
      );

      // Check the user's response
      if (confirmed) {
        // User clicked "OK"
        // Perform the action you want to take
        axios
          .delete(`${api}/deleteContent`, {
            headers: {
              id: item.id,
            },
          })
          .then((response) => {
            // Handle the successful response
            if (response.data.data.affectedRows == 1) {
             
                window.location.reload();
              // const newData = data.filter((data1) => data1.id !== item.id);
              // setData(newData);
            }
          })
          .catch((error) => {
            // Handle errors
            alert(error.message);
          });
      } else {
        // User clicked "Cancel" or closed the dialog
        console.log("Canceled.");
      }
    };
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
                                {(contentData?.todayStatus?.hasOwnProperty(
                                  "Pending"
                                )
                                  ? parseInt(contentData?.todayStatus?.Pending)
                                  : 0) +
                                  (contentData?.todayStatus?.hasOwnProperty(
                                    "Failed"
                                  )
                                    ? parseInt(contentData?.todayStatus?.Failed)
                                    : 0) +
                                  (contentData?.todayStatus?.hasOwnProperty(
                                    "Sent"
                                  )
                                    ? parseInt(contentData?.todayStatus?.Sent)
                                    : 0)}
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
                                {contentData?.todayStatus?.Sent
                                  ? contentData?.todayStatus?.Sent
                                  : 0}
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
                                {contentData?.todayStatus?.Pending
                                  ? contentData?.todayStatus?.Pending
                                  : 0}
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
                                {contentData?.todayStatus?.Failed
                                  ? contentData?.todayStatus?.Failed
                                  : 0}
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
                                {(contentData?.yesterdayStatus?.hasOwnProperty(
                                  "Pending"
                                )
                                  ? parseInt(
                                      contentData?.yesterdayStatus?.Pending
                                    )
                                  : 0) +
                                  (contentData?.yesterdayStatus?.hasOwnProperty(
                                    "Failed"
                                  )
                                    ? parseInt(
                                        contentData?.yesterdayStatus?.Failed
                                      )
                                    : 0) +
                                  (contentData?.yesterdayStatus?.hasOwnProperty(
                                    "Sent"
                                  )
                                    ? parseInt(
                                        contentData?.yesterdayStatus?.Sent
                                      )
                                    : 0)}
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
                                {contentData?.yesterdayStatus?.Sent
                                  ? contentData?.yesterdayStatus?.Sent
                                  : 0}
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
                                {contentData?.yesterdayStatus?.Pending
                                  ? contentData?.yesterdayStatus?.Pending
                                  : 0}
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
                                {contentData?.yesterdayStatus?.Failed
                                  ? contentData?.yesterdayStatus?.Failed
                                  : 0}

                       
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
                              <td>
                                {" "}
                                {item.status === "Pending" ? (
                                  <span class="badge text-bg-warning text-white p-2">
                                    {item.status}
                                  </span>
                                ) : item.status === "Sent" ? (
                                  <span class="badge text-bg-success p-2">
                                    {" "}
                                    {item.status}
                                  </span>
                                ) : (
                                  <span class="badge text-bg-danger p-2">
                                    {" "}
                                    {item.status}
                                  </span>
                                )}
                              </td>
                              <td>
                                {" "}
                                {item.status === "Pending" ? (
                                  <i
                                    class="fa fa-pen-nib bg-primary p-2 text-white rounded-pill"
                                    data-bs-toggle="modal"
                                    onClick={(e) => setSingleData(item)}
                                    data-bs-target="#updateContent"
                                    style={{ cursor: "pointer" }}
                                  ></i>
                                ) : (
                                  <i class="fa fa-ban bg-black p-2 text-white rounded-pill"></i>
                                )}
                              </td>
                              <td>
                                {" "}
                                {item.status === "Pending" ? (
                                  <i
                                    class="fa fa-trash bg-danger p-2 text-white rounded-pill "
                                    onClick={(e) => {
                                      handleDeleteData(item);
                                    }}
                                    style={{ cursor: "pointer" }}
                                  ></i>
                                ) : (
                                  <i class="fa fa-ban bg-black p-2 text-white rounded-pill"></i>
                                )}
                              </td>
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
                              <td>
                                {" "}
                                {item.status === "Pending" ? (
                                  <span class="badge text-bg-warning text-white p-2">
                                    {item.status}
                                  </span>
                                ) : item.status === "Sent" ? (
                                  <span class="badge text-bg-success p-2">
                                    {" "}
                                    {item.status}
                                  </span>
                                ) : (
                                  <span class="badge text-bg-danger p-2">
                                    {" "}
                                    {item.status}
                                  </span>
                                )}
                              </td>
                              <td>
                                {item.status === "Pending" ? (
                                  <i
                                    class="fa fa-pen-nib bg-primary p-2 text-white rounded-pill"
                                    data-bs-toggle="modal"
                                    onClick={(e) => setSingleData(item)}
                                    data-bs-target="#updateContent"
                                    style={{ cursor: "pointer" }}
                                  ></i>
                                ) : (
                                  <i class="fa fa-ban bg-black p-2 text-white rounded-pill"></i>
                                )}
                              </td>
                              <td>
                                {item.status === "Pending" ? (
                                  <i
                                    class="fa fa-trash bg-danger p-2 text-white rounded-pill "
                                    onClick={(e) => {
                                      handleDeleteData(item, "tomorrow");
                                    }}
                                    style={{ cursor: "pointer" }}
                                  ></i>
                                ) : (
                                  <i class="fa fa-ban bg-black p-2 text-white rounded-pill"></i>
                                )}
                              </td>
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
            <div
              class="modal fade"
              id="updateContent"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Update Content
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div class="modal-body">
                    <form onSubmit={handleSubmit1(onSubmitUpdate)}>
                      <div className="row">
                        <div className="mb-3">
                          <label
                            className="fw-bold  mb-1"
                            style={{ fontSize: "14px" }}
                          >
                            Content
                          </label>
                          <textarea
                            className="w-100 form-control"
                            rows={10}
                            defaultValue={singleData.content}
                            onChange={(e) => setFormContent(e.target.value)}
                            required
                          />
                          {formContent?.length > 0 &&
                            formContent?.length < 301 && (
                              <p
                                className="mt-3 py-2 px-2 fw-bold"
                                style={{
                                  fontSize: "14px",
                                  background: "#dff0d8",
                                  color: "#3c763d",
                                  fontSize: "12px",
                                }}
                              >
                                Character count: {formContent?.length}
                                /300
                              </p>
                            )}
                          {formContent?.length > 0 &&
                            formContent?.length > 300 && (
                              <p
                                className="mt-3 py-2 px-2 fw-bold"
                                style={{
                                  fontSize: "14px",
                                  background: "#f2dede",
                                  color: "#a94442",
                                  fontSize: "12px",
                                }}
                              >
                                Character count: {formContent?.length}
                                /300
                              </p>
                            )}
                        </div>
                      </div>
                      <div className="submit-section text-center">
                        <button
                          type="submit"
                          className="btn bg-primary text-white px-5 py-2 rounded"
                        >
                          Update
                        </button>

                        <button
                          type="button"
                          className="btn bg-primary text-white px-5 ms-1 py-2 rounded"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
