import React,{useState} from 'react'
import { Link } from "react-router-dom";
export default function Login() {
    const [emailValidator, validate] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const setPassword = (e) => {
    var password = e.target.value;
    setpassword(password);
  }

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
        console.log(email.substring(index, index + 5));
        if (index !== -1 && (email.substring(index, index + 5) === "gmail" || email.substring(index, index + 7) === "outlook" || email.substring(index, index + 6) === "icloud")) {
          validate(" ");
        }

      }
    }
  }
  return (
    <div className="md:ml-40 md:mr-40 py-12">
        <h1 className="pt-10 text-center text-4xl lg:text-6xl font-bold text-indigo-600">Login</h1>
        <section className="h-screen">
  <div className="container px-6  h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="Phone image"
        />
      </div>
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <form>
        
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              onChange={(e) => validateEmail(e)}
            />
            <p className="signuperrors">{emailValidator}</p>
          </div>


          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e)}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck3"
                
              />
              <label className="form-check-label inline-block text-gray-800" for="exampleCheck2"
                >Remember me</label
              >
            </div>
            <a
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
              >Forgot password?</a
            >
          </div>

      
          <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >Login
              
       
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

        <p className="mr-2">Do not have a account</p>
        <a
            className=" py-3 text-blue-600 font-medium  leading-snug hover:text-indigo-700  transition duration-150 ease-in-out"
            
            href="#!"
            role="button"
            data-mdb-ripple="true"
            >
            <Link to="/signup">SignUp</Link>
          </a>
              </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
