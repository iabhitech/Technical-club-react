const AnnouncementsClub=()=>{
    return (
        <div className="row">
          <div className="col-md-12 p-1 loading">
            <div className="card card-header px-3 mb-2">
              Club's Announcements
            </div>

            <div className="card text-left mb-2">
              <div className="card-body">
                <div className="d-flex">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    alt=""
                    className="avatar rounded-circle avatar-x"
                  />
                  <form action="" className="w-100">
                    <div className="form-group pl-2">
                      <textarea
                        className="form-control"
                        rows="2"
                        placeholder="Write something here..."
                      ></textarea>
                    </div>
                    <div className="d-flex align-items-center">
                      <select className="browser-default my-auto md-select">
                        <option selected>Share with</option>
                        <option value="1">Technical</option>
                        <option value="2">Designing</option>
                        <option value="3">Documentation</option>
                        <option value="4">Management</option>
                      </select>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm ml-auto btn-rounded"
                      >
                        Share
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <ul className="list-unstyled">
              <li className="list-item mb-2 card p-3">
                <div className="d-flex">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    alt=""
                    className="avatar rounded-circle avatar-x"
                  />
                  <div className="ml-2">
                    <h6 className="m-0">Alen Koerm</h6>
                    <span className="text-muted small">24 Oct 2020</span>
                  </div>
                </div>
                <hr className="m-2" />
                <div className="font-weight-normal">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem saepe asperiores deserunt quae itaque et aperiam magni
                  aliquam corrupti sed veritatis totam, pariatur cum quam
                  nostrum eligendi labore repellat! Quasi?
                </div>

                <div className="p-2 d-flex justify-content-around">
                  <a className="btn-sm btn-link blue-text" href="#/">
                    <i className="far fa-heart"></i> Like
                  </a>
                  <a className="btn-sm btn-link blue-text" href="#/">
                    <i className="far fa-comments "></i> Suggestions
                  </a>
                </div>
              </li>

              <li className="list-item mb-2 card p-3">
                <div className="d-flex">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    alt=""
                    className="avatar rounded-circle avatar-x"
                  />
                  <div className="ml-2">
                    <h6 className="m-0">Alen Koerm</h6>
                    <span className="text-muted small">24 Oct 2020</span>
                  </div>
                </div>
                <hr className="m-2" />
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem saepe asperiores deserunt quae itaque et aperiam magni
                  aliquam corrupti sed veritatis totam, pariatur cum quam
                  nostrum eligendi labore repellat! Quasi?
                </div>

                <div className="p-2 d-flex justify-content-around">
                  <a className="btn-sm btn-link blue-text" href="#/">
                    <i className="far fa-heart"></i> Like
                  </a>
                  <a className="btn-sm btn-link blue-text" href="#/">
                    <i className="far fa-comments"></i> Suggestions
                  </a>
                </div>
              </li>

              <li className="list-item mb-2 card p-3">
                <div className="d-flex">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    alt=""
                    className="avatar rounded-circle avatar-x"
                  />
                  <div className="ml-2">
                    <h6 className="m-0">Alen Koerm</h6>
                    <span className="text-muted small">24 Oct 2020</span>
                  </div>
                </div>
                <hr className="m-2" />
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem saepe asperiores deserunt quae itaque et aperiam magni
                  aliquam corrupti sed veritatis totam, pariatur cum quam
                  nostrum eligendi labore repellat! Quasi?
                </div>

                <div className="p-2 d-flex justify-content-around">
                  <a className="btn-sm btn-link blue-text" href="#/">
                    <i className="far fa-heart"></i> Like
                  </a>
                  <a className="btn-sm btn-link blue-text" href="#/">
                    <i className="far fa-comments"></i> Suggestions
                  </a>
                </div>
              </li>
            </ul>
            <div className="d-flex justify-content-center p-2">
              <div className="spinner-border blue-text" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <span className="my-auto ml-2">Loading More</span>
            </div>
          </div>
          </div>)
}

export default AnnouncementsClub;