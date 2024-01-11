import React from 'react';
import Navbar from '../Navbar/Navbar';

const BatchContent = () => {
  
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
                          Batch Upload
                        </h6>
                        <div>
                          <button type="submit" className="btn border text-white  ">
                            All Content
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
                          Upload Excel File:
                        </h6>
                        <div className="mb-3">
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                        <div>
                          {" "}
                          <button
                            type="submit"
                            className="btn text-white w-100"
                            style={{ background: "green" }}
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
                  <a
                    href='sample.xlsx'
                   
                    className="btn btn-primary btn-block"
                  >
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
      </div></>
    );
};

export default BatchContent;