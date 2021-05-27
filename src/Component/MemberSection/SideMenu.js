import { Col, Row } from "react-bootstrap";

import { useState } from "react";

import Dashboard from "./Dashboard";
// import Main2 from "./Main";
import LoboSection from "./LoboSection";
import Members from "./MemberPannel/Members";
import ClubDisscussion from "./MemberPannel/ClubDisscussion";
import AnnouncementsClub from "./MemberPannel/AnnouncementsClub";

import MemberProfile from "./MemberPannel/MemberProfile";

const SideMenu = () => {
  const [rightContainer, setRightContainer] = useState("Profile");
  return (
    <div className="container-fluid">
      <Dashboard />
      {/* <Main2 /> */}
      <LoboSection />
      <Row>
        <Col md={3} className="mb-2">
          <div className="card loading card-sticky">
            {/* <div className="card-header px-3">Members</div> */}
            <div className="card-body p-0">
              <ul className="list-unstyled pl-2">
                <li className="list-item">
                  <a href="#/" onClick={() => setRightContainer("Profile")}>
                    <div className="d-flex">
                      <div className={"m-2 " + (rightContainer.toString() === "Profile" ? "text-primary" : "")}>
                        Profile
                      </div>
                    </div>
                  </a>
                </li>
                <hr className="m-0" />
                <li className="list-item">
                  <a href="#/" onClick={() => setRightContainer("Members")}>
                    <div className="d-flex">
                      <div className={"m-2 " + (rightContainer.toString() === "Members" ? "text-primary" : "")}>
                        Members
                      </div>
                    </div>
                  </a>
                </li>
                <hr className="m-0" />

                <li className="list-item">
                  <a href="#/" onClick={() => setRightContainer("Team Members")}>
                    <div className="d-flex">
                      <div className={"m-2 " + (rightContainer.toString() === "Team Members" ? "text-primary" : "")}>
                        Team Members
                      </div>
                    </div>
                  </a>
                </li>
                <hr className="m-0" />

                <li className="list-item">
                  <a href="#/" onClick={() => setRightContainer("Club Disscussion")}>
                    <div className="d-flex">
                      <div
                        className={"m-2 " + (rightContainer.toString() === "Club Disscussion" ? "text-primary" : "")}
                      >
                        Club Disscussion
                      </div>
                    </div>
                  </a>
                </li>
                <hr className="m-0" />

                <li className="list-item">
                  <a href="#/" onClick={() => setRightContainer("Announcements Club")}>
                    <div className="d-flex">
                      <div
                        className={"m-2 " + (rightContainer.toString() === "Announcements Club" ? "text-primary" : "")}
                      >
                        Announcements Club
                      </div>
                    </div>
                  </a>
                </li>
                <hr className="m-0" />

                <li className="list-item">
                  <a href="#/" onClick={() => setRightContainer("Announcements Team")}>
                    <div className="d-flex">
                      <div
                        className={"m-2 " + (rightContainer.toString() === "Announcements Team" ? "text-primary" : "")}
                      >
                        Announcements Team
                      </div>
                    </div>
                  </a>
                </li>
                <hr className="m-0" />

                <li className="list-item">
                  <a href="#/" onClick={() => setRightContainer("Recommended Seniors")}>
                    <div className="d-flex">
                      <div
                        className={"m-2 " + (rightContainer.toString() === "Recommended Seniors" ? "text-primary" : "")}
                      >
                        Recommended Seniors
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={9} className="mb-2">
          {rightContainer.toString() === "Profile" && <MemberProfile />}
          {rightContainer.toString() === "Members" && <Members />}
          {rightContainer.toString() === "Team Members" && <Members />}
          {rightContainer.toString() === "Club Disscussion" && <ClubDisscussion />}
          {rightContainer.toString() === "Announcements Club" && <AnnouncementsClub />}
          {rightContainer.toString() === "Announcements Team" && <AnnouncementsClub />}
          {rightContainer.toString() === "Recommended Seniors" && <Members />}
        </Col>
      </Row>
    </div>
  );
};
export default SideMenu;
