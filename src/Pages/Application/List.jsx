import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Api/Auth';
import { api } from '../Api/baseApi';
import Navbar from '../Navbar/Navbar';

const List = () => {
     const data1 = Auth();
     const userId = data1.id;
 const [data, setData] = useState();
 useEffect(() => {
   // Make a GET request using Axios
   axios
     .get(`${api}/getnewapp`, {
       headers: {
         id: userId,
       },
     })
     .then((response) => {
         // Handle the successful response
        //  console.log(response.data.data);
       setData(response.data.data);
     })
     .catch((error) => {
       // Handle errors
       alert(error.message);
     });
 }, [userId]);
    console.log(data);
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
                          <div className="d-flex  justify-content-between rounded-top">
                            <h6 className="text-start  rounded-top  pt-2 ps-2">
                              App List
                            </h6>
                            <div>
                              <Link to={"/newContent"}>
                                {" "}
                                <button
                                  type="submit"
                                  className="btn border text-white  "
                                >
                                  Create a new Content
                                </button>
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr style={{ fontSize: "13px" }}>
                        <th style={{ paddingTop: "30px" }}>App Id</th>
                        <th>App Password</th>
                        <th>SMS Keyword</th>
                        <th>USSD Keyword</th>
                        <th>Delivery Time</th>
                      </tr>
                    </thead>
                   
                    <tbody style={{ fontSize: "12px" }}>
                      {data.map((item) => (
                        <tr>
                          <td>{item.app_id}</td>
                          <td>{item.api_key}</td>
                          <td>{item.sms_keyword}</td>
                          <td>{item.ussd_keyword}</td>
                          <td>{item.delivery_time}</td>
                        </tr>
                      ))}
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

export default List;