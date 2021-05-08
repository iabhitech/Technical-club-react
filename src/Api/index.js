import axios from "axios";
import qs from "qs";
/**
 * 
 * @param {string} url 
 * @param {*} [data]
 * @param {"GET"|"POST"} [method="GET"]
 */

const headers= { "content-type": "application/x-www-form-urlencoded" };


const callApi =async (url,data=null,method="GET") =>{
    try{
        const response = await axios({
            url,
            data:qs.stringify(data),
            method,
            headers  
        })
        return response.data;
    }
    catch(err){
        console.log(err);
        return err.response.data;
    }
    
}
const Api={
    login:(data)=>callApi("http://localhost:3000/login/email",data,"POST"),
    registerNow:(data)=>callApi("http://localhost:3000/signup/postotp",data,"POST"),
    registerOtpSubmit:(data)=>callApi("http://localhost:3000/signup/confirmpostotp",data,"POST"),
    forgetOtpSubmit:(data)=>callApi("http://localhost:3000/signup/forgetotp",data,"POST"),
    submitForgetOtp:(data)=>callApi("http://localhost:3000/signup/submitforgetotp",data,"POST"),
    forgetPasswordSubmit:(data)=>callApi("http://localhost:3000/signup/submitforgetpassword",data,"POST")
}

export default Api;