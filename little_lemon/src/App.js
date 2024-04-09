import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Import BrowserRouter
import Home from './components/Home';
import Booking from './components/Booking';
import Success from './components/Success';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:8081/api')
    .then(res => res.json())
    .then(data => setData(data.message))
    .catch(err => console.log(err))
  },[])

  return (
    <Router>
      {console.log({data})}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/success" element={<Success/>}/>
        </Routes>
    </Router>
  );
}

export default App;
