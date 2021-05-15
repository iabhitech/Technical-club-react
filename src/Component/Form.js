import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import Api from "../Api/index";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import constants from "../config/constants"

const FormMembership = ({ lgShow, openMembershipForm }) => {
  const [userDetails, setUserDetails] = useState({
    gender: "Male",
    teams: [],
    collegeName: "REC KANNAUJ",
    collegeYear: "First Year",
    collegeBranch: "CSE",
    collegeRollNumber: "",
    collegeCity: "KANNAUJ",
    collegeState: "UTTAR PRADESH",
    collegeCityPinCode: "209732",
    message: "",
  });
  const onClickOncheckBox = (checkboxName) => {
    const teamExist = userDetails.teams.includes(checkboxName + " ");
    if (teamExist) {
      userDetails.teams = userDetails.teams.replace(checkboxName + " ", "");
    } else {
      userDetails.teams += checkboxName + " ";
    }
    setUserDetails((prev) => {
      return { ...prev, teams: userDetails.teams };
    });
  };
  const submitMemberForm = async (e) => {
    e.preventDefault();
    document.getElementById("form-submit-button-membership").disabled = true;
      const response = await Api.submitMemberForm(userDetails);
      console.log(response);
      if(response.code===500){
        toast.error('🦄 SomeThink Went Wrong', constants.tostObject);
      }else if(response.code===200){
        toast.success('🦄 Request Sent Successfully', constants.tostObject);
      }
      else {
        toast.warn('🦄 User is Unauthorized', constants.tostObject);
      }
  };
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
          <Form onSubmit={(e) => submitMemberForm(e)}>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>College</Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2 rounded bg-light text-secoundry border-dark"
                custom
                onChange={(e) =>
                  setUserDetails((prev) => {
                    return {
                      ...prev,
                      collegeName: e.target.value,
                      collegeYear: "First Year",
                      gender: "Male",
                    };
                  })
                }
              >
                <option value="REC KANNAUJ">REC KANNAUJ</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
            {userDetails.collegeName.toString() === "REC KANNAUJ" ? (
              <Form.Row>
                <Form.Group as={Col} controlId="reckStudentYear">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="First Year"
                    className="rounded bg-light text-secoundry border-dark"
                    onChange={(e) =>
                      setUserDetails((prev) => {
                        return { ...prev, collegeYear: e.target.value };
                      })
                    }
                  >
                    <option>First Year</option>
                    <option>Secound Year</option>
                    <option>Third Year</option>
                    <option>Fourth Year</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="reckStudentBranch">
                  <Form.Label>Branch</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="CSE"
                    className="rounded bg-light text-secoundry border-dark"
                    onChange={(e) =>
                      setUserDetails((prev) => {
                        return { ...prev, collegeBranch: e.target.value };
                      })
                    }
                  >
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>EE</option>
                    <option>CE</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="reckStudentRollNumber">
                  <Form.Label>Roll No</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="0000000000"
                    className="rounded bg-light text-secoundry border-dark"
                    onChange={(e) =>
                      setUserDetails((prev) => {
                        return { ...prev, collegeRollNumber: e.target.value };
                      })
                    }
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="reckStudentGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Male"
                    className="rounded bg-light text-secoundry border-dark"
                    onChange={(e) =>
                      setUserDetails((prev) => {
                        return { ...prev, gender: e.target.value };
                      })
                    }
                  >
                    <option>Male</option>
                    <option>FeMale</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
            ) : (
              ""
            )}
            {userDetails.collegeName.toString() !== "REC KANNAUJ" ? (
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
                  <Form.Control
                    placeholder="IIT KANPUR"
                    className=" rounded bg-light text-secoundry border-dark"
                    onChange={(e) =>
                      setUserDetails((prev) => {
                        return { ...prev, collegeName: e.target.value };
                      })
                    }
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="otherCity">
                    <Form.Label>College City</Form.Label>
                    <Form.Control
                      placeholder="KANPUR"
                      className="rounded bg-light text-secoundry border-dark"
                      onChange={(e) =>
                        setUserDetails((prev) => {
                          return { ...prev, collegeCity: e.target.value };
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="OtherState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="UTTAR PRADESH"
                      className="rounded bg-light text-secoundry border-dark"
                      onChange={(e) =>
                        setUserDetails((prev) => {
                          return { ...prev, collegeState: e.target.value };
                        })
                      }
                    >
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
                    <Form.Control
                      placeholder="000 000"
                      className="rounded bg-light text-secoundry border-dark"
                      onChange={(e) =>
                        setUserDetails((prev) => {
                          return {
                            ...prev,
                            collegeCityPinCode: e.target.value,
                          };
                        })
                      }
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="otherStudentYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="First Year"
                      className="rounded bg-light text-secoundry border-dark"
                      onChange={(e) =>
                        setUserDetails((prev) => {
                          return { ...prev, collegeYear: e.target.value };
                        })
                      }
                    >
                      <option>First Year</option>
                      <option>Secound Year</option>
                      <option>Third Year</option>
                      <option>Fourth Year</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="otherStudentBranch">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="CSE"
                      className="rounded bg-light text-secoundry border-dark"
                      onChange={(e) =>
                        setUserDetails((prev) => {
                          return { ...prev, collegeBranch: e.target.value };
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="otherStudentRollNumber">
                    <Form.Label>Roll Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0000000000"
                      className="rounded bg-light text-secoundry border-dark"
                      onChange={(e) =>
                        setUserDetails((prev) => {
                          return { ...prev, collegeRollNumber: e.target.value };
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="otherStudentGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="Male"
                      className="rounded bg-light text-secoundry border-dark"
                      onChange={(e) =>
                        setUserDetails((prev) => {
                          return {
                            ...prev,
                            gender: e.target.value,
                          };
                        })
                      }
                    >
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
              <Form.Label>Choose Teams You want to Join</Form.Label>
              <Form.Row
                style={{ border: "1px solid #000" }}
                className="rounded bg-light text-secoundry border-dark"
              >
                <Form.Group as={Col} controlId="formGridCheckbox1" className="">
                  <Form.Check
                    type="checkbox"
                    label="Technical Team"
                    className="text-center text-secoundry ml-2 mb-0"
                    style={{ display: "block", marginTop: "8px" }}
                    onClick={(e) => onClickOncheckBox("Technical-Team")}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCheckbox2">
                  <Form.Check
                    type="checkbox"
                    label="Documentation Team"
                    className="text-center text-secoundry mt-2 ml-2"
                    style={{ disable: "block" }}
                    onClick={(e) => onClickOncheckBox("Documentation-Team")}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCheckbox3">
                  <Form.Check
                    type="checkbox"
                    label="Management Team"
                    className="text-center text-secoundry mt-2 ml-2"
                    style={{ disable: "block" }}
                    onClick={(e) => onClickOncheckBox("Management-Team")}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCheckbox4">
                  <Form.Check
                    type="checkbox"
                    label="Designing Team"
                    className="text-center text-secoundry mt-2 ml-2"
                    style={{ disable: "block" }}
                    onClick={(e) => onClickOncheckBox("Designing-Team")}
                  />
                </Form.Group>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId="whyJoinYou">
              <Form.Label>Why Should we Join You</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="This willEeffect Your selection"
                className="rounded bg-light text-secoundry border-dark"
                onChange={(e) =>
                  setUserDetails((prev) => {
                    return {
                      ...prev,
                      message: e.target.value,
                    };
                  })
                }
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
                style={{ color: "#0275d8", width: "79px" }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" id="form-submit-button-membership">
              Submit
            </Button>
            <ToastContainer/>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormMembership;
