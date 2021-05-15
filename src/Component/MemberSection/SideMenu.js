import { Col, Row, Container } from "react-bootstrap";

import style from "./SideMenu.module.css";

import MemberProfile from "./MemberPannel/MemberProfile";
const SideMenu = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <div className="rounded ml-3">
            <Row xs={1} md={0}>
              <a
                href="#/"
                className={"rounded text-dark mt-1 " + style.sidemenuelement}
              >
                <Container
                  className={"themed-container " + style.sidemenuelement}
                  fluid="sm"
                >
                  Profile
                </Container>
              </a>
              <a
                href="#/"
                className={"rounded text-dark mt-1 " + style.sidemenuelement}
              >
                <Container
                  className={"themed-container " + style.sidemenuelement}
                  fluid="sm"
                >
                  Team
                </Container>
              </a>
              <a
                href="#/"
                className={"rounded text-dark mt-1 " + style.sidemenuelement}
              >
                <Container
                  className={"themed-container " + style.sidemenuelement}
                  fluid="md"
                >
                  Disscussion
                </Container>
              </a>
              <a
                href="#/"
                className={"rounded text-dark mt-1 " + style.sidemenuelement}
              >
                <Container
                  className={"themed-container " + style.sidemenuelement}
                  fluid="lg"
                >
                  Announcements
                </Container>
              </a>
              <a
                href="#/"
                className={"rounded text-dark mt-1 " + style.sidemenuelement}
              >
                <Container
                  className={"themed-container " + style.sidemenuelement}
                  fluid="xl"
                >
                  REC Group
                </Container>
              </a>
              <a
                href="#/"
                className={"rounded text-dark mt-1 " + style.sidemenuelement}
              >
                <Container
                  className={"themed-container " + style.sidemenuelement}
                  fluid={true}
                >
                  Reccomended Seniors
                </Container>
              </a>
              <a
                href="#/"
                className={"rounded text-dark mt-1 " + style.sidemenuelement}
              >
                <Container
                  className={"themed-container " + style.sidemenuelement}
                  fluid={true}
                >
                  .container-fluid
                </Container>
              </a>
              <a
                href="#/"
                className={"rounded text-dark mt-1 " + style.sidemenuelement}
              >
                <Container
                  className={"themed-container " + style.sidemenuelement}
                  fluid={true}
                >
                  .container-fluid
                </Container>
              </a>
            </Row>
          </div>
        </Col>
        <Col md={9}>
        <MemberProfile/>
        </Col>
      </Row>
    </div>
  );
};
export default SideMenu;
