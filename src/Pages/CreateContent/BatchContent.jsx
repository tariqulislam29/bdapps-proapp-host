import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../Api/Auth';
import { api } from '../Api/baseApi';
import Navbar from '../Navbar/Navbar';

const BatchContent = () => {
  const [file, setFile] = useState(null);
   const [fileName, setFileName] = useState("No file chosen");
  const authData = Auth();
  const [appId, setAppId] = useState();
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
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      setFile(null);
      setFileName("No file chosen");
    }
  };
 const navigate = useNavigate();
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
// console.log(formData);
    try {
      await axios.post(`${api}/excelfileupload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          reg_id: authData.id,
          id: parseInt(appId),
        },
      }).then(res => {
        console.log(res);
        if (res) {
          alert("Successfully Update Content");
          setFile(null);
          navigate("/allContent");
          setFileName("No file chosen");
        }
      })
     
    } catch (error) {
      console.error("Error uploading file:", error);
    }
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
                            Batch Upload
                          </h6>
                          <div>
                            <Link to={"/allContent"}>
                              <button
                                type="submit"
                                className="btn border text-white  "
                              >
                                All Content
                              </button>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "10px" }}>
                    <tr>
                      <td>
                        {" "}
                        <div className="mb-3 ">
                          <div>
                            <div>
                              <label
                                className="fw-bold  ms-2 mb-1"
                                style={{ fontSize: "14px" }}
                              >
                                APP ID
                              </label>
                            </div>

                            <select
                              className="w-100 form-select bg-black text-white"
                              onChange={(e) => setAppId(e.target.value)}
                              required
                            >
                              <option>select app id</option>
                              {/* Map your options here */}
                              {subKeywordOptions.map((option) => (
                                <option key={option.id} value={option.id}>
                                  {option.app_id}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="container pb-5">
                          <h6 style={{ fontSize: "14px" }}>
                            Upload Excel File:
                          </h6>
                          <div className="mb-3">
                            <input
                              className="form-control"
                              type="file"
                              id="formFile"
                              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                              onChange={handleFileChange}
                            />
                          </div>
                          <div>
                            {" "}
                            <button
                              type="submit"
                              onClick={handleUpload}
                              className="btn text-white w-100"
                              style={{ background: "black" }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mb-3">
                <h6 className="text-start">Download Sample File</h6>
                <div className="row justify-content-start ">
                  <div className="col-md-6 ">
                    <a href="sample.xlsx" className="btn btn-primary btn-block">
                      <i className="fa fa-download me-1"></i> Download
                    </a>
                  </div>
                </div>
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
        </div>
      </>
    );
};

export default BatchContent;