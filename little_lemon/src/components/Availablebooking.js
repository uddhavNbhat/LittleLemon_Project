import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import  axios  from 'axios';
import { Button } from "bootstrap";

function Availablebooking(){
    const [bookdata,setBookdata] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/booking').then(result => setBookdata(result.data)).catch(err => console.log(err));
    },[])

    function deleteBooking(id){
        axios.delete('http://localhost:8081/booking/delete/'+id).then((res)=>{console.log(res); window.location.reload()}).catch((err)=>console.log(err));
    }

    return(
        <div className="container">
            <div className="row">
                {bookdata.length === 0 ? (
                    <h1 style={{textAlign:'center'}}>No Current Booking</h1>
                ): (
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Guests</th>
                            <th scope="col">Time</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookdata.map((bookdata)=>{
                                return <tr>
                                    <td>{bookdata.name}</td>
                                    <td>{bookdata.date}</td>
                                    <td>{bookdata.guests}</td>
                                    <td>{bookdata.timings}</td>
                                    <td><button onClick={()=>{deleteBooking(bookdata._id)}} className="btn btn-danger">Delete</button></td>
                                    {console.log(bookdata._id)}
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                )}
            </div>
            <div style={{textAlign:'center',marginTop:'20px'}}>
                <Link to="/"><button className="btn btn-warning">Home</button></Link>
            </div>
        </div>

    );
}

export default Availablebooking;