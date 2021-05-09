const NavBar = ({ user, userLoggedIn, openMembershipForm }) => {
  const register = () => {
    document.getElementById("signIn").className = "tab-pane fade";
    document.getElementById("register").className = "tab-pane fade show active";
    document.getElementById("signIn-tab").className = "nav-link";
    document.getElementById("register-tab").className = "nav-link active";
  };
  const login = () => {
    document.getElementById("signIn").className = "tab-pane fade  show active";
    document.getElementById("register").className = "tab-pane fade";
    document.getElementById("signIn-tab").className = "nav-link  active";
    document.getElementById("register-tab").className = "nav-link";
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container-fluid mx-md-5">
          <a className="navbar-brand" href="/dashboard.html">
            <strong>UNNAT</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent1"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#contact-us">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  href="#/"
                >
                  Members
                </a>
                <div
                  className="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#/">
                    Technical Team
                  </a>
                  <a className="dropdown-item" href="#/">
                    Documentation Team
                  </a>
                  <a className="dropdown-item" href="#/">
                    Management Team
                  </a>
                  <a className="dropdown-item" href="#/">
                    Designing Team
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  href="#/"
                >
                  More
                </a>
                <div
                  className="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#teams">
                    Our Teams
                  </a>
                  <a className="dropdown-item" href="#achievements">
                    Our Achievements
                  </a>
                  <a className="dropdown-item" href="#faqs">
                    FAQs
                  </a>
                </div>
              </li>
            </ul>

            <ul className="navbar-nav nav-flex-icons ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://m.facebook.com/techclubreck/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://twitter.com/KannaujRec"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/abhyutthan.reck/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            {user.userRole?.toString() === "" &&
            !localStorage.getItem("token") ? (
              <div className="" role="tablist">
                <a
                  className="btn btn-sm btn-primary"
                  href="#account"
                  onClick={register}
                >
                  Register
                </a>
                <a
                  className="btn btn-sm btn-outline-primary"
                  href="#account"
                  onClick={login}
                >
                  Login
                </a>
              </div>
            ) : (
              ""
            )}

            {user.userRole?.toString() === "Member" ||
            (localStorage.getItem("token") &&
              localStorage.getItem("role")?.toString() === "Member") ? (
              <div className="" role="tablist" id="forMember">
                <a
                  className="btn btn-sm btn-primary"
                  href="#account"
                  onClick={register}
                >
                  Club Discussion
                </a>
                <a
                  className="btn btn-sm btn-primary"
                  href="#account"
                  onClick={login}
                >
                  Announcements/Event Planning
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
          {user.userRole?.toString() === "Genral User" ||
          (localStorage.getItem("token") &&
            localStorage.getItem("role").toString() === "Genral User") ? (
            <ul style={{ disable: "block", marginTop: "10.5px" }}>
              <li
                className="nav-item avatar dropdown "
                style={{ color: "white" }}
              >
                <a
                  className="nav-link dropdown-toggle p-0 "
                  id="navbarDropdownMenuLink-55"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  href="#/"
                  style={{ color: "white" }}
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    className="rounded-circle z-depth-0"
                    alt="User Profile"
                  />
                  <span className="clearfix d-none d-sm-inline-block pr-2 text-white nav-link">
                    {user.userFullName || localStorage.getItem("fullName")
                      ? user.userFullName
                        ? user.userFullName
                        : localStorage.getItem("fullName")
                      : ""}
                  </span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-lg-right p-2"
                  aria-labelledby="navbarDropdownMenuLink-55"
                >
                  <a
                    className="dropdown-item"
                    href="#/"
                    onClick={() => openMembershipForm(true)}
                  >
                    Apply For Membership
                  </a>
                  <a className="dropdown-item" href="#/">
                    Announcements
                  </a>
                  <a className="dropdown-item" href="#/">
                    Something else here
                  </a>
                  <a
                    className="dropdown-item"
                    href="#/"
                    onClick={() => {
                      localStorage.clear();
                      userLoggedIn("userEmail","");
                      userLoggedIn("userFullName","");
                      userLoggedIn("userId","");
                      userLoggedIn("userRole","");
                    }}
                  >
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
