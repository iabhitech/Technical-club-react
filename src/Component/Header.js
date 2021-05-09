const Header = ({ user}) => (
  <>
    <header>
      <div
        className="view"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mask rgba-gradient align-items-center">
          <div className="container" style={{ marginTop: "5rem" }}>
            <div className="row">
              <div className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 animated slideInLeft slow">
                <h1 className="h1-responsive font-weight-bold mt-sm-5">
                  Think, Plan and Act{" "}
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Under supervision of excellent faculty the REC Kannauj has
                  established technical club "UNNAT". This club aims to make the
                  student advance and sharp so that they can cope up with future
                  technology era.Here the students of different branches
                  collaborate their fields of study to give innovation and
                  enhancement in technology. This technical club was established
                  in it 2016. "UNNAT" Club trys to invoke the thinking
                  ,exploring and implementing capacity that can shape their
                  intellect and future.Students develop a better understanding
                  which could help them in their future endeavours. Under
                  supervision of excellent faculty the REC Kannauj has
                  established technical club "UNNAT". We trys to invoke the
                  thinking, exploring and implementing capacity that can shape
                  their intellect and future. Students develop a better
                  understanding which could help them in their future
                  endeavours.
                  <br />
                  <strong>
                    "It is group where everybody can learn and anyone can share
                    their Ideas."
                  </strong>
                </h6>
               {(user.userFullName?.toString()===""&& !localStorage.getItem("fullName"))? <a className="btn btn-white" href="#account">
                  Join Now
                </a>:""}
                <a className="btn btn-outline-white" href="#about-us">
                  Learn more
                </a>
              </div>
              <div className="col-md-6 col-xl-5 mt-xl-5 animated slideInRight slow">
                <img
                  src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                  alt=""
                  className="img-fluid"
                />
                <a name="account" href="#/" style={{ fontSize: "0.01px" }}>
                  a
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
