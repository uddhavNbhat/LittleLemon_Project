import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import { Link } from "react-scroll";
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
                    <h1>We Hope to see you</h1>
                    <h2>Booking Details</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Name: {reservedet.name}</h3>
                    <h3>Date: {reservedet.date}</h3>
                    <h3>Guests: {reservedet.guests}</h3>
                </div>
            </div>
        </div>
    );
}

export default Success;


