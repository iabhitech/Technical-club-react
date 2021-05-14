const Footer=()=>(
  <footer className="page-footer font-small unique-color-dark">

  <div style={{backgroundColor: "#424f95"}}>
    <div className="container">

      <div className="row py-4 d-flex align-items-center">

        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0">Get connected with us on social networks!</h6>
        </div>

        <div className="col-md-6 col-lg-7 text-center text-md-right">

          <a className="fb-ic" href="https://m.facebook.com/techclubreck/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f white-text mr-4"> </i>
          </a>
          <a className="tw-ic" href="https://twitter.com/KannaujRec" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter white-text mr-4"> </i>
          </a>
          {/* <a className="li-ic" href="#/">
            <i className="fab fa-linkedin-in white-text mr-4"> </i>
          </a> */}
          <a className="ins-ic" href="https://www.instagram.com/abhyutthan.reck/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram white-text"> </i>
          </a>

        </div>

      </div>

    </div>
  </div>

  <div className="container text-center text-md-left mt-5">

    <div className="row mt-3">

      <div className="col-md-3 mx-auto">
  
          <h6 className="text-uppercase font-weight-bold">UNNAT - Excelling Skills</h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
          <p>A technical club where everybody can learn and anyone can share their Ideas. Club action is based in "THINK, PLAN AND ACT".</p>

      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-2 mx-auto">

        <h6 className="text-uppercase font-weight-bold">Teams</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Technical</a>
          </li>
          <li>
            <a href="#!">Designing</a>
          </li>
          <li>
            <a href="#!">Documentation</a>
          </li>
          <li>
            <a href="#!">Management</a>
          </li>
        </ul>

      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-3 mx-auto">

        <h6 className="text-uppercase font-weight-bold">Useful Links</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>

        <ul className="list-unstyled">
          
          <li>
            <a href="/#achievements">Achievements</a>
          </li>
          <li>
            <a href="/#about-us">About Us</a>
          </li>
          <li>
            <a href="/#contact-us">Feedback</a>
          </li>
          <li>
            <a href="/#faqs">FAQs</a>
          </li>
        </ul>

      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-4 mx-auto">

        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>

        <ul className="list-unstyled">
          <li>
            <i className="fas fa-home mr-3"></i> Kannauj, UP, India
          </li>
          <li>
            <i className="fas fa-envelope mr-3"></i> contact@unnat.com
          </li>
          <li>
            <i className="fas fa-phone mr-3"></i> +91 88002 18506
          </li>
          <li>
            <i className="fas fa-print mr-3"></i> +91 75056 17553
          </li>
        </ul>
        

      </div>

    </div>

  </div>

  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/"> UNNAT - Excelling Skills</a>
  </div>

</footer>
)

export default Footer;