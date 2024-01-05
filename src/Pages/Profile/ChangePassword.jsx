import React from 'react';
import Navbar from '../Navbar/Navbar';

const ChangePassword = () => {
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
                      <h6 className="text-start  rounded-top  pt-2 ps-2">
                        Change Password
                      </h6>
                    </td>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "12px" }}>
                  <tr>
                    <td>
                      <form className="px-5 mb-5 py-3">
                        <div class="form-group mb-3">
                          <label className="mb-1" for="currentPassword">
                            Current Password:
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            id="currentPassword"
                            placeholder="Enter current password"
                            name="password"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label className="mb-1" for="password">
                           New Password:
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Enter password"
                            name="password"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label className="mb-1" for="confirm_password">
                            Confirmation Password:
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            id="confirm_password"
                            placeholder="Confirm password"
                            name="confirm_password"
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
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-1 col-sm-1 col-lg-3 col-md-3"></div>
        </div>
      </div></>
    );
};

export default ChangePassword;