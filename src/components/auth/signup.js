import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const qs = require('qs');
const API = "http://localhost:8000/signup";

export default function Signup() {
  const navigate = useNavigate();
  const [emailValidator, validate] = useState(null);
  const [nameValidator, validatename] = useState(null);
  const [passwordValidator, validatepassword] = useState(null);
  const [mobileValidator, validatemobile] = useState(null);
  const [mobile, setmobile] = useState(null);
  const [email, setemail] = useState(null);
  const [uname, setname] = useState(null);
  const [password, setpassword] = useState(null);

  const validateEmail = (e) => {
    var email = e.target.value;
    setemail(email);
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      validate('*Enter valid Email');
    }
    else {
      const len = email.length;
      if (email.substring(len - 4, len) === '.com' || email.substring(len - 4, len) === '.org' || email.substring(len - 4, len) === '.net' || email.substring(len - 3, len) === '.in' || email.substring(len - 3, len) === '.en' || email.substring(len - 2, len) === '.us') {
        var index = email.indexOf('@') + 1;

        if (index !== -1 && (email.substring(index, index + 5) === "gmail" || email.substring(index, index + 7) === "outlook" || email.substring(index, index + 6) === "icloud")) {
          validate(" ");
        }

      }
    }
  }
  const validateName = (e) => {
    var name = e.target.value;
    setname(name);
    let state = 0;
    for (let i = 0; i < name.length; i++) {
      if (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) {
        continue;
      }
      if (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) {
        continue;
      }
      else {
        state = 1;
        validatename("* The name can only contain letters");
      }

    }
    if (state === 0) {
      validatename(" ");
    }
  }
  const validatePassword = (e) => {
    var password = e.target.value;
    setpassword(password)
    if (password.length >= 8) {
      validatepassword(" ");
    }
    else {
      validatepassword("* Password must be of atlest length 8");

    }
  }
  const validateMobile = (e) => {
    var password = e.target.value;
    setmobile(password);
    if (password.length === 10) {
      validatemobile(" ");
    }
    else {
      validatemobile("* Mobile No. must be of length 10");

    }
  }
  const submitform = async (e) => {
    e.preventDefault();
    console.log("here");

    if (emailValidator !== " ") {
      console.log("error");
      alert("please choose a correct email first");
    }
    else if (nameValidator !== " ") {
      console.log("error");
      alert("please choose a correct name first");
    }
    else if (passwordValidator !== " ") {
      console.log("error");
      alert("please choose a longer password first");
    }
    else if (mobileValidator !== " ") {
      console.log("error");
      alert("please choose a 10 digit phone number first");
    }

    console.log(email, mobile, password, uname);

    // username,password,mobileno,email
    let headers = new Headers();

    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST', 'OPTIONS');

    const res = await axios.post(API, qs.stringify({
      username: uname,
      email: email,
      password: password,
      mobileno: mobile
    }), headers).then(
      console.log("hehfkgck")
    );
    console.log(res);
    if (res.data.state === 200) {
      alert("Email already exists");
    }
    if (res.status === 200 && res.data.state !== 200) {
      alert("User created");
      navigate("/otp", { state: email });
    }
  }
  return (
    <div className="md:ml-40 md:mr-40">
            <h1 className="pt-10 text-center text-4xl lg:text-6xl font-bold text-indigo-600 mb-8">Regester</h1>
        <section className="">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="Signup"
        />
      </div>
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <form>
        <div className="h-20">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Full Name"
              onChange={(e) => validateName(e)}
            />
            <p className="signuperrors">{nameValidator}</p>
          </div>
          <div className="h-20">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              onChange={(e) => validateEmail(e)}
            />
            <p className="signuperrors">{emailValidator}</p>
          </div>
          <div className="h-20">
            <input
              type="number"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Mobile No."
              onChange={(e) => validateMobile(e)}
            />
            <p className="signuperrors">{mobileValidator}</p>
          </div>


          <div className="h-20">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              onChange={(e) => validatePassword(e)}
            />
            <p className="signuperrors">{passwordValidator}</p>
          </div>

          
      
          <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Regester Now
          </button>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

          <a
            className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
            style={{backgroundColor: "#3b5998"}}
            href="#!"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
   
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-3.5 h-3.5 mr-2"
            >
             
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              /></svg>Continue with Facebook
          </a>
          
        </form>
        <div className="flex flex-row items-center">

        <p className="mr-2">Alread have a account</p>
        <a
            className=" py-3 text-blue-600 font-medium  leading-snug hover:text-indigo-700  transition duration-150 ease-in-out"
            
            href="#!"
            role="button"
            data-mdb-ripple="true"
            >
                <Link to="/login">Login</Link>
        
          </a>
              </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
