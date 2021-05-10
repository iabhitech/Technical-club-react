import axios from "axios";
import qs from "qs";
/**
 *
 * @param {string} url
 * @param {*} [data]
 * @param {"GET"|"POST"} [method="GET"]
 */

const headers = {
  "content-type": "application/x-www-form-urlencoded",
  "authorization": localStorage.getItem("token")
};

const callApi = async (url, data = null, method = "GET") => {
  try {
    const response = await axios({
      url,
      data: qs.stringify(data),
      method,
      headers,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const Api = {
  login: (data) =>
    callApi(`https://techclub-backend.herokuapp.com/login/email`, data, "POST"),
  registerNow: (data) =>
    callApi(
      `https://techclub-backend.herokuapp.com/signup/postotp`,
      data,
      "POST"
    ),
  registerOtpSubmit: (data) =>
    callApi(
      `https://techclub-backend.herokuapp.com/signup/confirmpostotp`,
      data,
      "POST"
    ),
  forgetOtpSubmit: (data) =>
    callApi(
      `https://techclub-backend.herokuapp.com/signup/forgetotp`,
      data,
      "POST"
    ),
  submitForgetOtp: (data) =>
    callApi(
      `https://techclub-backend.herokuapp.com/signup/submitforgetotp`,
      data,
      "POST"
    ),
  forgetPasswordSubmit: (data) =>
    callApi(
      `https://techclub-backend.herokuapp.com/signup/submitforgetpassword`,
      data,
      "POST"
    ),
  submitMemberForm: (data) =>
    callApi(
      `https://techclub-backend.herokuapp.com/genraluser/submit/form`,
      data,
      "POST"
    ),
};

export default Api;
