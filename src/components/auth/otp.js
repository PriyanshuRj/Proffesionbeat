import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

import axios from "axios";
const qs = require('qs');
const API = "http://localhost:8000/otpverify";
const API2 = "http://localhost:8000/requestotp";


export default function Otp() {
  const navigate = useNavigate();

  const [validotp, validateotp] = useState(null);
  const { state } = useLocation();
  const [otp, setotp] = useState(null);

  useEffect(() =>{
    document.addEventListener("DOMContentLoaded", function(event) {

        function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function(event) { if (event.key==="Backspace" ) { inputs[i].value='' ; if (i !==0) inputs[i - 1].focus(); } else { if (i===inputs.length - 1 && inputs[i].value !=='' ) { return true; } else if (event.keyCode> 47 && event.keyCode < 58) { inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode> 64 && event.keyCode < 91) { inputs[i].value=String.fromCharCode(event.keyCode); if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); } } OTPInput(); });
  })
  const submitform = async (e) => {

    console.log("clickee");
    if (validotp !== " ") {
      console.log("error");
      alert("inncorect OTP");
    }
    else {
      console.log("email :: ", state);
      let headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');

      headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
      headers.append('Access-Control-Allow-Credentials', 'true');

      headers.append('GET', 'POST', 'OPTIONS');

      const res = await axios.post(API, qs.stringify({
        email: state,
        otp: otp,
      }), headers).then(
        console.log("hehfkgck")
      );
      alert(res.data.message);
      if (res.data.message === "OTP is correct !!") {
        navigate("/login", { replace: true });
      }
    }

  }

  const validateOtp = (e) => {
    var otp = e;
    setotp(e);
    if (otp.length === 6) {
      validateotp(" ");
    }
    else {
      validateotp("* OTP must be of length 6");

    }
  }
  const resendotp = async (e) => {
    console.log("clicked");
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST', 'OPTIONS');

    const res = await axios.post(API2, qs.stringify({
      email: state,
    }), headers).then(
    );
    console.log(res);
    alert(res.data.message);
  }

  return (
    <div>
      
    
      <div className="h-screen bg-gray-50  flex justify-center items-center">
    <div className="container mx-auto ">
        <div className=" mx-auto md:max-w-xl">
            <div className="w-full">
                <div className="bg-white py-3 rounded text-center shadow-md ">
                      <h1 className="text-2xl font-bold mt-6">OTP Verification</h1>
                      <div className="flex flex-col mt-4">
                          <span>Enter the OTP you received at</span>
                          
                      </div>
                      
                      <div id="otp" className="flex flex-col justify-center text-center px-2 mt-5 h-24">
                          <div className="flex items-center justify-center">

                      <OtpInput
                separator={
                    <span>
                    <strong>.</strong>
                  </span>
                }
                numInputs={6}
                onChange={(e) => validateOtp(e)}
                value={otp}
                
                inputStyle={{
                    width: "2rem",
                    height: "3rem",
                    margin: "0 0.5rem",
                    fontSize: "2rem",
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.3)",
                    color:"black"
                }}
                />
                </div>
                      <p className="signuperrors">{validotp}</p>
                      </div>
                      <button className="bg-indigo-600 rounded px-4 py-2 text-white hover:bg-gray-100 hover:text-indigo-600" type="button" onClick={(e) => submitform(e)}><i className="icon ion-md-lock"></i>Submit</button>
                      <div className="flex justify-center text-center mt-5">
                      <button className="flex items-center ease-in-out delay-200 text-white hover:text-gray-100  bg-blue-400 hover:bg-blue-500 cursor-pointer rounded px-4 py-2 mb-6" type="button" onClick={(e) => resendotp(e)}><span className="font-bold">Resend OTP</span></button>
                          {/* <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span className="font-bold">Resend OTP</span></a> */}
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
