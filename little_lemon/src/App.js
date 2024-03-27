import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Import BrowserRouter
import Home from './components/Home';
import Booking from './components/Booking';
import Success from './components/Success';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/success" element={<Success/>}/>
        </Routes>
    </Router>
  );
}

export default App;
