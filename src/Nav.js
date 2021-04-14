const NavBar =()=>(
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
    <div className="container">
      <a className="navbar-brand" href="/dashboard.html">
        <strong>UNNAT</strong>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul className="navbar-nav mr-auto">
          
          <li className="nav-item">
            <a className="nav-link" href="/dashboard.html">Dashboard</a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" href="#contact-us">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-us">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
            <div
              className="dropdown-menu dropdown-primary"
              aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#teams">Our Teams</a>
              <a className="dropdown-item" href="#achievements">Our Achievements</a>
              <a className="dropdown-item" href="#faqs">FAQs</a>
              </div>
          </li>
        </ul>

        <ul className="navbar-nav nav-flex-icons ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://m.facebook.com/techclubreck/" target="_blank" rel="nofollow">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://twitter.com/KannaujRec" target="_blank" rel="nofollow">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.instagram.com/abhyutthan.reck/" target="_blank" rel="nofollow">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <div className="" role="tablist">
          <a className="btn btn-sm btn-primary" href="#account" >Register</a>
          <a className="btn btn-sm btn-outline-primary" href="#account" >Login</a>
        </div>
        
      </div>
    </div>
  </nav>
  <script type="text/javascript" src="../public/js/jquery.js"></script>
    <script type="text/javascript" src="../public/js/popper.js"></script>
    <script type="text/javascript" src="../public/js/bootstrap.js"></script>
    <script type="text/javascript" src="../public/js/mdb.js"></script>
    <script src="/js/script.js"></script>
</div>
)

export default NavBar