import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

const FormMembership = ({lgShow,openMembershipForm}) => {
  const [college, setCollege] = useState("REC KANNAUJ");

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => openMembershipForm(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "rgb(242,248,254)" }}
        >
          <Modal.Title id="example-modal-sizes-title-lg">
            Fill the Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "rgb(242,248,254)" }}>
          <Form>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>College</Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2 rounded bg-light text-secoundry border-dark"
                custom
                onChange={(e) => setCollege(e.target.value)}
              >
                <option value="REC KANNAUJ">REC KANNAUJ</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
            {college.toString() === "REC KANNAUJ" ? (
              <Form.Row>
                <Form.Group as={Col} controlId="reckStudentYear">
                  <Form.Label>Year</Form.Label>
                  <Form.Control as="select" defaultValue="First Year" className="rounded bg-light text-secoundry border-dark">
                    <option>First Year</option>
                    <option>Secound Year</option>
                    <option>Third Year</option>
                    <option>Fourth Year</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="reckStudentBranch">
                  <Form.Label>Year</Form.Label>
                  <Form.Control as="select" defaultValue="CSE" className="rounded bg-light text-secoundry border-dark">
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>EE</option>
                    <option>CE</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="reckStudentRollNumber">
                  <Form.Label>Roll Number</Form.Label>
                  <Form.Control type="number" placeholder="0000000000" className="rounded bg-light text-secoundry border-dark"/>
                </Form.Group>
                <Form.Group as={Col} controlId="reckStudentGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" defaultValue="Male" className="rounded bg-light text-secoundry border-dark">
                      <option>Male</option>
                      <option>FeMale</option>
                    </Form.Control>
                  </Form.Group>
              </Form.Row>
            ) : (
              ""
            )}
            {college.toString() !== "REC KANNAUJ" ? (
              <div>
                {" "}
                <Form.Group controlId="otherCollege">
                  <Form.Label
                    className="mr-sm-2"
                    // htmlFor="inlineFormCustomSelect"
                    // srOnly
                  >
                    Your College Name
                  </Form.Label>
                  <Form.Control placeholder="IIT KANPUR" className=" rounded bg-light text-secoundry border-dark"/>
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="otherCity">
                    <Form.Label>College City</Form.Label>
                    <Form.Control placeholder="KANPUR" className="rounded bg-light text-secoundry border-dark"/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="OtherState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="UTTAR PRADESH" className="rounded bg-light text-secoundry border-dark">
                      <option>UTTAR PRADESH</option>
                      <option>Andhra Pradesh</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chhattisgarh</option>
                      <option>Goa</option>
                      <option>Gujarat</option>
                      <option>Haryana</option>
                      <option>Himachal Pradesh</option>
                      <option>Jammu and Kashmir</option>
                      <option>Jharkhand</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                      <option>Madhya Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Manipur</option>
                      <option>Meghalaya</option>
                      <option>Mizoram</option>
                      <option>Nagaland</option>
                      <option>Odisha</option>
                      <option>Punjab</option>
                      <option>Rajasthan</option>
                      <option>Sikkim</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>Tripura</option>
                      <option>Uttarakhand</option>
                      <option>West Bengal</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="otherPinCode">
                    <Form.Label>Pin Code College</Form.Label>
                    <Form.Control placeholder="000 000" className="rounded bg-light text-secoundry border-dark"/>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="otherStudentYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control as="select" defaultValue="First Year" className="rounded bg-light text-secoundry border-dark">
                      <option>First Year</option>
                      <option>Secound Year</option>
                      <option>Third Year</option>
                      <option>Fourth Year</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="otherStudentBranch">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control type="text" placeholder="CSE" className="rounded bg-light text-secoundry border-dark"/>
                  </Form.Group>
                  <Form.Group as={Col} controlId="otherStudentRollNumber">
                    <Form.Label>Roll Number</Form.Label>
                    <Form.Control type="number" placeholder="0000000000" className="rounded bg-light text-secoundry border-dark"/>
                  </Form.Group>
                  <Form.Group as={Col} controlId="otherStudentGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" defaultValue="Male" className="rounded bg-light text-secoundry border-dark">
                      <option>Male</option>
                      <option>FeMale</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </div>
            ) : (
              ""
            )}
            <Form.Group>
              <Form.Label>Choose Teams That You wanna Join</Form.Label>
              <Form.Row style={{border:"1px solid #000"}} className="rounded bg-light text-secoundry border-dark">
                <Form.Group as={Col} controlId="formGridCheckbox1"  className="">
                  <Form.Check type="checkbox" label="Technical Team" className="text-center text-secoundry ml-2 mb-0" style={{display:"block" ,marginTop:"8px"}}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCheckbox2" >
                  <Form.Check type="checkbox" label="Documentation Team" className="text-center text-secoundry mt-2 ml-2" style={{disable:"block"}}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCheckbox3" >
                  <Form.Check type="checkbox" label="Management Team" className="text-center text-secoundry mt-2 ml-2" style={{disable:"block"}}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCheckbox4" >
                  <Form.Check type="checkbox" label="Designing Team" className="text-center text-secoundry mt-2 ml-2" style={{disable:"block"}}/>
                </Form.Group>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId="whyJoinYou">
              <Form.Label>Why Should be Join You</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="This would Effect to Your Selection"
                className="rounded bg-light text-secoundry border-dark"
              />
            </Form.Group>
            <Form.Group controlId="whyJoinYou">
              <Form.Label>Upload Your CV</Form.Label>
              <Form.File
                id="custom-file-translate-scss"
                label="Pdf File Only"
                lang="en"
                className="rounded btn ml-4 border-dark border-bottom-dark"
                custom
                style={{color:"#0275d8",width:"79px"}}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormMembership;
