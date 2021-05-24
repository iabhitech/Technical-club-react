const Testimonials = () => (
  <div style={{ backgroundColor: "aliceblue" }}>
    <section className="container team-section text-center dark-grey-text py-5">
      <h3 className="font-weight-bold mb-4 pb-2">Testimonials</h3>
      <p className="text-center w-responsive mx-auto mb-5">
        This club is an innovative initiative taken by excellent faculty of
        R.E.C. Kannauj which aims to ignite a new spark of creativity in
        students and to support them and their neoteric ideas. This club
        functions under the guidance of highly experienced and adroit faculty
        members including-:
      </p>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="testimonial card p-4">
            <div className="avatar mx-auto">
              <img
                src="../img/Dr.B.D.K.Patro.png"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Something Went Wrong"
              />
            </div>
            <h4 className="font-weight-bold dark-grey-text mt-4">
              Dr. B.D.K. Patro
            </h4>
            <h6 className="font-weight-bold blue-text my-3">
              Associate Professor & H.O.D. of CSE Department
            </h6>
            <p className="font-weight-normal dark-grey-text">
              <i className="fas fa-quote-left pr-2"></i>Under the supreme
              supervision and guidance of Dr. B.D.K. Patro club has successfully
              organised many events in past and he has been a great source of
              motivation for the club members.
            </p>
            <div className="orange-text">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star-half-alt"> </i>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="testimonial card p-4">
            <div className="avatar mx-auto">
              <img
                src="../img/A.B..png"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Something Went Wrong"
              />
            </div>
            <h4 className="font-weight-bold dark-grey-text mt-4">
              Abhishek Bajpai
            </h4>
            <h6 className="font-weight-bold blue-text my-3">
              Assistant Professor - CSE Department
            </h6>
            <p className="font-weight-normal dark-grey-text">
              <i className="fas fa-quote-left pr-2"></i>Mr. Abhishek Bajpai
              pioneered many past events organised by the club. His vision and
              ideas serve as a vital support, helping the club in various
              aspects.
            </p>
            <br/>
            <br />
            <div className="orange-text">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="testimonial card p-4">
            <div className="avatar mx-auto">
              <img
                src="../img/N.T..png"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Something Went Wrong"
              />
            </div>
            <h4 className="font-weight-bold dark-grey-text mt-4">
              Naveen Kumar Tiwari
            </h4>
            <h6 className="font-weight-bold blue-text my-3">
              Assistant Professor – CSE Department
            </h6>
            <p className="font-weight-normal dark-grey-text">
              <i className="fas fa-quote-left pr-2"></i>In the path of achieving
              goals and excellence, the motivation and guidance provided by Mr.
              Naveen Tiwari has always worked as charm for the club, boosting
              the potentials of every individual of the club.
            </p>
            <div className="orange-text">
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="fas fa-star"> </i>
              <i className="far fa-star"> </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Testimonials;
