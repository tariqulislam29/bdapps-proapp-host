import React from 'react';

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
                Error Club
              </a>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item me-2">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
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
                      <a class="dropdown-item" href="#">
                        <i class="fa fa-file-medical"></i> Batch
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="fa fa-pen"></i> New
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="fa fa-ruler-combined"></i> Check Length
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item me-2">
                  <a class="nav-link " aria-current="page" href="#">
                    <i class="fa fa-table"></i> All Content
                  </a>
                </li>
                <li class="nav-item me-2">
                  <a class="nav-link " aria-current="page" href="#">
                    <i class="fa fa-exclamation"></i> Error List
                  </a>
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
                      <a class="dropdown-item" href="#">
                        <i class="fa fa-list"></i> List
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="fa fa-pen"></i> New
                      </a>
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
                        <a class="dropdown-item" href="#">
                          <i class="fa fa-list"></i> My profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="fa fa-pen"></i> Change Password
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <li class="navbar-nav  me-2">
                  <button className="rounded-pill bg-danger px-2">
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