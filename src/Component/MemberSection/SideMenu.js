import { Col, Row} from "react-bootstrap";

import { useState } from "react";

import Dashboard from "./Dashboard";
// import Main2 from "./Main";
import LoboSection from "./LoboSection";
import Members from "./MemberPannel/Members";
import ClubDisscussion from "./MemberPannel/ClubDisscussion";
import AnnouncementsClub from "./MemberPannel/AnnouncementsClub";

import { Fragment } from "react";

import MemberProfile from "./MemberPannel/MemberProfile";

const SideMenu = () => {
  const [rightContainer, setRightContainer] = useState("Profile");
  return (
    <Fragment>
      <Dashboard />
      {/* <Main2 /> */}
      <LoboSection />
      <Row>
        <Col md={3}>
          <div className="col p-1">
            <div className="card loading">
              {/* <div className="card-header px-3">Members</div> */}
              <div className="card-body p-0">
                <ul className="list-unstyled">
                  <li className="list-item">
                    <a href="#/" onClick={() => setRightContainer("Profile")}>
                      <div className="d-flex justify-content-center">
                        <div className="pl-2">
                          <h5
                            className={
                              "m-3 " +
                              (rightContainer.toString() === "Profile"
                                ? "text-primary"
                                : "")
                            }
                          >
                            Profile
                          </h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="list-item">
                    <a href="#/" onClick={() => setRightContainer("Members")}>
                      <div className="d-flex justify-content-center">
                        <div className="pl-2">
                          <h5
                            className={
                              "m-3 " +
                              (rightContainer.toString() === "Members"
                                ? "text-primary"
                                : "")
                            }
                          >
                            Members
                          </h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="list-item">
                    <a
                      href="#/"
                      onClick={() => setRightContainer("Team Members")}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="pl-2">
                          <h5
                            className={
                              "m-3 " +
                              (rightContainer.toString() === "Team Members"
                                ? "text-primary"
                                : "")
                            }
                          >
                            Team Members
                          </h5>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a
                      href="#/"
                      onClick={() => setRightContainer("Club Disscussion")}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="pl-2">
                          <h5
                            className={
                              "m-3 " +
                              (rightContainer.toString() === "Club Disscussion"
                                ? "text-primary"
                                : "")
                            }
                          >
                            Club Disscussion
                          </h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="list-item">
                    <a
                      href="#/"
                      onClick={() => setRightContainer("Announcements Club")}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="pl-2">
                          <h5
                            className={
                              "m-3 " +
                              (rightContainer.toString() ===
                              "Announcements Club"
                                ? "text-primary"
                                : "")
                            }
                          >
                            Announcements Club
                          </h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="list-item">
                    <a
                      href="#/"
                      onClick={() => setRightContainer("Announcements Team")}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="pl-2">
                          <h5
                            className={
                              "m-3 " +
                              (rightContainer.toString() ===
                              "Announcements Team"
                                ? "text-primary"
                                : "")
                            }
                          >
                            Announcements Team
                          </h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="list-item">
                    <a
                      href="#/"
                      onClick={() => setRightContainer("Recommended Seniors")}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="pl-2">
                          <h5
                            className={
                              "m-3 " +
                              (rightContainer.toString() ===
                              "Recommended Seniors"
                                ? "text-primary"
                                : "")
                            }
                          >
                            Recommended Seniors
                          </h5>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
        <Col md={9}>
          {rightContainer.toString() === "Profile" && <MemberProfile />}
          {rightContainer.toString() === "Members" && <Members />}
          {rightContainer.toString() === "Team Members" && <Members />}
          {rightContainer.toString() === "Club Disscussion" && <ClubDisscussion />}
          {rightContainer.toString() === "Announcements Club" && <AnnouncementsClub />}
          {rightContainer.toString() === "Announcements Team" && <AnnouncementsClub />}
          {rightContainer.toString() === "Recommended Seniors" && <Members />}

        </Col>
      </Row>
    </Fragment>
  );
};
export default SideMenu;
