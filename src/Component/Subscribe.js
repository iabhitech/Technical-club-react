const Subscribe=()=>(
    <div className="bg-primary">
    <section className="container text-white p-5">
      <div className="row">
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="view">
            <img
              src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg"
              className="img-fluid"
              alt="Something Went Wrong"
            />
          </div>
        </div>

        <div className="col-md-7 mb-lg-0 mb-4">
          <form className="" action="">
            <h3 className="font-weight-bold my-3">Subscribe</h3>

            <p className="mb-4 pb-2">
              Want to hear from us about the latest events and
              newsletters. Feel free to subscribe to our newsletter
              service.
            </p>

            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                aria-label="Enter your email address"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-md btn-outline-white m-0 px-3 py-2 z-depth-0 waves-effect"
                  type="submit"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <small className="form-text">
              <strong>
                * Leave your email addres to be notified first.
              </strong>
            </small>
          </form>
        </div>
      </div>
    </section>
  </div>
)
export default Subscribe;