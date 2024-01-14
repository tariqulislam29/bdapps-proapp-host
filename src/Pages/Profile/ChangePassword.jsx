import axios from 'axios';
import { React } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../Api/baseApi';
import Navbar from '../Navbar/Navbar';
const ChangePassword = () => {
 const {
   register,
   handleSubmit,
   watch,
   formState: { errors },
  } = useForm();
  const { userId } = useParams();
   const navigate = useNavigate();
 const onSubmit = (data) => {
   if (data.newpassword === data.confirmpassword) {
     data.id = parseInt(userId);
     console.log(data);
     axios({
       method: "put",
       url: `${api}/updatePassword`,
       data,
     }).then((res) => {
       if (res) {
         if (res.data.error) {
           alert(res.data.message);
         }
         if (res.data.data.affectedRows == 1) {
           alert("Successfully Updated Password");
           const removeCookie = (data) => {
             document.cookie = `${data}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
navigate("/login");
           };

           // Example usage
           removeCookie("data");
           // location.reload();
         }
       }
     });
   } else {
     alert("Password Do Not Match");
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
                        <h6 className="text-start  rounded-top  pt-2 ps-2">
                          Change Password
                        </h6>
                      </td>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "12px" }}>
                    <tr>
                      <td>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="px-5 mb-5 py-3"
                        >
                          <div className="form-group mb-3">
                            <label className="mb-1" for="currentPassword">
                              Current Password:
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="currentPassword"
                              placeholder="Enter current password"
                              name="password"
                              {...register("password", { required: true })}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1" for="password">
                              New Password:
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Enter password"
                              {...register("newpassword", { required: true })}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="mb-1" for="confirm_password">
                              Confirmation Password:
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="confirm_password"
                              placeholder="Confirm password"
                              name="confirm_password"
                              {...register("confirmpassword", {
                                required: true,
                              })}
                            />
                          </div>
                          <div>
                            {" "}
                            <button
                              type="submit"
                              className="btn text-white w-100"
                              style={{ background: "black" }}
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
            <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>
          </div>
        </div>
      </>
    );
};

export default ChangePassword;