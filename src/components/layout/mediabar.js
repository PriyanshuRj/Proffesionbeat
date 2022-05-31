import React from 'react'
import "./mediaicon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
    faYoutube,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
export default function Mediabar() {
  return (
    <div className="mainicon-box">

    <div className="box">
      <div className="single-box" style={{background: "#3b5998"}}>
        <a href="https://www.facebook.com/Professionbeat" target="_blank" rel="noreferrer"><p>Follow us on<FontAwesomeIcon className = "box-icon" fixedWidth icon={faFacebookF}/></p></a>
      </div>
      
      <div className="single-box" style={{background: "#4099ff"}}>
        <a href="https://twitter.com/professionbeat" target="_blank" rel="noreferrer"><p>Follow us on<FontAwesomeIcon className = "box-icon" fixedWidth icon={faTwitter}/></p></a>
      </div>
      
      <div className="single-box" style={{background: "#CF1D93"}}>
        <a href="https://www.instagram.com/professionbeat/" target="_blank" rel="noreferrer"><p>Follow us on<FontAwesomeIcon className = "box-icon" fixedWidth icon={faInstagram}/></p></a>
      </div>
      
      <div className="single-box" style={{background: "#ff0000"}}>
        <a href="https://www.youtube.com/channel/UCxh25EWiXPBuqjIKiOe6-WQ" target="_blank" rel="noreferrer"><p>Follow us on<FontAwesomeIcon className = "box-icon" fixedWidth icon={faYoutube}/></p></a>
      </div>
      
      <div className="single-box" style={{background: "#465893"}}>
        <a href="https://www.linkedin.com/company/professionbea" target="_blank" rel="noreferrer"><p>Follow us on<FontAwesomeIcon className = "box-icon" fixedWidth icon={faLinkedin}/></p></a>
      </div>
        
    </div></div>
  )
}
