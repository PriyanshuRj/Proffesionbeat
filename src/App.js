import Layout from './components/layout/Layout';
import * as React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Schedule from './components/ScheduleGD/Schedule';
import Home from "./components/home/index";
function App(){
    return (
      <div className="App">
       <Layout >
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/schedules' element={< Schedule />}></Route>
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
