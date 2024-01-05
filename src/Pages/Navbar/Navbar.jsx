import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        {/* menu section start */}
        <nav
          class="navbar navbar-expand-lg bg-body-tertiary bg-dark"
                data-bs-theme="dark"
                style={{fontSize:"12px"}}
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand" href="#">
                HostLab
              </a>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item me-2">
                <Link to="/home" class="nav-link active text-decoration-none">
               
                    Home
                 
                  </Link>
                 
                </li>
                <li class="nav-item me-2 dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-plus"></i> Create Content
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                    <Link to="/batchContent" class="dropdown-item">
                     
                        <i class="fa fa-file-medical"></i> Batch
                     
                      </Link>
                    </li>
                    <li>
                    <Link to="/newContent"  class="dropdown-item">
                     
                        <i class="fa fa-pen"></i> New
                     
                      </Link>
                    </li>
                    <li>
                    <Link to="/checkLength" class="dropdown-item">
                     
                        <i class="fa fa-ruler-combined"></i> Check Length
                     
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item me-2">
                <Link to="/allContent" class="nav-link ">
                
                    <i class="fa fa-table"></i> All Content
                 
                  </Link>
                </li>
                <li class="nav-item me-2">
                <Link to="/errorList" class="nav-link ">
                
                    <i class="fa fa-exclamation"></i> Error List
                 
                  </Link>
                </li>
                <li class="nav-item me-2 dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-box-archive"></i> Application
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                    <Link to="/application/list" class="dropdown-item">
                     
                        <i class="fa fa-list"></i> List
                    </Link>
                    </li>
                    <li>
                    <Link to="/application/new" class="dropdown-item">
                        <i class="fa fa-pen"></i> New
                        </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="d-flex ">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item me-2 dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fa fa-user"></i> tariqbd1998@gmail.com
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                      <Link to="/myProfile" class="dropdown-item">
                          <i class="fa fa-list"></i> My profile
                          </Link>
                      </li>
                      <li>
                      <Link to="/changePassword" class="dropdown-item">
                          <i class="fa fa-pen"></i> Change Password
                          </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <li class="navbar-nav  me-2">
                <Link to="/login" className='pt-2' >
                  <button className="rounded-pill bg-danger px-2">
                    Log Out
                  </button>
                  </Link>
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