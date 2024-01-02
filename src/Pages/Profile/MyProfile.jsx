import React from 'react';

const MyProfile = () => {
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
                                        My Profile
                                        </h6>
                                       
                                   
                                </td>
                            </tr>
                           
                        </thead>
                        <tbody style={{ fontSize: "12px" }}>
                            <tr >
                               <td  style={{width:"40%"}} className='fw-bold'>Name:</td>
                               <td  style={{width:"60%",wordWrap:"break-word"}}>Tariq</td>
                            </tr>
                            <tr >
                               <td  style={{width:"40%"}} className='fw-bold'>Email:</td>
                               <td  style={{width:"60%",wordWrap:"break-word"}}>tariqadam1998@gmail.com</td>
                            </tr>
                            <tr >
                               <td  style={{width:"40%"}} className='fw-bold'>Phone:</td>
                               <td  style={{width:"60%",wordWrap:"break-word"}}>01625796966</td>
                            </tr>
                            <tr >
                               <td  style={{width:"40%"}} className='fw-bold'>Gender:</td>
                               <td  style={{width:"60%",wordWrap:"break-word"}}>Male</td>
                            </tr>
                            <tr >
                               <td  style={{width:"40%"}} className='fw-bold'>Division:</td>
                               <td  style={{width:"60%",wordWrap:"break-word"}}>Dhaka</td>
                            </tr>
                            <tr >
                               <td  style={{width:"40%"}} className='fw-bold'>Institute:</td>
                               <td  style={{width:"60%",wordWrap:"break-word"}}>NUB</td>
                            </tr>
                            <tr >
                               <td  style={{width:"40%"}} className='fw-bold'>Study Level:</td>
                               <td  style={{width:"60%",wordWrap:"break-word"}}>University</td>
                            </tr>
                            <tr >
                               <td  style={{width:"40%"}} className='fw-bold'>Date of Birth:</td>
                               <td  style={{width:"60%",wordWrap:"break-word"}}>2000-02-01</td>
                            </tr>
                            <tr >
                               <td  style={{width:"40%"}} className='fw-bold'>Edit:</td>
                               <td  style={{width:"60%"}}>
                                 <button type="submit" class="btn border text-white" style={{ background: "green"}}>
                         Edit Your Profile
                        </button></td>
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

export default MyProfile;