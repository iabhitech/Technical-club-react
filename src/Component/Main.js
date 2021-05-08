import FeacherTeam from "./FeacherTeam";
import OurAchievements from "./OurAchievements";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import FAQ from "./FAQ";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useState } from "react";
import Api from "../Api";

const Main = ({ userLoggedIn }) => {
  const [forgetEmail, setforgetEmail] = useState("");
  const [forgetOtp, setForgetOtp] = useState("");
  const [forgetPassword, setForgetPassword] = useState("");
  const [forgetConfirmPassword, setForgetConfirmPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  const dataRegistrationForm = {
    firstName,
    lastName,
    email,
    mobileNumber,
    password,
    confirmPassword,
  };
  const LoginFormData = {
    loginEmail,
    loginPassword,
  };

  const register = (e) => {
    e.preventDefault();
    document.getElementById("forget-password-form").hidden = true;
    document.getElementById("signIn").className = "tab-pane fade";
    document.getElementById("register").className = "tab-pane fade show active";
    document.getElementById("signIn-tab").className = "nav-link";
    document.getElementById("register-tab").className = "nav-link active";
  };
  const login = () => {
    document.getElementById("forget-password-form").hidden = true;
    document.getElementById("signIn").className = "tab-pane fade  show active";
    document.getElementById("register").className = "tab-pane fade";
    document.getElementById("signIn-tab").className = "nav-link  active";
    document.getElementById("register-tab").className = "nav-link";
  };
  const forgetForm = () => {
    document.getElementById("forget-password-form").hidden = false;
    document.getElementById("signIn").className = "tab-pane fade";
    document.getElementById("signIn-tab").className = "nav-link";
  };
  const registerNow = async (e) => {
    e.preventDefault();
    const response = await Api.registerNow(dataRegistrationForm);
    if (
      response.toString() === "Otp Send successfully" ||
      response.toString() === "Your Otp Updated"
    ) {
      document.getElementById("otpdiv").hidden = false;
      document.getElementById("defaultRegisterbutton").hidden = true;
      document.getElementById("defaultRegisterFormFirstName").disabled = true;
      document.getElementById("defaultRegisterFormLastName").disabled = true;
      document.getElementById("defaultRegisterFormEmail").disabled = true;
      document.getElementById("defaultRegisterFormPassword").disabled = true;
      document.getElementById(
        "defaultRegisterconfirmFormPassword"
      ).disabled = true;
      document.getElementById("defaultRegisterPhonePassword").disabled = true;
    } else if (
      response.toString() === "Your Password and Confirm Password are not Match"
    ) {
      document.getElementById("defaultpassworcheckblock").innerText =
        "Your Password and Confirm Password are not Match";
    } else if (response.toString() === "Your Password is not correct") {
      document.getElementById("defaultpassworcheckblock").innerText =
        "Your Password is not correct we need your password in otp varification";
    }
  };
  const registerOtpSubmit = async (e) => {
    e.preventDefault();
    const response = await Api.registerOtpSubmit({
      ...dataRegistrationForm,
      otp,
    });
    if (response.message.toString() === "Otp is not correct") {
      document.getElementById("defaultOtpHelpBlock").innerText =
        "Otp is not correct";
    } else if (response.message.toString() === "No User Found") {
      document.getElementById("defaultOtpHelpBlock").innerText =
        "No User Found with this email";
    } else if (response.message.toString() === "Otp Match successfully") {
      document.getElementById("defaultOtpHelpBlock").innerText =
        "Your Account is Created";
      localStorage.setItem("fullName", response.data.fullName);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("mobile", response.data.mobileNumber);
      userLoggedIn("userEmail", response.data.email);
      userLoggedIn("userFullName", response.data.fullName);
      userLoggedIn("userId", response.data._id);
      userLoggedIn("userRole", response.data.role);
    }
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    const response = await Api.login(LoginFormData);
    if (response.message.toString() === "Your Password is Correct") {
      document.getElementById("defaultsignninHelpBlock").innerText =
        "You are Logged IN";
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("fullName", response.data.fullName);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("mobile", response.data.mobileNumber);
      userLoggedIn("userEmail", response.data.email);
      userLoggedIn("userFullName", response.data.fullName);
      userLoggedIn("userId", response.data._id);
      userLoggedIn("userRole", response.data.role);
    } else if (
      response.message.toString() === "No User Exist with this Email"
    ) {
      document.getElementById("defaultsignninHelpBlock").innerText =
        "No User Exist with this Email";
    } else if (response.message?.toString() === "No User Found") {
      document.getElementById("defaultOtpHelpBlock").innerText =
        "No User Found with this email";
    }
  };
  const forgetOtpSubmit = async (e) => {
    e.preventDefault();
    const response = await Api.forgetOtpSubmit({ email: forgetEmail });
    if (response.toString() === "Otp Send successfully") {
      console.log("otp send successfully");
      document.getElementById("defaultforgetformbutton").hidden = true;
      document.getElementById("defaultotpforgetpassword").hidden = false;
      document.getElementById("defaultforgetpasswordEmail").disabled = true;
    } else if (response.toString() === "No User Found with this Email") {
      document.getElementById("defaultregisterformHelpBlock").innerText =
        "No User Found with this Email";
    }
  };
  const submitForgetOtp = async (e) => {
    e.preventDefault();
    const response = await Api.submitForgetOtp({ email: forgetEmail, otp: forgetOtp });
    if (response.toString() === `Otp Match successfully`) {
      document.getElementById("userforgetpasswordOTP").disabled = true;
      document.getElementById("defaultotppassword").hidden = false;
      document.getElementById("defaultforgetpasswordbutton").hidden = true;
    } else if (response.toString() === `Otp not Match`) {
      document.getElementById(
        "defaultregisterformOtpHelpBlock"
      ).innerText = `Otp not Match`;
    } else {
      document.getElementById(
        "defaultregisterformOtpHelpBlock"
      ).innerText = `No User Found with this Email`;
    }
  };
  const forgetPasswordSubmit = async (e) => {
    e.preventDefault();
    const response = await Api.forgetPasswordSubmit({
      email: forgetEmail,
      otp: forgetOtp,
      password: forgetPassword,
      confirmPassword: forgetConfirmPassword,
    });
    document.getElementById("defaultregisterformPasswordHelpBlock").innerText =
      response;
  };
  return (
    <div>
      <main className="mt-0">
        <div className="container">
          <div
            className="card p-4"
            style={{ marginTop: "-2rem", background: "#424f95" }}
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <h1 className="h1-responsive font-weight-bold text-white mt-2">
                  Why We Are?
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-3 text-white">
                  Our club aims to make the student advance and sharp so that
                  they can cope up with future technology era. <br />
                  Here the students of different branches collaborate their
                  fields of study to give innovation and enhancement in
                  technology. This technical club was established in it 2016.
                </h6>
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="#about-us"
                >
                  Learn more
                </a>
              </div>

              <div className="col-md-5 ml-auto">
                <ul
                  className="nav nav-tabs material-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="signIn-tab"
                      data-toggle="tab"
                      href="#signIn"
                      role="tab"
                      aria-controls="signIn"
                      aria-selected="true"
                      onClick={login}
                    >
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="register-tab"
                      data-toggle="tab"
                      href="#register"
                      role="tab"
                      aria-controls="register"
                      aria-selected="false"
                      onClick={register}
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content white" id="myTabContent">
                  <div
                    className="tab-pane fade  show active"
                    id="signIn"
                    role="tabpanel"
                    aria-labelledby="signIn-tab"
                  >
                    <form
                      className="text-center p-5"
                      action="#!"
                      id="login-form"
                    >
                      <p className="h4 mb-4">Sign in</p>

                      <input
                        type="email"
                        id="defaultLoginFormEmail"
                        className="form-control mb-4"
                        placeholder="E-mail"
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />

                      <input
                        type="password"
                        id="defaultLoginFormPassword"
                        className="form-control mb-4"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                      <small
                        id="defaultsignninHelpBlock"
                        className="form-text text-muted mb-4"
                      ></small>

                      <div className="d-flex justify-content-around">
                        <div>
                          {/* <!-- <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember">
                              <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                          </div> --> */}
                        </div>
                        <div>
                          <a
                            style={{ color: "rgb(92,132,240)" }}
                            onClick={(e) => forgetForm(e)}
                            href="#/"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>

                      <button
                        className="btn btn-info btn-block my-4"
                        type="submit"
                        onClick={loginSubmit}
                      >
                        Sign in
                      </button>

                      <p>
                        Not a member?
                        <a
                          onClick={(e) => register(e)}
                          style={{ color: "rgb(92,132,240)" }}
                          href="#/"
                        >
                          Register
                        </a>
                      </p>

                      {/* <!-- <p>or sign in with:</p> */}
                      <a
                        className="mx-2"
                        role="button"
                        href="http://localhost:3000/auth/google"
                      >
                        <i className="fab fa-google light-blue-text"></i>
                      </a>
                      <a href="#/" className="mx-2" role="button">
                        <i className="fab fa-facebook-f light-blue-text"></i>
                      </a>
                      <a href="#/" className="mx-2" role="button">
                        <i className="fab fa-linkedin-in light-blue-text"></i>
                      </a>
                      <a href="#/" className="mx-2" role="button">
                        <i className="fab fa-github light-blue-text"></i>
                      </a>
                    </form>
                  </div>
                  <form
                    className="text-center p-5"
                    action="#!"
                    id="forget-password-form"
                    hidden
                  >
                    <p className="h4 mb-4">Forgot Password</p>

                    <input
                      type="email"
                      id="defaultforgetpasswordEmail"
                      className="form-control mb-4"
                      placeholder="E-mail"
                      onChange={(e) => setforgetEmail(e.target.value)}
                    />
                    <small
                      id="defaultregisterformHelpBlock"
                      className="form-text text-muted mb-4"
                    ></small>
                    <div hidden id="defaultotpforgetpassword">
                      <input
                        type="number"
                        id="userforgetpasswordOTP"
                        max="9999"
                        className="form-control"
                        placeholder="Enter OTP"
                        aria-describedby="defaultOtpforgrtpassswordHelpBlock"
                        onChange={(e) => setForgetOtp(e.target.value)}
                      />
                      <small
                        id="defaultregisterformOtpHelpBlock"
                        className="form-text text-muted mb-4"
                      ></small>
                      <button
                        className="btn btn-info btn-block my-4"
                        type="submit"
                        id="defaultforgetpasswordbutton"
                        onClick={(e) => submitForgetOtp(e)}
                      >
                        Verify
                      </button>
                    </div>
                    <div hidden id="defaultotppassword">
                      <input
                        type="password"
                        name="password"
                        id="defaultOtpFormPassword"
                        className="form-control mb-2 form-registerNow"
                        placeholder="Password"
                        aria-describedby="defaultRegisterFormPasswordHelpBlock"
                        onChange={(e) => setForgetPassword(e.target.value)}
                      />
                      <input
                        type="password"
                        name="cnfPassword"
                        id="defaultOtpconfirmFormPassword"
                        className="form-control form-registerNow"
                        placeholder="Confirm Password"
                        onChange={(e) =>
                          setForgetConfirmPassword(e.target.value)
                        }
                      />
                      <small
                        id="defaultregisterformPasswordHelpBlock"
                        className="form-text text-muted mb-4"
                      ></small>
                      <button
                        className="btn btn-info btn-block my-4"
                        type="submit"
                        id="defaultpasswordforgetformbutton"
                        onClick={(e) => forgetPasswordSubmit(e)}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="d-flex justify-content-around">
                      <div>
                        {/* <!-- <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember">
                              <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                          </div> --> */}
                      </div>

                      <div>
                        <a
                          style={{ color: "rgb(92,132,240)" }}
                          onClick={login}
                          href="#/"
                        >
                          Sign In?
                        </a>
                      </div>
                    </div>

                    <button
                      className="btn btn-info btn-block my-4"
                      type="submit"
                      id="defaultforgetformbutton"
                      onClick={(e) => forgetOtpSubmit(e)}
                    >
                      Verify
                    </button>

                    <p>
                      Not a member?
                      <a
                        onClick={(e) => register(e)}
                        style={{ color: "rgb(92,132,240)" }}
                        href="#/"
                      >
                        Register
                      </a>
                    </p>
                  </form>
                  <div
                    className="tab-pane fade"
                    id="register"
                    role="tabpanel"
                    aria-labelledby="register-tab"
                  >
                    <form
                      className="text-center p-5"
                      id="form-register"
                      method="POST"
                      onSubmit={registerNow}
                    >
                      <p className="h4 mb-4">Sign up</p>
                      <div className="form-row mb-4">
                        <div className="col">
                          <input
                            type="text"
                            name="fname"
                            id="defaultRegisterFormFirstName"
                            className="form-control form-registerNow"
                            placeholder="First name"
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            name="lname"
                            id="defaultRegisterFormLastName"
                            className="form-control form-registerNow"
                            placeholder="Last name"
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="defaultRegisterFormEmail"
                        className="form-control mb-4 form-registerNow"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        name="password"
                        id="defaultRegisterFormPassword"
                        className="form-control mb-2 form-registerNow"
                        placeholder="Password"
                        aria-describedby="defaultRegisterFormPasswordHelpBlock"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <input
                        type="password"
                        name="cnfPassword"
                        id="defaultRegisterconfirmFormPassword"
                        className="form-control form-registerNow"
                        placeholder="Confirm Password"
                        onChange={(e) => setconfirmPassword(e.target.value)}
                      />
                      <small
                        id="defaultRegisterFormPasswordHelpBlock"
                        className="form-text text-muted mb-4"
                      >
                        At least 8 characters and 1 digit
                      </small>
                      <input
                        type="number"
                        name="MobieNumber"
                        id="defaultRegisterPhonePassword"
                        className="form-control form-registerNow"
                        placeholder="Phone number"
                        aria-describedby="defaultRegisterFormPhoneHelpBlock"
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                      <small
                        id="defaultpassworcheckblock"
                        className="form-text text-muted mb-4"
                      ></small>
                      <div
                        className="text-center p-6"
                        action="/authOTP"
                        method="POST"
                        id="otpdiv"
                        hidden
                      >
                        <br />

                        <p className="h6 mb-4">Confirm OTP</p>
                        <input
                          type="number"
                          id="userOTP"
                          className="form-control"
                          placeholder="Enter OTP"
                          aria-describedby="defaultOtpHelpBlock"
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <small
                          id="defaultOtpHelpBlock"
                          className="form-text text-muted mb-4"
                        >
                          Enter 4 digit code that we will sendon your Email
                        </small>
                        <button
                          className="btn btn-info my-4 btn-block waves-effect waves-light"
                          type="submit"
                          id="registerButton"
                          onClick={registerOtpSubmit}
                        >
                          Submit
                        </button>
                      </div>
                      {/* <!-- <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                      Optional - for two step authentication
                  </small> --> */}
                      {/* <!-- <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter">
                      <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
                  </div> --> */}
                      <button
                        className="btn btn-info my-4 btn-block"
                        type="submit"
                        id="defaultRegisterbutton"
                      >
                        REGISTER NOW
                      </button>
                      {/* <FacebookLogin
                        appId="472897187301660"
                        autoLoad
                        callback={responseFacebook}
                        render={(renderProps) => (
                          <a onClick={renderProps.onClick} className="mx-2" role="button">
                        <i className="fab fa-facebook-f light-blue-text"></i>
                      </a>
                        )}
                      /> */}
                      {/* <!-- <p>or sign up with:</p> */}
                      <a
                        className="mx-2"
                        role="button"
                        href="http://localhost:3000/auth/google"
                      >
                        <i className="fab fa-google light-blue-text"></i>
                      </a>
                      <a href="#/" className="mx-2" role="button">
                        <i className="fab fa-facebook-f light-blue-text"></i>
                      </a>
                      <a href="#/" className="mx-2" role="button">
                        <i className="fab fa-linkedin-in light-blue-text"></i>
                      </a>
                      <a href="#/" className="mx-2" role="button">
                        <i className="fab fa-github light-blue-text"></i>
                      </a>
                      <hr />
                      <p>
                        By clicking
                        <em>Sign up</em> you agree to our
                        <a href="#/" target="_blank">
                          terms of service
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FeacherTeam />
        <OurAchievements />
        <AboutUs />
        <Testimonials />
        <Subscribe />
        <FAQ />
      </main>
    </div>
  );
};

export default Main;
