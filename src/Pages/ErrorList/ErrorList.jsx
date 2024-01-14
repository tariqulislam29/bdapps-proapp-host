import React from 'react';
import Navbar from '../Navbar/Navbar';

const ErrorList = () => {
    return (
     <>
     <Navbar></Navbar>
      <div className="px-3">
        <div className="row gx-2">
          <div className="col-12 col-sm-12 col-lg-12 col-md-12">
            <div className="py-3 w-100">
              <table className="table w-100 border rounded-3">
                <thead>
                  <tr>
                    <td
                      colSpan={12}
                      className="text-start text-white"
                      style={{ background: "black", fontSize: "14px" }}
                    >
                      <div>
                        <h6 className="text-start  rounded-top  pt-2 ps-2">
                          Error List
                        </h6>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ fontSize: "13px" }}>
                    <th style={{ paddingTop: "30px" }}>Sl</th>
                    <th>App Id</th>
                    <th>Date</th>
                    <th>Raw Response</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "12px" }}>
                  <tr>
                    <td>1</td>
                    <td>APP_018387</td>
                    <td>voc99</td>
                    <td>935</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div></>
    );
};

export default ErrorList;