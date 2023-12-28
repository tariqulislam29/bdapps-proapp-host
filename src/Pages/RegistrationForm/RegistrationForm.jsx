import React from 'react';

const RegistrationForm = () => {
    return (
      <>
        <div class="container  " style={{ height: "97vh" }}>
          <div class="row pt-5 pb-5 rounded-3 ">
            <div class="col-sm-1 col-1 col-lg-3 col-md-3"></div>
            <div class="col-sm-12 col-12 col-lg-6 col-md-6">
              <div className=" border rounded-3">
                <div className="d-flex bg-danger justify-content-between rounded-top">
                  <h5 className="text-start  rounded-top text-white py-2 ps-2">
                    Registration
                  </h5>
                  <div>
                    <button
                      type="submit"
                      class="btn btn-danger border text-white m-2"
                    >
                      Login
                    </button>
                  </div>
                </div>
                <form className="px-5 mb-5 py-3">
                  <div class="form-group mb-3">
                    <label className="mb-1" for="email">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label className="mb-1" for="name">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter name"
                      name="name"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label className="mb-1" for="phone">Phone:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Enter phone"
                      name="phone"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label className="mb-1" for="gender">Gender:</label>
                    <select class="form-control" id="gender" name="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div class="form-group mb-3">
                    <label className="mb-1" for="dob">Date of Birth:</label>
                    <input
                      type="date"
                      class="form-control"
                      id="dob"
                      name="dob"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label className="mb-1" for="division">Division:</label>
                    <select class="form-control" id="division" name="division">
                      <option value="dhaka">Dhaka</option>
                      {/* <!-- Add other divisions here --> */}
                    </select>
                  </div>
                  <div class="form-group mb-3">
                    <label className="mb-1" for="institute">Institute:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="institute"
                      placeholder="Enter institute"
                      name="institute"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label className="mb-1" for="study_level">Study Level:</label>
                    <select
                      class="form-control"
                      id="study_level"
                      name="study_level"
                    >
                      <option value="university">University</option>
                      {/* <!-- Add other study levels here --> */}
                    </select>
                  </div>
                  <div class="form-group mb-3">
                    <label className="mb-1" for="password">Password:</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter password"
                      name="password"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label className="mb-1" for="confirm_password">Confirmation Password:</label>
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
                    <button type="submit" class="btn btn-danger w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-sm-1 col-1 col-lg-3 col-md-3"></div>
          </div>
        </div>
      </>
    );
};

export default RegistrationForm;