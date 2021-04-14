const Main=()=>(
     <div>
  <main className="mt-0">
  <div className="container" >
      <div className="card p-4" style={{marginTop: "-2rem", background: "#424f95"}}>
        <div className="row">
          <div className="col-md-6 mb-3">

            <h1 className="h1-responsive font-weight-bold text-white mt-2" >Why We Are?</h1>
            <hr className="hr-light"/>
            <h6 className="mb-3 text-white">Our club aims to make the student advance and sharp so that they can cope up with future technology era. <br/>Here the students of different branches collaborate their fields of study to give innovation and enhancement in technology. This technical club was established in it 2016.</h6>
            <a className="btn btn-outline-white btn-rounded" href="#about-us">Learn more</a>

          </div>

          <div className="col-md-5 ml-auto">

            <ul className="nav nav-tabs material-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="signIn-tab" data-toggle="tab" href="#signIn" role="tab" aria-controls="signIn"
                  aria-selected="true">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register"
                  aria-selected="false">Register</a>
              </li>
            </ul>
            <div className="tab-content white" id="myTabContent">
              <div className="tab-pane fade show active" id="signIn" role="tabpanel" aria-labelledby="signIn-tab">
                <form className="text-center p-5" action="#!" id="login-form">

                  <p className="h4 mb-4">Sign in</p>
                
                  <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail"/>
                
                  <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" name="password" placeholder="Password"/>
                
                  <div className="d-flex justify-content-around">
                      <div>
                          {/* <!-- <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember">
                              <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                          </div> --> */}
                      </div>
                      <div>
                          <a href="#">Forgot password?</a>
                      </div>
                  </div>
                
                  <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
                
                  <p>Not a member?
                      <a href="">Register</a>
                  </p>
                
                  {/* <!-- <p>or sign in with:</p> */}
                
                  <a href="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></a>
                  <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></a>
                  <a href="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></a>
                  <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></a>
                 
                </form>
              </div>
              <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                <form className="text-center p-5" action="/register" method="POST">
                  <p className="h4 mb-4">Sign up</p>

                  <div className="form-row mb-4">
                      <div className="col">
                          <input type="text" name="fname" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name"/>
                      </div>
                      <div className="col">
                          <input type="text" name="lname" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name"/>
                      </div>
                  </div>

                  <input type="email" name="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail"/>

                  <input type="password" name="password" id="defaultRegisterFormPassword" className="form-control mb-2" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                  <input type="password" name="cnfPassword" className="form-control" placeholder="Confirm Password"/>
                  <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                      At least 8 characters and 1 digit
                  </small>


                  <input type="number" name="MobieNumber" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock"/>
                  {/* <!-- <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                      Optional - for two step authentication
                  </small> --> */}

                  {/* <!-- <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter">
                      <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
                  </div> --> */}

                  <button className="btn btn-info my-4 btn-block" type="submit" id="registerButton">REGISTER NOW</button>

                  {/* <!-- <p>or sign up with:</p> */}

                  <a href="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></a>
                  <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></a>
                  <a href="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></a>
                  <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></a>

                  <hr/>

                  <p>By clicking
                      <em>Sign up</em> you agree to our
                      <a href="#" target="_blank">terms of service</a></p>

                </form>
              </div>
              
            </div>

          </div>
        </div>
        
      </div>
  </div>


    <a name="teams"></a>
    <div className="container my-5 py-5">
  
  
      <section className="px-md-5 mx-md-5 text-center dark-grey-text">
  
        <div className="row d-flex justify-content-center">
  
          <div className="col-xl-6 col-md-8">
  
            <h3 className="font-weight-bold">Our Featured Teams</h3>
  
            <p className="text-muted">"UNNAT" Club tries to invoke the thinking, exploring, and implementing capacity that can shape their intellect and future. To do that we have four core teams to function effectively and to deliver the best work.</p>
  
            <a className="btn btn-info btn-md ml-0 mb-5" href="#account"  role="button"  >Join your Team<i className="fa fa-magic ml-2"></i></a>
           
          </div>
  
        </div>
  
  
        <div className="row">
  
          <div className="col-lg-3 col-md-6">
            <i className="fas fa-laptop-code fa-3x blue-text"></i>
  
            <p className="font-weight-bold my-3">Technical Team</p>
  
            <p className="text-muted">Consists of skilled and experienced members in terms of various technical aspects and technological attributes.</p>
          </div>
  
          <div className="col-lg-3 col-md-6">
              <i className="fas fa-chart-area fa-3x teal-text"></i>
  
              <p className="font-weight-bold my-3">Documentation Team</p>
  
              <p className="text-muted">A team of creative students proficient at formal writing.</p>
          </div>
  
          <div className="col-lg-3 col-md-6">
              <i className="fab fa-sketch fa-3x indigo-text"></i>
  
              <p className="font-weight-bold my-3">Designing Team</p>
  
              <p className="text-muted">Comprises of students skilled at using various illustration tools and are endowed with a creative outlook.</p>
          </div>
  
          <div className="col-lg-3 col-md-6">
              <i className="fas fa-tasks fa-3x deep-purple-text"></i>
  
              <p className="font-weight-bold my-3">Management Team</p>
  
              <p className="text-muted">A bunch of students having excellence at managing and coordinating person & people and events at different levels.</p>
          </div>
  
        </div>
  
  
      </section>
  
  
    </div>


  
  <a name="achievements"></a>
  <div style={{backgroundColor: "aliceblue"}}>
    <div className="container mt-5 py-5">
  
      <section className="dark-grey-text text-center">
        
        <h3 className="font-weight-bold mb-4 pb-2">Our Achievements</h3>
        <p className="text-muted w-responsive mx-auto mb-5">The UNNAT Club has been actively working under the supervision of teachers, coordinators, and the members of our Club. Working for many years with lots of hard work, our Tech-Club, being part of the various events, has recorded a number of Achievements.</p>
        
          <div className="row">
            
            <div className="col-12">
              
              <ul className="nav md-pills flex-center flex-wrap mx-0 mb-5 p-3" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active font-weight-bold" data-toggle="tab" href="#panel31" role="tab">ALL</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-weight-bold" data-toggle="tab" href="#panel32" role="tab">TECH</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-weight-bold" data-toggle="tab" href="#panel33" role="tab">NON-TECH</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-weight-bold" data-toggle="tab" href="#panel34" role="tab">CONFERENCE</a>
                </li>
              </ul>
              
            </div>
    
        </div>
        
        <div className="tab-content">
    
          <div className="tab-pane fade show in active" id="panel31" role="tabpanel">
    
            <div className="row">
              
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="overlay zoom z-depth-2">
                  <img src="https://mdbootstrap.com/img/Photos/Others/project1.jpg" className="img-fluid"/>
                </div>
                <p className="text-center font-weight-bold text-muted my-4">Volunteering at International Conference ETTA-2019</p>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="overlay zoom z-depth-2">
                  <img src="https://mdbootstrap.com/img/Photos/Others/project8.jpg" className="img-fluid"/>
                </div>
                <p className="text-center font-weight-bold text-muted my-4">Volunteering for various management tasks during FDPs held at our college.</p>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="overlay zoom z-depth-2">
                  <img src="https://mdbootstrap.com/img/Photos/Others/project4.jpg" className="img-fluid"/>
                </div>
                <p className="text-center font-weight-bold text-muted my-4">Technical events like coding competitions, quizzes and seminars</p>
              </div>
              
            </div>
    
          </div>
    
          <div className="tab-pane fade" id="panel32" role="tabpanel">
    
            <div className="row">
              
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="overlay zoom z-depth-2">
                  <img src="https://mdbootstrap.com/img/Photos/Others/project4.jpg" className="img-fluid"/>
                </div>
                <p className="text-center font-weight-bold text-muted my-4">Technical events like coding competitions, quizzes and seminars.</p>
              </div>
              
              
            </div>
    
          </div>
    
          <div className="tab-pane fade" id="panel33" role="tabpanel">
    
            <div className="row">
              
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="overlay zoom z-depth-2">
                  <img src="https://mdbootstrap.com/img/Photos/Others/project3.jpg" className="img-fluid"/>
                </div>
                <p className="text-center font-weight-bold text-muted my-4">Hindi Divas, Poster Making Events</p>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="overlay zoom z-depth-2">
                  <img src="https://mdbootstrap.com/img/Photos/Others/project6.jpg" className="img-fluid"/>
                </div>
                <p className="text-center font-weight-bold text-muted my-4">Logo designing Events etc.</p>
              </div>
              
    
            </div>
    
          </div>
    
          <div className="tab-pane fade" id="panel34" role="tabpanel">
    
            <div className="row">
              
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="overlay zoom z-depth-2">
                  <img src="https://mdbootstrap.com/img/Photos/Others/project1.jpg" className="img-fluid"/>
                </div>
                <p className="text-center font-weight-bold text-muted my-4">Volunteering at International Conference ETTA-2019</p>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-4">
                <div className=" overlay zoom z-depth-2">
                  <img src="https://mdbootstrap.com/img/Photos/Others/project7.jpg" className="img-fluid"/>
                </div>
                <p className="text-center font-weight-bold text-muted my-4">Volunteering at International Conference ETTA-2019</p>
              </div>
              
             
              
            </div>
    
          </div>
    
        </div>
    
      </section>
           
    </div>
  </div>


    <a name="about-us"></a>
    <div className="container mt-2 py-5">
      <section className="dark-grey-text text-center ">

        <h3 className="font-weight-bold mb-4 pb-2">About Us</h3>
        <div className="row">
          <div className="col-md-7">
            <p className="mx-auto text-justify">The Technical Club of <a href="http://reck.ac.in/" target="_blank" rel="nofollow noopener">Rajkiya Engineering College, Kannauj</a> is a students' club working on the motto of <strong>“Think, Plan and Act”</strong>. This club is an appreciable initiative by the respected faculty members and students to bring the institute on the same platform with national as well as international institutions. UNNAT club is group of about fifty innovative and dedicated minds meticulously working to achieve the objectives and the goals led down by the club.</p>

            <p className="mx-auto text-justify">
              Technical advancement of the college is the soul attribute of the club and it serves as a platform where the neoteric ideas of students are nurtured, it helps in equipping the students with technologies of ever changing world so that they can face hurdles of today's world.</p>

            <p className="mx-auto text-justify">Apart from working on technical gigs club plays an indispensable role in providing opportunities that can be accumulated and bestow creative minds to work on innovative ideas. The group represents the college at various competitions held across the nation.</p>
              
            <p className="mx-auto text-justify">The club consists of four core teams to function effectively and to deliver the best:</p>

          </div>
          <div className="col-md-5">
            <img src="img/about.png" className="img-fluid" alt=""/>
          </div>
        </div>
        
          <ol className="mx-auto text-justify">
            <li className="mb-2"><strong>Technical Team:</strong>
              The mother of all technologies. Technical coding is formed to stimulate the brains of the students. The mission is to inspire young innovators and enhance coding ability.The club conducts various of brainstorming session, workshop and events to lead the foundation strong of coding.
            </li>
            <li className="mb-2"><strong>Designing Team:</strong>
                Designing involves the team of creative students with huge urge of learning ,experimenting and acting. We believe the future needs more people designer to make the world a better place.The agenda of designing is to get design thinking, nurturing empathy , collaborative and creative problem solution.
            </li>
            <li className="mb-2"><strong>Documentation Team:</strong>
                  Documentation is a platform where student can show their creativity and thinking by laying down. It is a field where pen plays a vital role to portray your skill. The main focus is to write clearly,  concisely and precisely .The ability to write well and convey information to the intended audience in an easy manner is primary prerequisite
            </li>
            <li><strong>Management Team:</strong>
                    Management is field where students learn how to co-ordinate with colleagues. Management includes activities of setting strategy of an organisation and coordinating the efforts of its volunteers. Club aims to make the members  responsible, sensible and productible.
            </li>
           </ol>
      
    </section>
    </div>

  
  <div style={{backgroundColor: "aliceblue"}} hidden>
    
    
    <section className="container team-section text-center dark-grey-text py-5" >
  
      <h3 className="font-weight-bold mb-4 pb-2">Testimonials</h3>
      <p className="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
        eum porro a pariatur veniam.</p>
  
      <div className="row text-center">
  
        <div className="col-md-4 mb-4">
  
          <div className="testimonial card p-4">
            <div className="avatar mx-auto">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" className="rounded-circle z-depth-1 img-fluid"/>
            </div>
            <h4 className="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
            <h6 className="font-weight-bold blue-text my-3">Web Designer</h6>
            <p className="font-weight-normal dark-grey-text">
              <i className="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
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
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle z-depth-1 img-fluid"/>
            </div>
            <h4 className="font-weight-bold dark-grey-text mt-4">John Doe</h4>
            <h6 className="font-weight-bold blue-text my-3">Web Developer</h6>
            <p className="font-weight-normal dark-grey-text">
              <i className="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
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
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle z-depth-1 img-fluid"/>
            </div>
            <h4 className="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
            <h6 className="font-weight-bold blue-text my-3">Photographer</h6>
            <p className="font-weight-normal dark-grey-text">
              <i className="fas fa-quote-left pr-2"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.</p>
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
  


  <div className="bg-primary">
      <section className="container text-white p-5">
  
        <div className="row">
  
          <div className="col-md-5 mb-4 mb-md-0">
  
            <div className="view">
              <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" className="img-fluid" alt="smaple image"/>
            </div>
  
          </div>
  
          <div className="col-md-7 mb-lg-0 mb-4">
  
            <form className="" action="">
  
              <h3 className="font-weight-bold my-3">Subscribe</h3>
              
              <p className="mb-4 pb-2">Want to hear from us about the latest events and newsletters. Feel free to subscribe to our newsletter service.</p>
    
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email address" aria-label="Enter your email address"
                  aria-describedby="button-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-md btn-outline-white m-0 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Subscribe</button>
                </div>
              </div>
              <small className="form-text"><strong>* Leave your email addres to be notified first.</strong></small>
              
            </form>
  
          </div>
  
        </div>
        
      </section>
  </div>



  <a name="faqs"></a>
  <div className="container my-5">

    <section>
  
      <h6 className="font-weight-normal text-uppercase font-small grey-text mb-4 text-center">FAQ</h6>
      <h3 className="font-weight-bold black-text mb-4 pb-2 text-center">Frequently Asked Questions</h3>
      <hr className="w-header"/>
      <p className="lead text-muted mx-auto mt-4 pt-2 mb-5 text-center">Got a question? We've got answers. If you have some other questions, see our support center.</p>
  
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <h5 className="font-weight-normal mb-3">What is the motto of the club?</h5>
          <p className="text-muted">The motto of the club is "THINK, PLAN, ACT"...</p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h5 className="font-weight-normal mb-3">What is the vision of the Club?</h5>
          <p className="text-muted">The vision is for the all-round development of the students and to enrich their technical knowledge. This club envisages a conducive platform to explore student’s latest talent and also to enable them to come out with their innovative ideas.</p>
        </div>
  
        
  
        <div className="col-md-6 col-lg-4 mb-4">
          <h5 className="font-weight-normal mb-3">What are the benefits of students being a member of the club?</h5>
          <p className="text-muted">This club helps the students to broaden their skills horizons. This club not only helps the students to explore their hidden talent but also helps in areas such as personality development, build up confidence.</p>
        </div>
  
        <div className="col-md-6 col-lg-4 mb-4">
          <h5 className="font-weight-normal mb-3">What are the activities under the club?</h5>
          <p className="text-muted">This club conducts various technical events such as quizzes.
            Conducts quest lectures, FDPs (FACULTY DEVELOPMENT PROGRAMMES), essay competitions.
            </p>
        </div>
  
        {/* <!-- <div className="col-md-6 col-lg-4 mb-4">
          <h5 className="font-weight-normal mb-3">Can I request refund?</h5>
          <p className="text-muted">Unfortunately, not. We do not issue full or partial refunds for any reason.</p>
        </div>
  
        <div className="col-md-6 col-lg-4 mb-4">
          <h5 className="font-weight-normal mb-3">Can I try your service for free?</h5>
          <p className="text-muted">Of course! We’re happy to offer a free plan to anyone who wants to try our service.</p>
        </div> --> */}
      </div>
  
    </section>
    
  </div>




  <div style={{backgroundColor: "aliceblue"}}> 
      <a name="contact-us"></a>
      <section className="container py-5 text-center text-lg-left dark-grey-text">
  
        <div className="row">
  
          <div className="col-lg-5 col-md-12 mb-0 mb-md-0">
  
            <h3 className="font-weight-bold">Contact Us</h3>
  
            <p className="text-muted">If you have any questions, quries about the club, you are free to write us. We will happy to hear from you.</p>
  
            <p><span className="font-weight-bold mr-2">Email:</span><a href="">contact@unnat.com</a></p>
            <p><span className="font-weight-bold mr-2">Phone:</span><a href="">+48 123 456 789</a></p>
  
          </div>
  
          <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
  
            <div className="row">
  
              <div className="col-md-6">
  
                <div className="md-form md-outline mb-0">
                  <input type="text" id="form-first-name" className="form-control"/>
                  <label htmlFor="form-first-name">First name</label>
                </div>
  
              </div>
  
              <div className="col-md-6">
  
                <div className="md-form md-outline mb-0">
                  <input type="text" id="form-last-name" className="form-control"/>
                  <label htmlFor="form-last-name">Last name</label>
                </div>
  
              </div>
  
            </div>
  
            <div className="md-form md-outline mt-3">
              <input type="email" id="form-email" className="form-control"/>
              <label htmlFor="form-email">E-mail</label>
            </div>
  
            <div className="md-form md-outline">
              <input type="text" id="form-subject" className="form-control"/>
              <label htmlFor="form-subject">Subject</label>
            </div>
  
            <div className="md-form md-outline mb-3">
              <textarea id="form-message" className="md-textarea form-control" rows="3"></textarea>
              <label htmlFor="form-message">How we can help?</label>
            </div>
  
            <button type="submit" className="btn btn-info btn-sm btn-rounded ml-0">Submit<i className="far fa-paper-plane ml-2"></i></button>
  
          </div>
  
        </div>
  
  
      </section>
  
  </div>

</main>
<script type="text/javascript" src="../public/js/jquery.js"></script>
    <script type="text/javascript" src="../public/js/popper.js"></script>
    <script type="text/javascript" src="../public/js/bootstrap.js"></script>
    <script type="text/javascript" src="../public/js/mdb.js"></script>
    <script src="/js/script.js"></script>
</div>


)

export default Main