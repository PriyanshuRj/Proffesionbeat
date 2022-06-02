import Layout from './components/layout/Layout';
import * as React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Schedule from './components/ScheduleGD/Schedule';
import Home from "./components/home/index";
import About from "./components/About/about";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
function App(){
    return (
      <div className="App">
       <Layout >
       <Router>
           <div className="App bg-gray-50">
           <Routes>
                 <Route exact path='/schedule' element={< Schedule />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
                 {/* <Route exact path='/signup' element={< Signup />}></Route>
                 <Route exact path='/otp' element={< Otp />}></Route>
                 <Route exact path='/success' element={< Success />}></Route> */}
                 <Route exact path='/' element={< Home />}></Route>
          </Routes>
          </div>
       </Router>

       </Layout>
    </div>
  );

}

export default App;
