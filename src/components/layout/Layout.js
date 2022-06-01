import React from 'react'
import Navbar from './header';
import Footer from './footer';
import MediaIcons from "./mediabar";
export default function Layout(props) {
  return (
    <div>
              <Navbar curLocation={props.curLocation} />
      <div className="">
        {/* <MediaIcons /> */}
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
