import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "./utils/axiosInstance";

function Availablebooking() {
    const [bookdata, setBookdata] = useState([]);

    useEffect(() => {
        axiosInstance.get('/booking')
            .then(result => setBookdata(result.data))
            .catch(err => console.log(err));
    }, []);

    function deleteBooking(id) {
        axiosInstance.delete(`/booking/delete/${id}`)
            .then(res => {
                console.log(res);
                setBookdata(bookdata.filter(booking => booking._id !== id));
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <div className="row">
                {bookdata.length === 0 ? (
                    <h1 style={{ textAlign: 'center' }}>No Current Booking</h1>
                ) : (
                    <table className="table">
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
                            {bookdata.map((booking) => (
                                <tr key={booking._id}>
                                    <td>{booking.name}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.guests}</td>
                                    <td>{booking.timings}</td>
                                    <td>
                                        <button onClick={() => deleteBooking(booking._id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link to="/"><button className="btn btn-warning">Home</button></Link>
            </div>
        </div>
    );
}

export default Availablebooking;
