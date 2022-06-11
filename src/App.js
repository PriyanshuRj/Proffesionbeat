import Layout from './components/layout/Layout';
import * as React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Schedule from './components/ScheduleGD/Schedule';
import Home from "./components/home/index";
import About from "./components/About/about";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Contact from "./components/Contact/contact";
import Blog from "./components/blog/Blog";
import Career from "./components/career/Career";
import OTP from "./components/auth/otp";
function App(){
    return (
      <div className="App">
       <Router>
       <Layout >
           <div className="App bg-gray-50">
           <Routes>
                 <Route exact path='/schedule' element={< Schedule />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
                 <Route exact path='/otp' element={< OTP />}></Route>
                 {/* <Route exact path='/contact' element={< Contact/>}></Route> */}
                 <Route exact path='/blog' element={< Blog/>}></Route>
                 {/* <Route exact path='/career' element={< Career/>}></Route> */}
                 <Route exact path='/' element={< Home />}></Route>
          </Routes>
          </div>

       </Layout>
       </Router>
    </div>
  );

}

export default App;
