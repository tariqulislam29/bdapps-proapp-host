import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const NewContent = () => {
     const [forms, setForms] = useState([
       { subKeyword: "", date: "", content: "" },
     ]);

    const data = [];
     const handleInputChange = (index, name, value) => {
       const updatedForms = [...forms];
       updatedForms[index][name] = value;
       setForms(updatedForms);
     };

    const handleAddForm = (e,index) => {
       e.preventDefault();
       console.log(index);
       setForms([...forms, { subKeyword: "", date: "", content: "" }]);
     };

     const handleFormSubmit = () => {
       // You can handle the submission or store the forms array as needed
       console.log("Forms Data:", forms);
     };

    return (
     <>
     <Navbar></Navbar>
      <div className='px-1'>
        <div className="row gx-2">
          <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>

          <div className="col-12 col-sm-12 col-lg-6 col-md-6">
            <div className="pt-2">
             
                <span className="fw-normal text-start" style={{ fontSize: "12px" }}>
                  <span className="fw-bold">Note:</span> Maximum length of a
                  content is 300 characters.
                </span>
            
            </div>
            <div className=" w-100 py-2">
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
                          Create a New Content
                        </h6>
                        <div>
                          <button type="submit" className="btn border text-white  ">
                            All Content
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "10px" }}>
                  {forms.map((form, index) => (
                    <>
                      <tr className="mb-3">
                        <td colSpan={12}>
                          <div className="p-2 border ">
                            {" "}
                            <form key={index}>
                              <div className=" mb-1">
                                <label className="fw-bold  mb-1"  style={{ fontSize: "14px" }}>
                                  Sub_keyword:
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    value={form.subKeyword}
                                    className="w-100 form-control"
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "subKeyword",
                                        e.target.value
                                      )
                                    }
                                    required
                                  />
                                </div>
                              </div>
                              <div className=" mb-1">
                              <label className="fw-bold  mb-1"  style={{ fontSize: "14px" }}>
                                  Date:
                                </label>
                                <div>
                                  <input
                                    type="date"
                                    className="w-100 form-control"
                                    value={form.date}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "date",
                                        e.target.value
                                      )
                                    }
                                    required
                                  />
                                </div>
                              </div>
                              <div className=" mb-1">
                              <label className="fw-bold  mb-1"  style={{ fontSize: "14px" }}>
                                  Content:
                                </label>
                                <div>
                                  <textarea
                                    value={form.content}
                                    className="w-100 form-control"
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "content",
                                        e.target.value
                                      )
                                    }
                                    required
                                  />
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="bg-success text-white px-2 py-1 rounded-2 mt-2"
                                onClick={(e) => handleAddForm(e,index)}
                                style={{ fontSize: "13px" }}
                              >
                                More +
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
                <div className="">
                  <div>
                    <button  onClick={handleFormSubmit} className="w-100 text-white" style={{ background: "green"}}>
                      Submit
                    </button>
                  </div>
                </div>
              </table>
            </div>
          </div>
          <div className="col-1 col-sm-1 col-lg-3 col-md-3"></div>
        </div>
      </div></>
    );
};

export default NewContent;