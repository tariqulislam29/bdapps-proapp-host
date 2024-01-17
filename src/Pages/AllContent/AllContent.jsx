import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Auth from '../Api/Auth';
import { api } from '../Api/baseApi';
import Navbar from '../Navbar/Navbar';

const AllContent = () => {
   const data1 = Auth();
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-based
  const day = today.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const [appId, setAppId] = useState();
  const [startDate, setStartDate] = useState(formattedDate);
  const [endDate, setEndDate] = useState(formattedDate);
  const [formContent, setFormContent] = useState();
  
  const [data, setData] = useState([]);
  const [singleData,setSingleData] = useState({});
  console.log(startDate, endDate);
 const {
   register,
   handleSubmit,
   watch,
   reset,
   formState: { errors },
  } = useForm();
   const {
     register: register1,
     reset: reset1,
     formState: { errors: errors1 },
     handleSubmit: handleSubmit1,
  } = useForm();
 

useEffect(() => {
  // Make a GET request using Axios
  axios
    .get(`${api}/getallAppTcontent`, {
      headers: {
        startdate: startDate,
        enddate: endDate,
        reg_id: data1.id,
      },
    })
    .then((response) => {
      // Handle the successful response
      // console.log(response.data.data);
      setData(response.data.data);
    })
    .catch((error) => {
      // Handle errors
      alert(error.message);
    });
}, []);

// update data 
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
             reset();
             window.location.reload();
           }
         }
       });
    
    }
   else {
     alert("Change Content Please");
    }
 
  };
  
// get data 
  const onSubmit = (data) => {
    if (appId && startDate && endDate) {
    
      axios
        .get(`${api}/getallcontent`, {
          headers: {
            reg_id: data1.id,
            id: appId,
            srtdate: startDate,
            eddate: endDate,
          },
        })
        .then((response) => {
          console.log(response);
          // Handle the successful response
          setData(response.data.data);
        })
        .catch((error) => {
          // Handle errors
          alert(error.message);
        });
    } else {
      alert("All Field Required");
    }
  };

const [subKeywordOptions, setSubKeywordOptions] = useState([]);
useEffect(() => {
  // Make a GET request using Axios
  axios
    .get(`${api}/getnewapp`, {
      headers: {
        id: data1.id,
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



  const handleDeleteData = item => {
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
           const newData = data.filter((data1) => data1.id !== item.id);
           setData(newData);
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
  }
  
    return (
      <>
        <Navbar></Navbar>
        <div className=" container">
          <div className="row gx-2">
            <div className="col-12 col-sm-12 col-lg-12 col-md-12">
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
                            Content List
                          </h6>
                          <div>
                            <Link to={"/newContent"}>
                              <button
                                type="submit"
                                className="btn border text-white  "
                              >
                                Create a new Content
                              </button>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={12}>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="px-5 mb-5 py-3"
                        >
                          <div className="row">
                            <div className="col-sm-12 col-12 col-lg-3 col-md-3 mb-3 row">
                              <label
                                htmlFor="Start"
                                className="col-sm-4 text-end col-form-label"
                              >
                                Start:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="date"
                                  className="form-control"
                                  id="Start"
                                  defaultValue={startDate}
                                  onChange={(e) => setStartDate(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className=" col-sm-12 col-12 col-lg-3 col-md-3 mb-3 row">
                              <label
                                htmlFor="Start"
                                className="col-sm-4 text-end col-form-label"
                              >
                                End:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="date"
                                  className="form-control"
                                  id="End"
                                  defaultValue={endDate}
                                  onChange={(e) => setEndDate(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-sm-12 col-12 col-lg-3 col-md-3 mb-3 row">
                              <label
                                htmlFor="appId"
                                className="col-sm-4 text-end col-form-label"
                              >
                                App ID:
                              </label>
                              <div className="col-sm-8">
                                <select
                                  className="w-100 form-select "
                                  onChange={(e) =>
                                    setAppId(parseInt(e.target.value))
                                  }
                                  required
                                >
                                  <option value={0}>select app id</option>
                                  {/* Map your options here */}
                                  {subKeywordOptions.map((option) => (
                                    <option key={option.id} value={option.id}>
                                      {option.app_id}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-12 col-12 col-lg-3 col-md-3">
                              {" "}
                              <button
                                type="submit"
                                className="btn text-white "
                                style={{ background: "black" }}
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </td>
                    </tr>
                    <tr style={{ fontSize: "14px" }}>
                      <th
                        className="bg-black text-white border text-center"
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "5%",
                        }}
                      >
                        Sl
                      </th>
                      <th
                        className="bg-black text-white border text-center"
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "15%",
                        }}
                      >
                        App ID
                      </th>
                      <th
                        className="bg-black text-white border text-center"
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "30%",

                          
                        }}
                      >
                        Content
                      </th>
                      <th
                        className="bg-black text-white border text-center"
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "10%",
                        }}
                      >
                        Length
                      </th>
                      <th
                        className="bg-black text-white border text-center"
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "10%",
                        }}
                      >
                        Date
                      </th>
                      <th
                        className="bg-black text-white border text-center"
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "10%",
                        }}
                      >
                        Status
                      </th>
                      <th
                        className="bg-black text-white border text-center"
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "10%",
                        }}
                      >
                        Edit
                      </th>
                      <th
                        className="bg-black text-white border text-center"
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "10%",
                        }}
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>

                  {data && (
                    <tbody style={{ fontSize: "14px" }}>
                      {data.map((item, index) => (
                        <tr className="px-2" key={index}>
                          <td className="align-middle text-center">
                            {index + 1}
                          </td>
                          <td className="align-middle text-center ">
                            {item.app_id}
                          </td>
                          <td
                            className="align-middle"
                            style={{ wordWrap: "break-word" }}
                          >
                            {item.content}
                          </td>
                          <td className="align-middle text-center">
                            {item.content.length}
                          </td>
                          <td className="align-middle text-center">
                            {item.formatted_date}
                          </td>
                          <td className="text-center align-middle">
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
                          <td className="text-center align-middle">
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
                          <td className="text-center align-middle">
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
                  )}
                </table>
                <div className="mt-3">
                  <p className="text-start">
                    <span className="fw-normal" style={{ color: "#801414" }}>
                      <span className="fw-bold">Note:</span> Maximum length of a
                      content is 300 characters.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}

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
    );
};

export default AllContent;