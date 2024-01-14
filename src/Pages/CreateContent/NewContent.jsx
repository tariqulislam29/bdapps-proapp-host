import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Auth from '../Api/Auth';
import { api } from '../Api/baseApi';
import Navbar from '../Navbar/Navbar';

const NewContent = () => {

  const authData = Auth();
  const [appId, setAppId] = useState();
  const [checkLastConDate, setCheckLastConDate] = useState();
// console.log(authData);
     const [forms, setForms] = useState([
       {  date: "", content: "" },
     ]);
  const [subKeywordOptions, setSubKeywordOptions] = useState([]);
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(`${api}/getnewapp`, {
        headers: {
          id: authData.id,
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
    const data = [];
     const handleInputChange = (index, name, value) => {
       const updatedForms = [...forms];
       updatedForms[index][name] = value;
       setForms(updatedForms);
     };

  const handleAddForm = (e, index) => {
    e.preventDefault();

    // Check if the required fields are filled
    if (
      
      forms[index].date === "" ||
      forms[index].content === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Update the state using the state updater function
    const currentDate = new Date(forms[index].date);
    currentDate.setDate(currentDate.getDate() + 1);

    // Set the default value of the date to tomorrow
    setForms((prevForms) => [
      ...prevForms,
      {
       
        date: currentDate.toISOString().split("T")[0],
        content: "",
      },
    ]);
  };

  const currentDate = new Date().toLocaleDateString("en-CA"); // 'en-CA' stands for English (Canada)
  // console.log(currentDate);
     const handleFormSubmit = () => {
       //  Filter out objects with empty values
      
       if (appId) {
         const hasDuplicates = forms.some((form, index) => {
           const date = form.date;
           return forms
             .slice(0, index)
             .some((prevForm) => prevForm.date === date);
         });

         if (hasDuplicates) {
           alert(
             "Duplicate dates found. Please make sure each date is unique."
           );
           return;
         }
         const reg_id = authData.id;
         const new_id = appId;
       const data = forms
         .filter((obj) =>
           Object.values(obj).every((value) => value !== null && value !== "")
         )
         .map((obj) => ({ ...obj, new_id, reg_id }));
       
        
        
console.log(data);
         axios({
           method: "post",
           url: `${api}/postContent`,
           data,
         }).then((res) => {
           if (res.data.data.affectedRows == data.length) {
             alert("Successfully Update Content");
             setForms([{ date: "", content: "" }])
             setAppId(0); 
             setCheckLastConDate(null);
           }
         
         });
        
        
       } else {
         alert("Please select App ID");
       }
  };


  const handleDeleteForm = (e, index) => {
    e.preventDefault();
    const updatedData = [...forms];

    // Check if the index is valid
    if (index >= 0 && index < updatedData.length) {
      // Use splice to remove the item at the specified index
      updatedData.splice(index, 1);
    }
     setForms(updatedData);
   
  };
  const handleAppIdChange = e => {
    const id = e.target.value;
   
    setAppId(parseInt(id));

axios
  .get(`${api}/getCheckLastConDate`, {
    headers: {
      id: id,
      reg_id: authData.id,
    },
  })
  .then((response) => {
    // Handle the successful response
    console.log(response.data.data);
    setCheckLastConDate(response.data.data[0].formatted_date);
  })
  .catch((error) => {
    // Handle errors
    alert(error.message);
  });


  }

    return (
      <>
        <Navbar></Navbar>
        <div className="px-1">
          <div className="row gx-2">
            <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>

            <div className="col-12 col-sm-12 col-lg-6 col-md-6">
              <div className="pt-2">
                <span
                  className="fw-normal text-start"
                  style={{ fontSize: "12px" }}
                >
                  <span className="fw-bold">Note:</span> Maximum length of a
                  content is 300 characters.
                </span>
              </div>
              <div className=" w-100 py-2">
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
                            Create a New Content
                          </h6>
                          <div>
                            <button
                              type="submit"
                              className="btn border text-white  "
                            >
                              All Content
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "10px" }}>
                    <div className="mb-3 ">
                      <div>
                        <div className="d-flex  justify-content-between">
                          <div>
                            <label
                              className="fw-bold  ms-2 mb-1"
                              style={{ fontSize: "14px" }}
                            >
                              APP ID
                            </label>
                          </div>
                          <label
                            className="fw-normal text-danger  ms-2 mb-1"
                            style={{ fontSize: "14px" }}
                          >
                            {checkLastConDate
                              ? `Last Date: ${checkLastConDate}`
                              : ""}
                          </label>
                        </div>

                        <select
                          className="w-100 form-select bg-black text-white"
                          onChange={(e) => handleAppIdChange(e)}
                          value={appId}
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
                    {forms.map((form, index) => (
                      <>
                        <tr key={index} className="mb-3">
                          <td colSpan={12}>
                            <div className="p-2 border ">
                              {" "}
                              <form key={index}>
                                <div className=" mb-1">
                                  <label
                                    className="fw-bold  mb-1"
                                    style={{ fontSize: "14px" }}
                                  >
                                    Date:
                                  </label>
                                  <div>
                                    <input
                                      type="date"
                                      className="w-100 form-control"
                                      value={form.date}
                                      min={currentDate}
                                      onChange={(e) =>
                                        handleInputChange(
                                          index,
                                          "date",
                                          e.target.value
                                        )
                                      }
                                      required
                                    />
                                  </div>
                                </div>
                                <div className=" mb-1">
                                  <label
                                    className="fw-bold  mb-1"
                                    style={{ fontSize: "14px" }}
                                  >
                                    Content:
                                  </label>
                                  <div>
                                    <textarea
                                      value={form.content}
                                      className="w-100 form-control"
                                      onChange={(e) =>
                                        handleInputChange(
                                          index,
                                          "content",
                                          e.target.value
                                        )
                                      }
                                      required
                                    />
                                    {form.content.length > 0 &&
                                      form.content.length < 301 && (
                                        <p
                                          className="mt-3 py-2 px-2 fw-bold"
                                          style={{
                                            fontSize: "14px",
                                            background: "#dff0d8",
                                            color: "#3c763d",
                                            fontSize: "12px",
                                          }}
                                        >
                                          Character count: {form.content.length}
                                          /300
                                        </p>
                                      )}
                                    {form.content.length > 0 &&
                                      form.content.length > 300 && (
                                        <p
                                          className="mt-3 py-2 px-2 fw-bold"
                                          style={{
                                            fontSize: "14px",
                                            background: "#f2dede",
                                            color: "#a94442",
                                            fontSize: "12px",
                                          }}
                                        >
                                          Character count: {form.content.length}
                                          /300
                                        </p>
                                      )}
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="bg-success text-white px-2 py-1 rounded-2 mt-2"
                                  onClick={(e) => handleAddForm(e, index)}
                                  style={{ fontSize: "13px" }}
                                >
                                  More +
                                </button>
                                {index > 0 && (
                                  <button
                                    type="submit"
                                    className="bg-danger text-white px-2 py-1 rounded-2 mt-2 ms-2"
                                    onClick={(e) => handleDeleteForm(e, index)}
                                    style={{ fontSize: "13px" }}
                                  >
                                    Delete
                                  </button>
                                )}
                              </form>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                  <div className="">
                    <div>
                      <button
                        onClick={handleFormSubmit}
                        className="w-100 text-white"
                        style={{ background: "black" }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </table>
              </div>
            </div>
            <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>
          </div>
        </div>
      </>
    );
};

export default NewContent;