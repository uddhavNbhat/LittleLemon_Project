import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Import BrowserRouter
import Home from './components/Home';
import Booking from './components/Booking';
import Success from './components/Success';
import { useState } from 'react';
import { useEffect } from 'react';
import Availablebooking from './components/Availablebooking';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {



  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/success" element={<Success/>}/>
          <Route path="/availablebookings" element = {<Availablebooking/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/signin" element = {<Signin/>}/>
        </Routes>
    </Router>
  );
}

export default App;
