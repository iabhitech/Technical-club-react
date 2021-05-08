import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./Forms.css";

const FormMembership = () => {
  return (
    <div>
       <br/>
        <br />
        <br />
      <Form style={{ backgroundColor: "rgb(242,248,254" }}>
       
        <Col md={7}>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="formEmail"
              className="formMembership-input"
              placeholder="Your Email"
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="formFistName">First Name</Label>
                <Input
                  type="text"
                  name="formFistName"
                  id="formFistName"
                  placeholder="First Name"
                  className="formMembership-input"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="formLastName">Last Name</Label>
                <Input
                  type="text"
                  name="formLastName"
                  id="formLastName"
                  placeholder="Last Name"
                  className="formMembership-input"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleSelect">College</Label>
            <Input type="select" name="select" id="exampleSelect" className="formMembership-input">
              <option>REC Kannauj</option>
              <option>Other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Your College/Organisation Name</Label>
            <Input
              type="text"
              name="formLastName"
              placeholder="Your College/Organisation Name"
              min="3"
              max="20"
              className="formMembership-input"
            />
          </FormGroup>
          <Label for="exampleSelect">Select Team</Label>
          <Row>
            <Col md={3}>
              <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheckbox1" />
                <Label for="exampleCheck" check>
                  Technical Team
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheckbox2" />
                <Label for="exampleCheck" check>
                  Documentation
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheckbox3" />
                <Label for="exampleCheck" check>
                  Management
                </Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheckbox4" />
                <Label for="exampleCheck" check>
                  Designing
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Button color="primary" block>
                Submit
              </Button>
            </Col>
          </Row>
        </Col>
      </Form>
    </div>
  );
};

export default FormMembership;
