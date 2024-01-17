import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../Api/baseApi';
import Navbar from '../Navbar/Navbar';

const MyProfile = () => {
   const { userId } = useParams();
//    console.log(userId);
    const [data, setData] = useState();
   useEffect(() => {
     // Make a GET request using Axios
     axios
       .get(`${api}/getregistration`, {
         headers: {
           id: userId,
         },
       })
         .then((response) => {
          console.log(response);
         // Handle the successful response
         setData(response.data.data[0]);
       })
       .catch((error) => {
         // Handle errors
         alert(error.message);
       });
   }, [userId]);
    console.log(data);
    const originalDateString = data?.dob;

    // Create a Date object from the original date string
    const originalDate = new Date(originalDateString);

    // Extract the year, month, and day components
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
    const day = String(originalDate.getDate()).padStart(2, "0");

    // Create a new formatted date string
    const formattedDateString = `${day}-${month}-${year}`;
    return (
      <>
        <Navbar></Navbar>
        <div>
          {!data ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
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
                            My Profile
                          </h6>
                        </td>
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: "14px" }}>
                      <tr>
                        <td style={{ width: "40%" }} className="fw-bold">
                          Name:
                        </td>
                        <td style={{ width: "60%", wordWrap: "break-word" }}>
                          {data.name}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "40%" }} className="fw-bold">
                          Email:
                        </td>
                        <td style={{ width: "60%", wordWrap: "break-word" }}>
                          {data.email}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "40%" }} className="fw-bold">
                          Phone:
                        </td>
                        <td style={{ width: "60%", wordWrap: "break-word" }}>
                          0{data.phone}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "40%" }} className="fw-bold">
                          Gender:
                        </td>
                        <td style={{ width: "60%", wordWrap: "break-word" }}>
                          {data.gender}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "40%" }} className="fw-bold">
                          Division:
                        </td>
                        <td style={{ width: "60%", wordWrap: "break-word" }}>
                          {data.division}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "40%" }} className="fw-bold">
                          Institute:
                        </td>
                        <td style={{ width: "60%", wordWrap: "break-word" }}>
                          {data.institute}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "40%" }} className="fw-bold">
                          Study Level:
                        </td>
                        <td style={{ width: "60%", wordWrap: "break-word" }}>
                          {data.study_level}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "40%" }} className="fw-bold">
                          Date of Birth:
                        </td>
                        <td style={{ width: "60%", wordWrap: "break-word" }}>
                          {formattedDateString}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "40%" }} className="fw-bold">
                          Edit:
                        </td>
                        <td style={{ width: "60%" }}>
                          <Link to={`/updateProfile/${userId}`}>
                            <button
                              type="submit"
                              className="btn border text-white"
                              style={{ background: "black" }}
                            >
                              Edit Your Profile
                            </button>{" "}
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>
            </div>
          )}
        </div>
      </>
    );
};

export default MyProfile;