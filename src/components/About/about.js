import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function About() {
  return (
    <div className="max-w-3/4 w-7/8 relative pt-[120px] lg:pt-[150px] pb-[110px] bg-white m-auto" style={{maxWidth:"90%"}}>
    <div className="container">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4">
          <div className="hero-content">
            <h1
              className="
                text-dark
                font-bold
                text-4xl
                sm:text-[42px]
                lg:text-[40px]
                xl:text-[42px]
                leading-snug
                mb-3
              "
            >
             
              Why create<br />
              an online course <br />
              with <span className="text-indigo-700">PROFESSIONBEAT?</span>
            </h1>
            <p className="text-base mb-8 text-body-color max-w-[480px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique porro sequi repellat corrupti impedit aliquam dolorem sit accusantium, quibusdam error.
            </p>
            <ul className="flex flex-wrap items-center">
              <li>
                <a
                  href="/"
                  className="
                    py-4
                    px-6
                    sm:px-10
                    lg:px-8
                    xl:px-10
                    inline-flex
                    items-center
                    justify-center
                    text-center text-white text-base
                 
                    hover:bg-opacity-90
                    font-normal
                    rounded-lg
                    bg-indigo-600
                  "
                >
                  View all Cources
                </a>
              </li>
              <li>
                {/* <a
                  href="/"
                  className="
                    py-4
                    px-6
                    sm:px-10
                    lg:px-8
                    xl:px-10
                    inline-flex
                    items-center
                    justify-center
                    text-center text-base
                    font-normal
                    text-body-color
                    hover:text-primary
                  "
                >
                  <span className="mr-2">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="11" fill="#3056D3" />
                      <rect
                        x="6.90906"
                        y="13.3636"
                        width="8.18182"
                        height="1.63636"
                        fill="white"
                      />
                      <rect
                        x="10.1818"
                        y="6"
                        width="1.63636"
                        height="4.09091"
                        fill="white"
                      />
                      <path
                        d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Download App
                </a> */}
              </li>
            </ul>
            <div className="clients pt-16 ">
              <ul className="flex md:flex-row flex-col">
                  <div>

                  <li className="text-xl my-2 "><FontAwesomeIcon icon={faStar} className="text-indigo-700 h-7 w-7 mr-2"/>Unlimited everything</li>
                  <li className="text-xl my-2 "><FontAwesomeIcon icon={faStar} className="text-indigo-700 h-7 w-7 mr-2"/>No technical headaches</li>
                  </div>
                  <div>

                  <li className="text-xl my-2 md:ml-8 "><FontAwesomeIcon icon={faStar} className="text-indigo-700 h-7 w-7 mr-2"/>No transaction fees</li>
                  <li className="text-xl my-2 md:ml-8 "><FontAwesomeIcon icon={faStar} className="text-indigo-700 h-7 w-7 mr-2"/>Free migrations</li>
                  </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/12 px-4"></div>
        <div className="w-full lg:w-5/12 px-4">
          <div className="lg:text-right lg:ml-auto">
            <div className="relative inline-block z-10 pt-11 lg:pt-0">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                alt="hero"
                className="max-w-full lg:ml-auto"
              />
              <span className="absolute -left-8 -bottom-8 z-[-1]">
                <svg
                  width="93"
                  height="93"
                  viewBox="0 0 93 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
