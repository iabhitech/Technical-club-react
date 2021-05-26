import { Fragment } from "react";
const ClubDisscussion = () => {
  return (
    <Fragment>
      <div id="chatBox" className="chatbox">
        <div
          className="card chat-room small-chat wide"
          name="reciverId"
          id="myForm1"
        >
          <div
            className="card-header white d-inline-flex justify-content-between p-2"
            id="toggleChat"
          >
            <div className="heading d-flex justify-content-start w-50">
              <div className="profile-photo">
                <img
                  src="/fevicon.ico"
                  alt="Icon Unnat Club"
                  className="myAvatar avatar rounded-circle mr-2 ml-0"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className="data ml-4">
                <p className="name mb-0">
                  <strong>Club Disscussion</strong>
                </p>
                <span className="activity text-muted mb-0" id="lastSeenChatter">
                  Last Message
                </span>
                <span className="text-muted mb-0"> 2 min ago</span>
              </div>
            </div>

            <div className="icons grey-text">
              {/* <a className="feature"><i className="fas fa-video mr-2"></i></a> 
                  <a className="feature"><i className="fas fa-phone mr-2"></i></a> 
                  <a className="feature"><i className="fas fa-cog mr-2"></i></a>  */}
              {/* <a id="closeButton" href="#/">
                <i className="fas fa-times mr-2"></i>
              </a> */}
            </div>
          </div>

          <div className="chat-scrollbar scrollbar-light-blue" id="message">
            <div className="card-body p-3">
              <div className="chat-message">
                {/* <div className="media mb-3">
                  <img
                    className="myAvatar d-flex rounded mr-2"
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    height="65px"
                    alt="Generic placeholder"
                  />
                  <div className="media-body">
                    <p className="my-0">You're friends on iConnect</p>
                    <p className="mb-0 text-muted small">AboutProfession</p>
                    <p className=" mb-0 text-muted small">AboutCity</p>
                    <hr />
                  </div>
                </div> */}

                {/* <!-- <div className="text-center text-muted small m-3">02/05/2020</div> --> */}
                <span className="last" name="noMsg" hidden></span>

                <div align="right" className="last">
                  <div className="card bg-primary rounded z-depth-0 mb-1 message-text text-left">
                    <div className="card-body p-2">
                      <span className="card-text text-white">chat</span>
                      <span className="small align-bottom time-massage1chatmassage">
                        2 min ago
                      </span>
                    </div>
                  </div>
                </div>

                <div className="last">
                  <div className="d-flex">
                    <div className="profile-photo message-photo">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                        alt="avatar"
                        className="myAvatar rounded-circle mr-2 ml-0 "
                        width="38px"
                      />
                    </div>

                    <div className=" card bg-light rounded z-depth-0 mb-1 message-text">
                      <div className="card-body p-2">
                        <span className="card-text black-text">chat[0]</span>
                        <span className="small align-bottom time-massage1chatmassage">
                          chat[1]
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted white pt-1 pb-2 px-3 mt-auto d-flex align-content-center">
            <div>
              <a
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#/"
              >
                <i className="far fa-laugh mr-2"></i>
              </a>

              <div className="reactions scrollbar-light-blue dropdown-menu p-2">
                <span className="reaction">&#128512;</span>
                <span className="reaction">&#128513;</span>
                <span className="reaction">&#128514;</span>
                <span className="reaction">&#128515;</span>
                <span className="reaction">&#128516;</span>
                <span className="reaction">&#128517;</span>
                <span className="reaction">&#128518;</span>
                <span className="reaction">&#128519;</span>
                <span className="reaction">&#128520;</span>
                <span className="reaction">&#128521;</span>
                <span className="reaction">&#128522;</span>
                <span className="reaction">&#128523;</span>
                <span className="reaction">&#128524;</span>
                <span className="reaction">&#128525;</span>
                <span className="reaction">&#128526;</span>
                <span className="reaction">&#128527;</span>
                <span className="reaction">&#128528;</span>
                <span className="reaction">&#128529;</span>
                <span className="reaction">&#128530;</span>
                <span className="reaction">&#128531;</span>
                <span className="reaction">&#128532;</span>
                <span className="reaction">&#128533;</span>
                <span className="reaction">&#128534;</span>
                <span className="reaction">&#128535;</span>
                <span className="reaction">&#128536;</span>
                <span className="reaction">&#128537;</span>
                <span className="reaction">&#128538;</span>
                <span className="reaction">&#128539;</span>
                <span className="reaction">&#128540;</span>
                <span className="reaction">&#128541;</span>
                <span className="reaction">&#128542;</span>
                <span className="reaction">&#128543;</span>
                <span className="reaction">&#128544;</span>
                <span className="reaction">&#128545;</span>
                <span className="reaction">&#128546;</span>
                <span className="reaction">&#128547;</span>
                <span className="reaction">&#128547;</span>
                <span className="reaction">&#128548;</span>
                <span className="reaction">&#128549;</span>
                <span className="reaction">&#128550;</span>
                <span className="reaction">&#128551;</span>
                <span className="reaction">&#128552;</span>
                <span className="reaction">&#128553;</span>
                <span className="reaction">&#128554;</span>
                <span className="reaction">&#128555;</span>
                <span className="reaction">&#128556;</span>
                <span className="reaction">&#128557;</span>
                <span className="reaction">&#128558;</span>
                <span className="reaction">&#128559;</span>
                <span className="reaction">&#128560;</span>
                <span className="reaction">&#128561;</span>
                <span className="reaction">&#128562;</span>
                <span className="reaction">&#128563;</span>
                <span className="reaction">&#128564;</span>
                <span className="reaction">&#128565;</span>
                <span className="reaction">&#128566;</span>
                <span className="reaction">&#128567;</span>
                <span className="reaction">&#128577;</span>
                <span className="reaction">&#128578;</span>
                <span className="reaction">&#128579;</span>
                <span className="reaction">&#128580;</span>
                <span className="reaction">&#129296;</span>
                <span className="reaction">&#129297;</span>
                <span className="reaction">&#129298;</span>
                <span className="reaction">&#129299;</span>
                <span className="reaction">&#129300;</span>
                <span className="reaction">&#129301;</span>
                <span className="reaction">&#129312;</span>
                <span className="reaction">&#129313;</span>
                <span className="reaction">&#129314;</span>
                <span className="reaction">&#129315;</span>
                <span className="reaction">&#129316;</span>
                <span className="reaction">&#129317;</span>
                <span className="reaction">&#129318;</span>
                <span className="reaction">&#129319;</span>
                <span className="reaction">&#129320;</span>
                <span className="reaction">&#129321;</span>
                <span className="reaction">&#129322;</span>
                <span className="reaction">&#129323;</span>
                <span className="reaction">&#129324;</span>
                <span className="reaction">&#129325;</span>
                <span className="reaction">&#129326;</span>
                <span className="reaction">&#129327;</span>
                <span className="reaction">&#129488;</span>
              </div>
            </div>
            <input
              type="text"
              id="exampleForm2"
              className="form-control"
              autocomplete="off"
              name=""
              placeholder="Type a message..."
            />

            <a href="#/">
              <i className="fas fa-thumbs-up float-right"></i>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ClubDisscussion;
