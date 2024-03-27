import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Success({name}){
    const [reservedet,setReservedet] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('Bookings');
        if (name !== null) setReservedet(JSON.parse(name));
      }, []);

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 style={{textAlign:'center'}}>We Hope to see you</h1>
                    <h2 style={{textAlign:'center'}}>Booking Details</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3 style={{textAlign:'center'}}>Name: {reservedet.name}</h3>
                    <h3 style={{textAlign:'center'}}>Date: {reservedet.date}</h3>
                    <h3 style={{textAlign:'center'}}>Guests: {reservedet.guests}</h3>
                    <Link to="/"><button className="btn btn-primary" style={{marginLeft:'47%'}}>Home</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Success;


