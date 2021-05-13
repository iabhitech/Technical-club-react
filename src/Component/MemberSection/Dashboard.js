const Dashboard=()=>{
    return( <header>
        <div id="slide-out-nav" class="sidenav sidenav-fixed">
          <ul class="list-unstyled">
            <li class="list-item">
              <div class="brand-logo user-info waves-light waves-effect waves-light">           
           
                <ul class="collapsible user-info">
                  
                  <li>
                    <a class="collapsible-header waves-effect pl-3" href="#/">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="rounded-circle avatar-xl z-depth-0" alt="avatar"/>
                      <div class="info">
                        <h6>Abhineet Verma <i class="fas fa-angle-down rotate-icon ml-auto"></i></h6>
                        <small class="d-block">Web Developer</small>
                      </div>
                      
                    </a>
                    <div class="collapsible-body">
                      <ul class="list-unstyled">
                        <li>
                          <a href="#/" class="waves-effect"><i class="fas fa-cog"></i>Settings</a></li>
                        <li>
                          <a href="#/" class="waves-effect"><i class="fas fa-pen"></i>Send Feedback</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
           
  
            <li>
              <input class="form-control" type="text" placeholder="Search"/>
            </li>
  
            <li>
              <a class="waves-effect arrow-r" href="/dashboard.html">
                <i class="fas fa-home"></i> Dashboard
              </a>    
            </li>
            <li>
              <a class="waves-effect arrow-r" href="/profile.html">
                <i class="fas fa-user-edit"></i> Edit Profile
              </a>    
            </li>
            <li>
              <a class="waves-effect arrow-r" href="/viewProfile.html">
                <i class="fa fa-user" aria-hidden="true"></i> View Profile
              </a>    
            </li>
{/*   
             <li>
              <ul class="collapsible">
                <li>
                  <a class="collapsible-header waves-effect arrow-r"
                    ><i class="fas fa-chevron-right"></i> Menu<i
                      class="fas fa-angle-down rotate-icon"
                    ></i
                  ></a>
                  <div class="collapsible-body">
                    <ul class="list-unstyled">
                      <li><a href="#" class="waves-effect">Submit listing</a></li>
                      <li>
                        <a href="#" class="waves-effect">Registration form</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a class="collapsible-header waves-effect arrow-r"
                    ><i class="fas far fa-envelope"></i> Contact Us<i
                      class="fas fa-angle-down rotate-icon"
                    ></i
                  ></a>
                  <div class="collapsible-body">
                    <ul class="list-unstyled">
                      <li><a href="#" class="waves-effect">Submit listing</a></li>
                      <li>
                        <a href="#" class="waves-effect">Registration form</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a class="collapsible-header waves-effect arrow-r"
                    ><i class="fas fa-chevron-right"></i> Menu 1<i
                      class="fas fa-angle-down rotate-icon"
                    ></i
                  ></a>
                  <div class="collapsible-body">
                    <ul class="list-unstyled">
                      <li><a href="#" class="waves-effect">Submit listing</a></li>
                      <li>
                        <a href="#" class="waves-effect">Registration form</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
  
            <li>
              <a class="waves-effect arrow-r"
                    ><i class="fas fa-eye"></i> About</a>
            </li>
  
             
            <li>
              <ul class="social-icon">
                <li>
                  <a href="#" class="icons-sm fb-ic"
                    ><i class="fab fa-facebook-f"> </i
                  ></a>
                </li>
                <li>
                  <a href="#" class="icons-sm pin-ic"
                    ><i class="fab fa-pinterest"> </i
                  ></a>
                </li>
                <li>
                  <a href="#" class="icons-sm gplus-ic"
                    ><i class="fab fa-google-plus-g"> </i
                  ></a>
                </li>
                <li>
                  <a href="#" class="icons-sm tw-ic"
                    ><i class="fab fa-twitter"> </i
                  ></a>
                </li>
              </ul>
            </li>  */}
          </ul>
        </div>
  
  
        <nav
          class="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav white"
        >
          <div class="float-left">
            <a
              href="#/"
              id="openSideNav"
              data-activates="slide-out-nav"
              class="button-collapse black-text"
              ><i class="fas fa-bars"></i
            ></a>
          </div>
          <div class="breadcrumb-dn mr-auto">
            <p>Your Dashboard</p>
          </div>
          <ul class="nav navbar-nav nav-flex-icons ml-auto">
              
            <li class="nav-item">
              <a class="nav-link" href="#/"
                ><i class="fas fa-user"></i>
                <span class="clearfix d-none d-sm-inline-block">Account</span></a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#/"
              >
                Dropdown
              </a>
              <div
                class="dropdown-menu dropdown-menu-right p-2"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#/">Action</a>
                <a class="dropdown-item" href="#/">Another action</a>
                <a class="dropdown-item" href="#/">Something else here</a>
              </div>
            </li>
  
            <li class="nav-item">
              <a class="nav-link waves-effect waves-light" href="#/">
                <i class="fas fa-bell mr-0"></i>
                <span class="badge badge-danger mr-2">9</span>
                <span class="sr-only">unread messages</span>
              </a>
            </li>
            <li class="nav-item avatar dropdown">
              <a
                class="nav-link dropdown-toggle p-0"
                id="navbarDropdownMenuLink-55"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#/"
              >
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                  class="rounded-circle z-depth-0"
                  alt="avatar"/>
                  <span class="clearfix d-none d-sm-inline-block">Abhineet Verma</span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-lg-right p-2"
                aria-labelledby="navbarDropdownMenuLink-55"
              >
                <a class="dropdown-item" href="#/">Action</a>
                <a class="dropdown-item" href="#/">Another action</a>
                <a class="dropdown-item" href="#/">Something else here</a>
                <a class="dropdown-item" href="#/">Logout</a>
              </div>
            </li>
          </ul>
        </nav>

</header>)
}

export default Dashboard;