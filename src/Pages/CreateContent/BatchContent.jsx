import React from 'react';
import Navbar from '../Navbar/Navbar';

const BatchContent = () => {
  
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
                          Batch Upload
                        </h6>
                        <div>
                          <button type="submit" class="btn border text-white  ">
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
                      <div class="container py-5">
                        <h6 style={{ fontSize: "14px" }}>
                          Upload Excel File:
                        </h6>
                        <div class="mb-3">
                          <input
                            class="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                        <div>
                          {" "}
                          <button
                            type="submit"
                            class="btn text-white w-100"
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
            <div class="mb-3">
              <h6 class="text-start">Download Sample File</h6>
              <div class="row justify-content-start ">
                <div class="col-md-6 ">
                  <a
                    href='sample.xlsx'
                   
                    class="btn btn-primary btn-block"
                  >
                    <i class="fa fa-download me-1"></i> Download
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
          <div class="col-1 col-sm-1 col-lg-3 col-md-3"></div>
        </div>
      </div></>
    );
};

export default BatchContent;