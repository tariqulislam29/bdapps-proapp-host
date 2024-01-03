import React from 'react';

const UpdateProfile = () => {
    return (
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
                        Update My Profile
                      </h6>
                    </td>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "12px" }}>
                  <tr>
                    <td>
                      <form className="px-5 mb-5 py-3">
                        <div class="form-group mb-3">
                          <label className="mb-1 fw-bold" for="email">
                            Email:
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="tariqbd1998@gmail.com"
                                                    name="email" 
                                                    disabled
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label className="mb-1 fw-bold" for="name">
                            Name:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Enter name"
                            name="name"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label className="mb-1 fw-bold" for="phone">
                            Phone:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="phone"
                            placeholder="Enter phone"
                            name="phone"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label className="mb-1 fw-bold" for="gender">
                            Gender:
                          </label>
                          <select
                            class="form-control"
                            id="gender"
                            name="gender"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div class="form-group mb-3">
                          <label className="mb-1 fw-bold" for="dob">
                            Date of Birth:
                          </label>
                          <input
                            type="date"
                            class="form-control"
                            id="dob"
                            name="dob"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label className="mb-1 fw-bold" for="division">
                            Division:
                          </label>
                          <select
                            class="form-control"
                            id="division"
                            name="division"
                          >
                            <option value="dhaka">Dhaka</option>
                            {/* <!-- Add other divisions here --> */}
                          </select>
                        </div>
                        <div class="form-group mb-3">
                          <label className="mb-1 fw-bold" for="institute">
                            Institute:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="institute"
                            placeholder="Enter institute"
                            name="institute"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label className="mb-1 fw-bold" for="study_level">
                            Study Level:
                          </label>
                          <select
                            class="form-control"
                            id="study_level"
                            name="study_level"
                          >
                            <option value="university">University</option>
                            {/* <!-- Add other study levels here --> */}
                          </select>
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
      </div>
    );
};

export default UpdateProfile;