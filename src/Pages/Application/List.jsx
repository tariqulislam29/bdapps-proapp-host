import React from 'react';
import Navbar from '../Navbar/Navbar';

const List = () => {
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
                                        style={{ background: "green", fontSize: "14px" }}
                                    >
                                        <div className="d-flex  justify-content-between rounded-top">
                                            <h6 className="text-start  rounded-top  pt-2 ps-2">
                                                App List
                                            </h6>
                                            <div>
                                                <button type="submit" className="btn border text-white  ">
                                                    Create a new Content
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{ fontSize: "13px"}}>
                                    <th  style={{ paddingTop: "30px"}}>App Id</th>
                                    <th>App Password</th>
                                    <th>SMS Keyword</th>
                                    <th>USSD Keyword</th>
                                    <th>Delivery Time</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: "12px" }}>
                                <tr >
                                    <td >APP_018387</td>
                                    <td>234334</td>
                                    <td>voc99</td>
                                    <td>935</td>
                                    <td>10:00:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
                <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>
            </div>
        </div></>
    );
};

export default List;