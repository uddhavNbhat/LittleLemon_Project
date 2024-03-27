import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { submitAPI } from './utils/temp';
function Booking(){
    const navigate = useNavigate();
    const [formdata,setFormdata] = useState({
        name : '',
        date : '',
        guests:'5',
    });

    useEffect(() => {
        localStorage.setItem('Bookings', JSON.stringify(formdata));
      }, [formdata]);


    const [date,setDate] = useState();
    const handleDateChange = (date) =>{
        const dateString = date.toISOString().slice(0, 10);
        setDate(date);
        setFormdata({...formdata,date:dateString});
    }


    const [guest,setGuest] = useState(5);
    const handleGuestChange = (event) =>{
        const guestNo = event.target.value
        setGuest(guestNo);
        setFormdata({...formdata,guests:guestNo.toString()});
    }

    const onChangeName = (event) =>{
        const {name,value} = event.target;
        setFormdata({...formdata,[name]:value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formdata);
        if(submitAPI(formdata))
            navigate('/success');
    }

    return(
        <>
            <div className='home'>
                <Link to='/'><FaHome style={{fontSize:'3em',margin:'20px'}}/></Link>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 style={{textAlign:'center'}}>Little Lemon</h1>
                        <h3 style={{textAlign:'center'}}>Chicago</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h3 style={{textAlign:'center',paddingBottom:'40px'}}>FIND A TABLE FOR ANY OCCASION</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label style={{fontFamily:'cursive'}}>Name: </label>
                            <input type="text" className='form-control' onChange={onChangeName} value={formdata.name} name="name" required></input>
                        </div>
                        <div className="form-group">
                            <label style={{fontFamily:'cursive'}}>Select a date: </label>
                            <br/>
                            <DatePicker selected={date} onChange={handleDateChange} dateFormat="yyyy/MM/dd" className='form-control' required/>
                        </div>
                        <div className="form-group">
                            <label style={{fontFamily:'cursive'}}>Timings: </label>
                            <select className="form-select" aria-label="Default select example" required>
                                <option selected>17:00 PM</option>
                                <option value="1">18:00 PM</option>
                                <option value="2">19:00 PM</option>
                                <option value="3">20:00 PM</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label style={{fontFamily:'cursive'}}>Number of Guests: <span>{guest}</span></label>
                            <input value={guest} onChange={handleGuestChange} type="range" className="form-range" min="0" max="20" id="customRange2" required></input>
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
        </>
    )
}
;

export default Booking
