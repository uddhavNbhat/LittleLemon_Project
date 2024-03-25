import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function Booking(){
    const [date,setDate] = useState();
    const handleDateChange = (date) =>{
        setDate(date);
    }

    const [guest,setGuest] = useState(5);
    const handleGuestChange = (guest) =>{
        setGuest(guest.target.value);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 style={{textAlign:'center'}}>Little Lemon</h1>
                    <h3 style={{textAlign:'center'}}>Chicago</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h3 style={{textAlign:'center'}}>FIND A TABLE FOR ANY OCCASION</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <form>
                    <div className="form-group">
                        <label style={{fontFamily:'cursive'}}>Select a date: </label>
                        <br/>
                        <DatePicker selected={date} onChange={handleDateChange} dateFormat="MM/dd/yyyy" className='form-control'/>
                    </div>
                    <div className="form-group">
                        <label style={{fontFamily:'cursive'}}>Timings: </label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>17:00 PM</option>
                            <option value="1">18:00 PM</option>
                            <option value="2">19:00 PM</option>
                            <option value="3">20:00 PM</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label style={{fontFamily:'cursive'}}>Number of Guests: <span>{guest}</span></label>
                        <input value={guest} onChange={handleGuestChange} type="range" className="form-range" min="0" max="20" id="customRange2"></input>
                    </div>
                    <div className="form-group">
                        <label style={{fontFamily:'cursive'}}>Occasion: </label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Birthday</option>
                            <option value="1">Engagement</option>
                            <option value="2">Anniversary</option>
                            <option value="3">Wedding</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>

        </div>
    )
}
;

export default Booking
