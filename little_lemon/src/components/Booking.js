import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { submitAPI } from './utils/temp';
import  axios  from 'axios';

function Booking(){
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const [formdata,setFormdata] = useState({
        name : '',
        date : '',
        guests:'5',
        timings: '',
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

    const timings = [
        {id:1, label: "17:00 PM", value:"17:00PM"},
        {id:2, label: "17:30 PM", value:"17:30PM"},
        {id:3, label: "18:00 PM", value:"18:00PM"},
        {id:4, label: "18:30 PM", value:"18:30PM"},
        {id:5, label: "19:00 PM", value:"19:00PM"},
        {id:6, label: "19:30 PM", value:"19:30PM"},
        {id:7, label: "20:00 PM", value:"20:00PM"},
        {id:8, label: "20:30 PM", value:"20:30PM"}
    ];

    const[dropdownitem,setDropdownitem] = useState(timings[0].value);

    const onChangeTime = (event) =>{
        const time = event.target.value
        setDropdownitem(time);
        setFormdata({...formdata,timings:time.toString()});
    }

    const onChangeName = (event) =>{
        const {name,value} = event.target;
        setFormdata({...formdata,[name]:value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formdata);
        const passdata = {
            name : formdata.name,
            date : formdata.date,
            guests : formdata.guests,
            timings: formdata.timings,
        }
        axios.post('http://localhost:8081/booking/addbooking',passdata
        ).then(response => {
            navigate('/success');
        }).catch(error => {
            console.error('Booking error:', error);
            alert('Error booking: ' + error.response.data.message);;
        if(submitAPI(formdata))
            navigate('/success');
        })
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
                            <select value={dropdownitem} onChange={onChangeTime} required>
                                {timings.map(timings => (
                                    <option key={timings.id} value={timings.value}>
                                        {timings.label}
                                    </option>
                                ))}
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