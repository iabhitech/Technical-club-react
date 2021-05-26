import { Col, Row, Container, Alert, Image, Form } from "react-bootstrap";
import { BsPen } from "react-icons/bs";

import style from "./memberprofile.module.css";
const MemberProfile = () => {
  return (
    <Container>
      <Alert style={{backgroundColor:"rgb(247,247,247)"}}>
        <h5 className="text-center">Your Profile</h5>
      </Alert>
      <Row className="d-flex justify-content-center">
        <Col md="auto">
          <div className="d-flex justify-content-center">
            <Image
              src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
              roundedCircle
              width="150px"
              height="150px"
              alt="Profile"
            />
          </div>
          <h3 className="text-primary text-center">Naveen Tiwari</h3>
          <span className="d-block text-center text-muted">Member</span>
        </Col>
      </Row>
      <hr className="hr-dark" />
      <Row>
        <Col md={1}>
          <h5 className="text-primary pt-2">Name</h5>
        </Col>
        <Col md={10} className="pf-0 pr-0 ml-0 mr-0">
          <Form>
            <Form.Control
              placeholder="Jack ryder"
              className={
                "border-top-0 border-left-0 border-right-0 border-muted rounded-0 pl-4 " +
                style.inputgroup
              }
            />
          </Form>
        </Col>
        <Col md={1}>
          <BsPen />
        </Col>
      </Row>
      <br />
      <Form>
        <Row>
          <Col md={1}>
            <h5 className="text-primary pt-2">Email</h5>
          </Col>
          <Col md={10}>
            <Form.Control
              placeholder="test@test.com"
              disabled
              value="test@test.com"
              className={
                "border-top-0 border-left-0 border-right-0 border-muted rounded-0 pl-4 bg-white " +
                style.inputgroup
              }
            />
          </Col>
          <Col md={1}>
            <BsPen />
          </Col>
        </Row>
      </Form>
      <br />
      <Form>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={2}>
                <h5 className="text-primary pt-2">Branch</h5>
              </Col>
              <Col md={8}>
                <Form.Control
                  placeholder="Your Branch"
                  className={
                    "border-top-0 border-left-0 border-right-0 border-muted rounded-0 pl-4 " +
                    style.inputgroup
                  }
                />
              </Col>
              <Col md={2}>
                <BsPen />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={2}>
                <h5 className="text-primary pt-2">Year</h5>
              </Col>
              <Col md={8}>
                <Form.Control
                  placeholder="Your Year"
                  className={
                    "border-top-0 border-left-0 border-right-0 border-muted rounded-0 pl-4 " +
                    style.inputgroup
                  }
                />
              </Col>
              <Col md={2}>
                <BsPen />
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      <br />
      <Row>
        <Col md={6}>
          <Form>
            <Row>
              <Col md={2}>
                <h5 className="text-primary pt-2">Position</h5>
              </Col>
              <Col md={8}>
                <Form.Control
                  disabled
                  value="Member"
                  placeholder="Member"
                  className={
                    "border-top-0 border-left-0 border-right-0 border-muted rounded-0 pl-4 bg-white " +
                    style.inputgroup
                  }
                />
              </Col>
              <Col md={2}>
                <BsPen />
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={6}>
          <Form>
            <Row>
              <Col md={3}>
                <h5 className="text-primary pt-2">Specialization</h5>
              </Col>
              <Col md={7}>
                <Form.Control
                  placeholder="Web/(AI/ML/DataScience)/Android"
                  className={
                    "border-top-0 border-left-0 border-right-0 border-muted rounded-0 pl-2 " +
                    style.inputgroup
                  }
                />
              </Col>
              <Col md={2}>
                <BsPen />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <br />
    </Container>
  );
};
export default MemberProfile;
