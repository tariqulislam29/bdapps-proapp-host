import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../Api/Auth';

const Navbar = () => {
  const data = Auth();
  const navigate = useNavigate();
  const handleLogOut = () => {
     const confirmed = window.confirm(
       "Are you sure you want to Log Out?"
     );

     if (confirmed) {
       const removeCookie = (data) => {
   document.cookie = `${data}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  window.location.href = "/login";
 };
 // Example usage
   removeCookie("data");
      
     } else {
      
       console.log("Canceled.");
     }  
  }
    return (
      <div>
        {/* menu section start */}
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
          data-bs-theme="dark"
          style={{ fontSize: "13px" }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                HostLab
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-2">
                  <Link
                    to="/home"
                    className="nav-link active text-decoration-none"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item me-2 dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-plus"></i> Create Content
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/batchContent" className="dropdown-item">
                        <i className="fa fa-file-medical"></i> Batch
                      </Link>
                    </li>
                    <li>
                      <Link to="/newContent" className="dropdown-item">
                        <i className="fa fa-pen"></i> New
                      </Link>
                    </li>
                    <li>
                      <Link to="/checkLength" className="dropdown-item">
                        <i className="fa fa-ruler-combined"></i> Check Length
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item me-2">
                  <Link to="/allContent" className="nav-link ">
                    <i className="fa fa-table"></i> All Content
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link to="/errorList" className="nav-link ">
                    <i className="fa fa-exclamation"></i> Error List
                  </Link>
                </li>
                <li className="nav-item me-2 dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-box-archive"></i> Application
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/application/list" className="dropdown-item">
                        <i className="fa fa-list"></i> List
                      </Link>
                    </li>
                    <li>
                      <Link to="/application/new" className="dropdown-item">
                        <i className="fa fa-pen"></i> New
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="d-flex ">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item me-2 dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-user"></i> {data.email}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to={`/myProfile/${data.id}`}
                          className="dropdown-item"
                        >
                          <i className="fa fa-list"></i> My profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/changePassword/${data.id}`}
                        
                          className="dropdown-item"
                        >
                          <i className="fa fa-pen"></i> Change Password
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <li className="navbar-nav  me-2">
                 
                    <button onClick={e=>handleLogOut()} className="rounded-pill bg-danger px-2">
                      Log Out
                    </button>
                 
                </li>
              </div>
            </div>
          </div>
        </nav>
        {/* menu section end  */}
      </div>
    );
};

export default Navbar;