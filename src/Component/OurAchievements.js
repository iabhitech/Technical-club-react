const OurAchievements = () => (
  <div>
    {" "}
    <a name="achievements"></a>
    <div style={{ backgroundColor: "aliceblue" }}>
      <div className="container mt-5 py-5">
        <section className="dark-grey-text text-center">
          <h3 className="font-weight-bold mb-4 pb-2">Our Achievements</h3>
          <p className="text-muted w-responsive mx-auto mb-5">
            The UNNAT Club has been actively working under the supervision of
            teachers, coordinators, and the members of our Club. Working for
            many years with lots of hard work, our Tech-Club, being part of the
            various events, has recorded a number of Achievements.
          </p>

          <div className="row">
            <div className="col-12">
              <ul
                className="nav md-pills flex-center flex-wrap mx-0 mb-5 p-3"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active font-weight-bold"
                    data-toggle="tab"
                    href="#panel31"
                    role="tab"
                  >
                    ALL
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link font-weight-bold"
                    data-toggle="tab"
                    href="#panel32"
                    role="tab"
                  >
                    TECH
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link font-weight-bold"
                    data-toggle="tab"
                    href="#panel33"
                    role="tab"
                  >
                    NON-TECH
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link font-weight-bold"
                    data-toggle="tab"
                    href="#panel34"
                    role="tab"
                  >
                    CONFERENCE
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content">
            <div
              className="tab-pane fade show in active"
              id="panel31"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="overlay zoom z-depth-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/project1.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-center font-weight-bold text-muted my-4">
                    Volunteering at International Conference ETTA-2019
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="overlay zoom z-depth-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/project8.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-center font-weight-bold text-muted my-4">
                    Volunteering for various management tasks during FDPs held
                    at our college.
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="overlay zoom z-depth-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-center font-weight-bold text-muted my-4">
                    Technical events like coding competitions, quizzes and
                    seminars
                  </p>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="panel32" role="tabpanel">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="overlay zoom z-depth-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-center font-weight-bold text-muted my-4">
                    Technical events like coding competitions, quizzes and
                    seminars.
                  </p>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="panel33" role="tabpanel">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="overlay zoom z-depth-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/project3.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-center font-weight-bold text-muted my-4">
                    Hindi Divas, Poster Making Events
                  </p>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="overlay zoom z-depth-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/project6.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-center font-weight-bold text-muted my-4">
                    Logo designing Events etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="panel34" role="tabpanel">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="overlay zoom z-depth-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/project1.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-center font-weight-bold text-muted my-4">
                    Volunteering at International Conference ETTA-2019
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className=" overlay zoom z-depth-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/project7.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-center font-weight-bold text-muted my-4">
                    Volunteering at International Conference ETTA-2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);
export default OurAchievements;
