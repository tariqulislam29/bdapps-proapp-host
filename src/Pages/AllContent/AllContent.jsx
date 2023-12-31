import React from 'react';
import Navbar from '../Navbar/Navbar';

const AllContent = () => {
    return (
     <>
    <Navbar></Navbar>
     <div className="px-3">
        <div class="row gx-2">
          <div class="col-12 col-sm-12 col-lg-12 col-md-12">
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
                          Content List
                        </h6>
                        <div>
                          <button type="submit" class="btn border text-white  ">
                            Create a new Content
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={12}>
                      <div className="row">
                        <div class="col-sm-12 col-12 col-lg-3 col-md-3 mb-3 row">
                          <label
                            for="Start"
                            class="col-sm-4 text-end col-form-label"
                          >
                            Start:
                          </label>
                          <div class="col-sm-8">
                            <input
                              type="date"
                              class="form-control"
                              id="Start"
                            />
                          </div>
                        </div>
                        <div class=" col-sm-12 col-12 col-lg-3 col-md-3 mb-3 row">
                          <label
                            for="Start"
                            class="col-sm-4 text-end col-form-label"
                          >
                            End:
                          </label>
                          <div class="col-sm-8">
                            <input type="date" class="form-control" id="End" />
                          </div>
                        </div>
                        <div class="col-sm-12 col-12 col-lg-3 col-md-3 mb-3 row">
                          <label
                            for="appId"
                            class="col-sm-4 text-end col-form-label"
                          >
                            App ID:
                          </label>
                          <div class="col-sm-8">
                            <select
                              class="form-control"
                              id="appId"
                              name="appId"
                            >
                              <option value="1234">1234</option>
                              <option value="3423">3423</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12 col-12 col-lg-3 col-md-3">
                          {" "}
                          <button
                            type="submit"
                            class="btn text-white "
                            style={{ background: "green" }}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ fontSize: "14px" }}>
                    <th style={{ paddingTop: "30px" }}>Sl</th>
                    <th>App Id</th>
                    <th>Content</th>
                    <th>Length</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "12px" }}>
                  <tr>
                    <td>1</td>
                    <td>APP_018387</td>
                    <td>voc99</td>
                    <td>935</td>
                    <td>935</td>
                    <td>935</td>
                  </tr>
                </tbody>
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
      </div></>
    );
};

export default AllContent;