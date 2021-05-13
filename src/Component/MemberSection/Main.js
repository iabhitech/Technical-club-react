const Main=()=>{
    return(<main>
        <div className="container-fluid dashboard">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> Welcome to Unnat Tech Club.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, animi earum adipisci corporis rem laborum voluptas, itaque in cupiditate optio quae ex dicta hic consequatur debitis. Maxime tempora necessitatibus explicabo!
          <div className="card-deck mb-2 feature-card">
            <div className="card m-2">
              <div className="text-center mt-4">
                <i className="fa fa-laptop-code fa-3x blue-text" aria-hidden="true"></i>
                <div className="pt-2"><strong>Technical Team</strong></div>
              </div>
              <hr/>
              <div className="card-body small pt-0">
                  <div className="d-flex">
                    <span>Total Members</span>
                    <span className="ml-auto">8</span>
                </div>
              </div>
            </div>
            <div className="card m-2">
              <div className="text-center mt-4">
                <i className="fa fa-chart-area fa-3x teal-text" aria-hidden="true"></i>
                <div className="pt-2"><strong>Documentation Team</strong></div>
              </div>
              <hr/>
              <div className="card-body small pt-0">
                  <div className="d-flex">
                    <span>Total Members</span>
                    <span className="ml-auto">4</span>
                </div>
              </div>
            </div>
            <div className="card m-2">
              <div className="text-center mt-4">
                <i className="fab fa-sketch fa-3x indigo-text" aria-hidden="true"></i>
                <div className="pt-2"><strong>Designing Team</strong></div>
              </div>
              <hr/>
              <div className="card-body small pt-0">
                  <div className="d-flex">
                    <span>Total Members</span>
                    <span className="ml-auto">5</span>
                </div>
              </div>
            </div>
            <div className="card m-2">
              <div className="text-center mt-4">
                <i className="fas fa-tasks fa-3x blue-text" aria-hidden="true"></i>
                <div className="pt-2"><strong>Management Team</strong></div>
              </div>
              <hr/>
              <div className="card-body small pt-0">
                  <div className="d-flex">
                    <span>Total Members</span>
                    <span className="ml-auto">10</span>
                </div>
              </div>
            </div>
           
          </div>

          
        <div className="row">
          <div className="col-md-3 p-1">
            <div className="card loading">
              <div className="card-header px-3">Members</div>
              <div className="card-body p-0">
                <ul className="list-unstyled">
                  <li className="list-item">
                    <a href="#/" >
                      <div className="d-flex">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-x"/>
                        <div className="pl-2">
                          <h6 className="m-0">Rechard Willios</h6>
                          <span className="text-muted small">Team Member</span>
                      </div>
                      </div>
                    </a>
                  </li>
      
                  <li className="list-item">
                    <a href="#/" >
                      <div className="d-flex">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-x"/>
                        <div className="pl-2">
                          <h6 className="m-0">Loseod Mso</h6>
                          <span className="text-muted small">Team Member</span>
                      </div>
                      </div>
                    </a>
                  </li>
      
                  <li className="list-item">
                    <a href="#/" >
                      <div className="d-flex">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-x"/>
                        <div className="pl-2">
                          <h6 className="m-0">Abhineet Verma</h6>
                          <span className="text-muted small">Team Member</span>
                      </div>
                      </div>
                    </a>
                  </li>
      
                  <li className="list-item">
                    <a href="#/" >
                      <div className="d-flex">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-x"/>
                        <div className="pl-2">
                          <h6 className="m-0">Piyush</h6>
                          <span className="text-muted small">Team Member</span>
                      </div>
                      </div>
                    </a>
                  </li>
      
                  <li className="list-item">
                    <a href="#/" >
                      <div className="d-flex">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-x"/>
                        <div className="pl-2">
                          <h6 className="m-0">Lorem Spamd</h6>
                          <span className="text-muted small">Coordinator</span>
                      </div>
                      </div>
                    </a>
                  </li>
      
                  <li className="list-item">
                    <a href="#/" >
                      <div className="d-flex">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-x"/>
                        <div className="pl-2">
                          <h6 className="m-0">Abhineet Verma</h6>
                          <span className="text-muted small">Team Member</span>
                      </div>
                      </div>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-1 loading">
              <div className="card card-header px-3 mb-2">Club's Announcements</div>
      
              <div className="card text-left mb-2">
                <div className="card-body">
                  <div className="d-flex">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-x"/>
                    <form action="" className="w-100">
                      <div className="form-group pl-2">
                        <textarea className="form-control" rows="2" placeholder="Write something here..."></textarea>
                      </div>
                      <div className="d-flex align-items-center">
                        <select className="browser-default my-auto md-select">
                          <option selected>Share with</option>
                          <option value="1">Technical</option>
                          <option value="2">Designing</option>
                          <option value="3">Documentation</option>
                          <option value="4">Management</option>
                        </select>
                        <button type="button" className="btn btn-primary btn-sm ml-auto btn-rounded">Share</button>
                      </div>
                    </form>
                    
                  </div>
                </div>
              </div>
              
      
              <ul className="list-unstyled">
                <li className="list-item mb-2 card p-3">
                  <div className="d-flex">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-x"/>
                    <div className="ml-2">
                      <h6 className="m-0">Alen Koerm</h6>
                      <span className="text-muted small">24 Oct 2020</span>
                    </div>   
                  </div>
                  <hr className="m-2"/>
                  <div className="font-weight-normal">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem saepe asperiores deserunt quae itaque et aperiam magni aliquam corrupti sed veritatis totam, pariatur cum quam nostrum eligendi labore repellat! Quasi?
                  </div>
                  
                  <div className="p-2 d-flex justify-content-around">
                    <a className="btn-sm btn-link blue-text" href="#/"><i className="far fa-heart"></i> Like</a>
                    <a className="btn-sm btn-link blue-text" href="#/"><i className="far fa-comments "></i> Suggestions</a>
                  </div>
                  
                </li>
      
                <li className="list-item mb-2 card p-3">
                  <div className="d-flex">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-x"/>
                    <div className="ml-2">
                      <h6 className="m-0">Alen Koerm</h6>
                      <span className="text-muted small">24 Oct 2020</span>
                    </div>   
                  </div>
                  <hr className="m-2"/>
                  <div>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem saepe asperiores deserunt quae itaque et aperiam magni aliquam corrupti sed veritatis totam, pariatur cum quam nostrum eligendi labore repellat! Quasi?
                  </div>
                  
                  <div className="p-2 d-flex justify-content-around">
                    <a className="btn-sm btn-link blue-text" href="#/"><i className="far fa-heart"></i> Like</a>
                    <a className="btn-sm btn-link blue-text" href="#/"><i className="far fa-comments"></i> Suggestions</a>
                  </div>
                </li>
                
                <li className="list-item mb-2 card p-3">
                  <div className="d-flex">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-x"/>
                    <div className="ml-2">
                      <h6 className="m-0">Alen Koerm</h6>
                      <span className="text-muted small">24 Oct 2020</span>
                    </div>   
                  </div>
                  <hr className="m-2"/>
                  <div>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem saepe asperiores deserunt quae itaque et aperiam magni aliquam corrupti sed veritatis totam, pariatur cum quam nostrum eligendi labore repellat! Quasi?
                  </div>
                  
                  <div className="p-2 d-flex justify-content-around">
                    <a className="btn-sm btn-link blue-text" href="#/"><i className="far fa-heart"></i> Like</a>
                    <a className="btn-sm btn-link blue-text" href="#/"><i className="far fa-comments"></i> Suggestions</a>
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
          <div className="col-md-3 p-1 loading">
            <div className="card">
              <div className="card-header">Your Profile</div>
              
            <div className="text-center d-flex flex-column m-auto card-body">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" className="avatar rounded-circle avatar-xxl"/>
              <h4 className="mb-0">Alen Kskd</h4>
              <span className="text-muted">Web Developer</span>
            </div>
            <hr className="mb-0"/>
            <div className="card-body">
              <div className="d-flex blue-text"><i className="fas fa-star-half-alt my-auto mr-1"></i> Rating <span className="ml-auto">4.2</span></div>
              <div className="d-flex blue-text"><i className="fas fa-tasks my-auto mr-1"></i> Event Organise <span className="ml-auto">2</span></div>
            </div>
            
          </div>
          </div>
        </div>
        </div>
      </main>)
}
export default Main;