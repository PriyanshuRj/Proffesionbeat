import React from 'react'
import Navbar from './header';
import Footer from './footer';
export default function Layout(props) {
  return (
    <div>
              <Navbar curLocation={props.curLocation} />
      <div className="">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
