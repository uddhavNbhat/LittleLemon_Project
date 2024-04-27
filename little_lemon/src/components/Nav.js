import img1 from './images/littlelmun.png';
import { Link } from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Booking from './Booking';
import Availablebooking from './Availablebooking';
function Nav() {
    return (
        <>
            <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-warning'>
                <div className='container-fluid'>
                    <img src={img1} alt='Little Lemon' className='navbar-brand'/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse navbar-nav-scroll' id="navbarScroll">
                        <ul className='navbar-nav justify-content-center w-100 d-flex'>
                            <li className='nav-item p-2'><RouterLink to="/" className="nav-link" href='#'>Home</RouterLink></li>
                            <li className='nav-item p-2'><Link to="about" smooth={true} spy={true} offset={50} duration={100} className="nav-link" href='#'>About</Link></li>
                            <li className='nav-item p-2'><Link to="menu" smooth={true} spy={true} offset={50} duration={100} className="nav-link" href='#'>Menu</Link></li>
                            <li className='nav-item p-2'><Link to="test" smooth={true} spy={true} offset={50} duration={100} className="nav-link" href='#'>Testimonials</Link></li>
                            <li className='nav-item p-2'>
                                <RouterLink to="/booking" className="nav-link">Reservations</RouterLink>
                            </li>
                            <li className='nav-item p-2'>
                                <RouterLink to="/availablebookings" className='nav-link'>Current Booking</RouterLink>
                            </li>
                            <li className='nav-item p-2'>
                                <RouterLink to="/signup" className='nav-link'>Sign Up</RouterLink>
                            </li>
                            <li className='nav-item p-2'>
                            <RouterLink to="/signin" className='nav-link'>Sign In</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
