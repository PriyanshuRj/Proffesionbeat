import React from 'react'
import Navbar from './header';
import Footer from './footer';
export default function Layout(props) {
  return (
    <div>
              <Navbar curLocation={props.curLocation} />
      <div className="max-w-7xl mx-auto md:px-6 lg:px-8 text-white">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
