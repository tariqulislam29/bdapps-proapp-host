import React from "react";

const HomePage = () => {
  return (
    <div>
     

      {/* body section start  */}
      <div class=" px-4 text-center">
        <div class="row gx-2">
          <div class="col-12 col-sm-12 col-lg-3 col-md-3">
            <div class="py-2 px-2">
              <div class="py-2 w-100">
                <table class="table w-100 border rounded-3">
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
                        class="btn btn-primary bg-primary text-white my-2 mx-1"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Total
                        <span
                          class="badge bg-white text-primary rounded-circle ms-1 "
                          style={{ fontSize: "12px" }}
                        >
                          1
                        </span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-success bg-success text-white my-2 mx-1"
                        style={{ fontSize: "12px" }}
                      >
                        Send
                        <span
                          class="badge bg-white text-success rounded-circle ms-1 "
                          style={{ fontSize: "12px" }}
                        >
                          2
                        </span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-warning bg-warning text-white my-2 mx-1"
                        style={{ fontSize: "12px" }}
                      >
                        Pending
                        <span
                          class="badge bg-white text-warning rounded-circle ms-1 "
                          style={{ fontSize: "12px" }}
                        >
                          3
                        </span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger bg-danger text-white my-2 mx-1"
                        style={{ fontSize: "12px" }}
                      >
                        Failed
                        <span
                          class="badge bg-white text-danger rounded-circle ms-1 "
                          style={{ fontSize: "12px" }}
                        >
                          3
                        </span>
                      </button>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="py-2 w-100">
                <table class="table w-100 border rounded-3">
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
                        class="btn btn-primary bg-primary text-white my-2 mx-1"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Total
                        <span
                          class="badge bg-white text-primary rounded-circle ms-1 "
                          style={{ fontSize: "12px" }}
                        >
                          1
                        </span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-success bg-success text-white my-2 mx-1"
                        style={{ fontSize: "12px" }}
                      >
                        Send
                        <span
                          class="badge bg-white text-success rounded-circle ms-1 "
                          style={{ fontSize: "12px" }}
                        >
                          2
                        </span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-warning bg-warning text-white my-2 mx-1"
                        style={{ fontSize: "12px" }}
                      >
                        Pending
                        <span
                          class="badge bg-white text-warning rounded-circle ms-1 "
                          style={{ fontSize: "12px" }}
                        >
                          3
                        </span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger bg-danger text-white my-2 mx-1"
                        style={{ fontSize: "12px" }}
                      >
                        Failed
                        <span
                          class="badge bg-white text-danger rounded-circle ms-1 "
                          style={{ fontSize: "12px" }}
                        >
                          3
                        </span>
                      </button>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="py-2 w-100">
                <table class="table w-100 border rounded-3">
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
                        class="btn btn-primary bg-primary text-white my-2 mx-2"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Total
                        <span
                          class="badge bg-white text-primary rounded-circle ms-1 "
                          style={{ fontSize: "12px" }}
                        >
                          1
                        </span>
                      </button>
                    
                    
                   
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="py-2 w-100">
                <table class="table w-100 border rounded-3">
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
                  <tbody style={{ fontSize: "10px" }}>
                    <tr>
                      <th>#</th>
                      <th>App ID</th>
                      <th>Time</th>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>1234</td>
                      <td>10:30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-lg-9 col-md-9">
            <div class="py-3 w-100">
              <table class="table w-100 border rounded-3">
                <thead>
                  <tr>
                    <th
                      colSpan={12}
                      className="text-start text-white"
                      style={{ background: "green", fontSize: "14px" }}
                    >
                      Today's Content
                    </th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "10px" }}>
                  <tr>
                    <th>App ID</th>
                    <th>Content</th>
                    <th>Length</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="py-2 w-100">
              <table class="table w-100 border rounded-3">
                <thead>
                  <tr>
                    <th
                      colSpan={12}
                      className="text-start text-white"
                      style={{ background: "green", fontSize: "14px" }}
                    >
                      Tomorrows's Content
                    </th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "10px" }}>
                  <tr>
                    <th>App ID</th>
                    <th>Content</th>
                    <th>Length</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
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
        </div>
      </div>
      {/* body section end  */}
    </div>
  );
};

export default HomePage;
