import { useState } from "react";
import axios from "axios";
import qs from "qs";

import { toast, ToastContainer } from "react-toastify";
const ContactUs = ({ user}) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const sendMail = async (e) => {
    const fullName =
      document.getElementById("form-first-name").value +
      " " +
      document.getElementById("form-last-name").value;
    const email = document.getElementById("form-email").value;
    e.preventDefault();
    const responce = await axios({
      url: "https://techclub-backend.herokuapp.com/contact/mail",
      data: qs.stringify({ subject, message, fullName, email }),
      headers: { "content-type": "application/x-www-form-urlencoded" },
      method: "POST",
    });
    if (responce.data.toString() === "Hey! Your message has been sent") {
      document.getElementById("form-message").value = "";
      document.getElementById("form-subject").value = "";
      return toast("Your message has been sent", { type: "success" });
    }
  };

  return (
    <div>
      <ToastContainer position="bottom-center" />
      <div style={{ backgroundColor: "aliceblue" }}>
        <a name="contact-us" href="#/" style={{ fontSize: "0.01px" }}>
          a
        </a>
        <section className="container py-5 text-center text-lg-left dark-grey-text">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-0 mb-md-0">
              <h3 className="font-weight-bold">Contact Us</h3>

              <p className="text-muted">
                If you have any questions, quries about the club, you are free
                to write us. We will happy to hear from you.
              </p>

              <p>
                <span className="font-weight-bold mr-2">Email:</span>
                <a href="#/">contact@unnat.com</a>
              </p>
              <p>
                <span className="font-weight-bold mr-2">Phone:</span>
                <a href="#/">+91 88002 18506</a>
              </p>
            </div>

            <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
              {
                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form md-outline mb-0">
                          <input
                            type="text"
                            id="form-first-name"
                            className="form-control"
                            value={
                              user.userFullName|| localStorage.getItem('fullName')
                                ? user.userFullName?user.userFullName?.split(" ")[0]:localStorage.getItem('fullName')?.split(" ")[0]
                                : ""
                            }
                            disabled
                          />
                          <label htmlFor="form-first-name">
                          {user.userFullName || localStorage.getItem("fullName")? "" : "Last Name"}
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form md-outline mb-0">
                          <input
                            type="text"
                            id="form-last-name"
                            className="form-control"
                            value={
                              user.userFullName|| localStorage.getItem('fullName')
                                ? user.userFullName?user.userFullName?.split(" ")[1]:localStorage.getItem('fullName')?.split(" ")[1]
                                : ""
                            }
                            disabled
                          />
                          <label htmlFor="form-last-name">{user.userFullName || localStorage.getItem("fullName")? "" : "Last Name"}</label>
                        </div>
                      </div>
                    </div>
                    <div className="md-form md-outline mt-3">
                      <input
                        type="email"
                        id="form-email"
                        className="form-control"
                        value={
                          user.userEmail || localStorage.getItem('email')
                            ? user.userEmail?user.userEmail: localStorage.getItem('email')
                            : ""
                        }
                        disabled
                      />
                      <label htmlFor="form-email">{user.userEmail || localStorage.getItem("email")? "" : "Email"}</label>
                    </div>

                    <div className="md-form md-outline">
                      <label htmlFor="form-subject">Subject</label>
                      <input
                        type="text"
                        id="form-subject"
                        className="form-control"
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                }
              <div className="md-form md-outline mb-3">
                <textarea
                  id="form-message"
                  className="md-textarea form-control"
                  rows="3"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label htmlFor="form-message">How we can help?</label>
              </div>

              <button
                type="submit"
                className="btn btn-info btn-sm btn-rounded ml-0"
                onClick={(e) => sendMail(e)}
              >
                Submit<i className="far fa-paper-plane ml-2"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
